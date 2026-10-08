"use client";

import React, { useEffect, useRef, useState } from 'react';
import { CalendarCheck, ExternalLink, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Picking a time, through Calendly.
 *
 * This replaces a calendar we built ourselves on top of the Google Calendar
 * API. That version had been returning 500 to every visitor for some time
 * without anyone noticing, which is the real argument against it: a booking
 * page that fails silently costs more than it ever saved. Calendly is somebody
 * else's job to keep running, and it tells Mariam when it breaks.
 *
 * The script is Calendly's own, loaded from their domain, which is how they
 * require it. It is fetched once per page load and reused, because their
 * widget scans the document when it loads and will not re initialise on its
 * own when a single page app swaps the dialog open and shut.
 *
 * If the script does not load, for an ad blocker or a flaky connection, the
 * visitor gets a plain link to the same Calendly page rather than an empty
 * box. Losing the embed should not lose the booking.
 */

const CALENDLY_URL =
  'https://calendly.com/mariam-calpir/30min?hide_event_type_details=1&hide_gdpr_banner=1';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

/** One load per page, shared by every instance of this component. */
let scriptPromise: Promise<void> | null = null;

const loadCalendly = (): Promise<void> => {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('calendly script failed')));
      return;
    }
    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('calendly script failed'));
    document.head.appendChild(s);
  }).catch((err) => {
    // Let the next mount try again rather than caching the failure forever.
    scriptPromise = null;
    throw err;
  });

  return scriptPromise;
};

interface CalendlyEmbedProps {
  /** Prefills the email box, when the visitor already typed one into the hero. */
  initialEmail?: string;
  /** Taller on its own page than inside the popup. */
  height?: number;
  className?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  initialEmail,
  height = 700,
  className,
}) => {
  const host = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'failed'>('loading');

  // Built once per email so the effect does not re-run on every render.
  const url = initialEmail
    ? `${CALENDLY_URL}&email=${encodeURIComponent(initialEmail)}`
    : CALENDLY_URL;

  useEffect(() => {
    let live = true;

    loadCalendly()
      .then(() => {
        if (!live || !host.current || !window.Calendly) return;
        host.current.innerHTML = '';
        window.Calendly.initInlineWidget({ url, parentElement: host.current });
        setState('ready');
      })
      .catch(() => {
        if (live) setState('failed');
      });

    return () => {
      live = false;
      if (host.current) host.current.innerHTML = '';
    };
  }, [url]);

  if (state === 'failed') {
    return (
      <div className={cn('text-center px-6 py-12', className)}>
        <CalendarCheck size={28} className="text-emerald-600 mx-auto mb-4" />
        <h3 className="text-navy text-lg font-bold mb-2">The calendar did not load</h3>
        <p className="text-slate-600 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
          An ad blocker or a patchy connection usually explains it. The booking page
          itself works fine in a new tab.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-tight px-7 py-4 rounded-xl transition-colors"
        >
          Open the calendar <ExternalLink size={16} />
        </a>
        <p className="mono text-[11px] tracking-wider text-slate-500 mt-5">
          Or email info@calpir.com and we will send you times.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      {state === 'loading' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500"
          aria-hidden="true"
        >
          <Loader2 size={22} className="animate-spin text-emerald-600" />
          <span className="mono text-[11px] tracking-wider">Loading available times</span>
        </div>
      )}
      <div
        ref={host}
        style={{ minWidth: 320, height }}
        aria-label="Pick a time for a free 30 minute call"
      />
    </div>
  );
};

export default CalendlyEmbed;
