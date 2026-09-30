/**
 * A colour per department.
 *
 * Six identical white cards in a grid is not a design, it is a spreadsheet
 * with rounded corners. Each department carries its own pale ground, its own
 * ink and its own border so a row of them has rhythm and so somebody who saw
 * the Sales card on the home page recognises it on the pricing page.
 *
 * Every tint is low chroma, so none of them competes with the emerald that
 * carries the brand, and none of them is orange or navy.
 */

export interface Tint {
  /** Pale background for a card or an icon chip. */
  bg: string;
  /** Text and icon colour that sits on that background. */
  ink: string;
  /** Border for a card using this tint. */
  border: string;
  /** A solid fill, for the one element that should be loud. */
  solid: string;
}

export const TINTS: Record<string, Tint> = {
  emerald: { bg: 'bg-emerald-50', ink: 'text-emerald-700', border: 'border-emerald-200', solid: 'bg-emerald-600' },
  teal: { bg: 'bg-teal-50', ink: 'text-teal-700', border: 'border-teal-200', solid: 'bg-teal-600' },
  sky: { bg: 'bg-sky-50', ink: 'text-sky-700', border: 'border-sky-200', solid: 'bg-sky-600' },
  violet: { bg: 'bg-violet-50', ink: 'text-violet-700', border: 'border-violet-200', solid: 'bg-violet-600' },
  rose: { bg: 'bg-rose-50', ink: 'text-rose-700', border: 'border-rose-200', solid: 'bg-rose-600' },
  lime: { bg: 'bg-lime-50', ink: 'text-lime-700', border: 'border-lime-200', solid: 'bg-lime-600' },
};

/** Which tint belongs to which monthly plan. */
export const PLAN_TINT: Record<string, Tint> = {
  'marketing-seo-monthly': TINTS.emerald,
  'ops-systems-monthly': TINTS.teal,
  'sales-crm-monthly': TINTS.violet,
  'hr-admin-monthly': TINTS.rose,
  'brand-content-monthly': TINTS.sky,
  'compliance-filings-monthly': TINTS.lime,
  'everything-monthly': TINTS.emerald,
};

/** Which tint belongs to which service category. */
export const CATEGORY_TINT: Record<string, Tint> = {
  'formation-compliance': TINTS.lime,
  'web-foundation': TINTS.teal,
  'brand-creative': TINTS.sky,
  'sales-marketing': TINTS.emerald,
  'ai-automation': TINTS.violet,
  'operations-growth': TINTS.teal,
  'people-talent': TINTS.rose,
};

/** A tint by position, for lists that have no natural key. */
export const TINT_ORDER: Tint[] = [
  TINTS.emerald, TINTS.teal, TINTS.violet, TINTS.rose, TINTS.sky, TINTS.lime,
];

export const tintAt = (i: number): Tint => TINT_ORDER[i % TINT_ORDER.length];
