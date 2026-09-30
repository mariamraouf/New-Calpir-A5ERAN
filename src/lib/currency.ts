/**
 * Which currency a page opens on.
 *
 * Every pricing page used to start on dollars, so a visitor in Manchester read
 * a dollar figure and had to notice the toggle to see the pound one. This
 * picks a sensible default instead.
 *
 * The prices are not converted. Each currency is a figure set by hand in
 * Stripe, and Adaptive Pricing is switched off in api/checkout.ts, so "fixed,
 * not converted" still holds. This only chooses which of the three fixed
 * figures is showing when the page loads.
 *
 * The guess is made in three steps, best first:
 *
 *   1. What they picked last time, if they picked. A manual choice is never
 *      overridden.
 *   2. The browser's own locale, read synchronously so the first paint is
 *      already right and nothing flickers.
 *   3. The country the request came from, fetched from /api/locale. Slower,
 *      but it is the honest answer: a British person with an en-US laptop
 *      still gets pounds.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Currency } from '@/data/plans';

const STORE_KEY = 'calpir.currency';

/** Countries that spend euros, including the small states that use it. */
const EURO = new Set([
  'AT', 'BE', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV',
  'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES',
  'AD', 'MC', 'SM', 'VA', 'ME', 'XK',
]);

const POUND = new Set(['GB', 'IM', 'JE', 'GG']);

/** A country code to one of the three currencies we actually sell in. */
export const currencyForCountry = (country: string | null | undefined): Currency => {
  const c = (country || '').toUpperCase();
  if (POUND.has(c)) return 'gbp';
  if (EURO.has(c)) return 'eur';
  return 'usd';
};

/** Whatever they chose last time, if anything. */
const remembered = (): Currency | null => {
  try {
    const v = window.localStorage.getItem(STORE_KEY);
    return v === 'usd' || v === 'gbp' || v === 'eur' ? v : null;
  } catch {
    return null;
  }
};

const remember = (currency: Currency) => {
  try {
    window.localStorage.setItem(STORE_KEY, currency);
  } catch {
    /* private browsing, or storage switched off. Not worth a broken page. */
  }
};

/**
 * The synchronous guess, from the browser's locale.
 *
 * `en-GB` gives GB, `de-DE` gives DE. A bare `en` or `de` has no country in
 * it, so a language only hint is used for the eurozone languages and
 * otherwise left alone.
 */
export const guessCurrency = (): Currency => {
  if (typeof window === 'undefined') return 'usd';

  const saved = remembered();
  if (saved) return saved;

  const tags: string[] = Array.isArray(navigator.languages) && navigator.languages.length
    ? [...navigator.languages]
    : [navigator.language || ''];

  for (const tag of tags) {
    const parts = tag.split('-');
    const region = parts.length > 1 ? parts[parts.length - 1] : '';
    if (/^[A-Za-z]{2}$/.test(region)) {
      const guess = currencyForCountry(region);
      if (guess !== 'usd') return guess;
      // An explicit non-euro, non-UK country. Dollars is the right answer and
      // there is no point reading further down the list.
      return 'usd';
    }
  }

  return 'usd';
};

/**
 * Currency state for a pricing page.
 *
 * Use exactly like useState. The value starts on the synchronous guess and is
 * corrected once from the server, unless the visitor has already touched the
 * toggle, in which case it is left alone for good.
 */
export function useAutoCurrency(): [Currency, (next: Currency) => void] {
  const [currency, setCurrencyState] = useState<Currency>(guessCurrency);

  // True once the visitor picks for themselves, or once we find a choice they
  // made on an earlier visit. Either way the server no longer gets a say.
  const chosen = useRef<boolean>(typeof window !== 'undefined' && remembered() !== null);

  const setCurrency = useCallback((next: Currency) => {
    chosen.current = true;
    remember(next);
    setCurrencyState(next);
  }, []);

  useEffect(() => {
    if (chosen.current) return;

    let live = true;
    const stop = new AbortController();

    fetch('/api/locale', { signal: stop.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { country?: string | null } | null) => {
        if (!live || chosen.current || !data?.country) return;
        setCurrencyState(currencyForCountry(data.country));
      })
      .catch(() => {
        /* No answer, offline, or the endpoint is not deployed yet. The locale
           guess stands, and the toggle is right there. */
      });

    return () => {
      live = false;
      stop.abort();
    };
  }, []);

  return [currency, setCurrency];
}
