/**
 * A photograph for each department, and for the build.
 *
 * The site was entirely drawn: icons, panels and diagrams, and not one
 * picture of a person. That reads as a template. A photograph of somebody
 * doing the work is what makes a page look like a company rather than a
 * landing page generator, so every department gets one and the alt text
 * describes the picture rather than repeating the heading.
 *
 * These are licensed stock, free for commercial use, placed as illustration.
 * None of them is a Calpir customer and nothing on the site claims otherwise.
 * Swap any file in public/img/photo for a real one of your own work and
 * nothing here needs to change.
 */

export interface Photo {
  /** Full width, 1500x752. */
  band: string;
  /** Card crop, 800x520. */
  card: string;
  alt: string;
}

export const PLAN_PHOTOS: Record<string, Photo> = {
  'marketing-seo-monthly': {
    band: '/img/photo/owner.jpg',
    card: '/img/photo/owner-card.jpg',
    alt: 'Two shop owners in aprons standing behind the counter of their store',
  },
  'ops-systems-monthly': {
    band: '/img/photo/ops.jpg',
    card: '/img/photo/ops-card.jpg',
    alt: 'A woman concentrating on a screen at her desk',
  },
  'sales-crm-monthly': {
    band: '/img/photo/sales.jpg',
    card: '/img/photo/sales-card.jpg',
    alt: 'Two people working through paperwork and laptops at a long wooden desk',
  },
  'hr-admin-monthly': {
    band: '/img/photo/hr.jpg',
    card: '/img/photo/hr-card.jpg',
    alt: 'An interview across a meeting room table, the interviewer holding a form',
  },
  'brand-content-monthly': {
    band: '/img/photo/content.jpg',
    card: '/img/photo/content-card.jpg',
    alt: 'A small film crew setting up a camera on a tripod indoors',
  },
  'compliance-filings-monthly': {
    band: '/img/photo/compliance.jpg',
    card: '/img/photo/compliance-card.jpg',
    alt: 'A printed contract on a wooden desk with two pens beside it',
  },
  'everything-monthly': {
    band: '/img/photo/team.jpg',
    card: '/img/photo/team-card.jpg',
    alt: 'Four colleagues leaning over a table working on something together',
  },
};

export const TEAM_PHOTO: Photo = {
  band: '/img/photo/team.jpg',
  card: '/img/photo/team-card.jpg',
  alt: 'Four colleagues leaning over a table working on something together',
};

export const BUILD_PHOTO: Photo = {
  band: '/img/photo/build.jpg',
  card: '/img/photo/build-card.jpg',
  alt: 'A man fixing something to a wall with a hammer',
};

export const OWNER_PHOTO: Photo = PLAN_PHOTOS['marketing-seo-monthly'];

/**
 * The home page hero.
 *
 * A desk with the whole business drawn out on paper: the plan, the numbers,
 * the channels and the tools, before any of it exists. That is the moment
 * this company sells into, which is why it sits behind the first thing
 * anybody reads rather than a photograph of somebody else's shop.
 */
export const HERO_PHOTO: Photo = {
  band: '/img/photo/hero-desk.jpg',
  card: '/img/photo/hero-desk-card.jpg',
  alt: 'A desk seen from above: a business plan drawn by hand across a large sheet of paper, with a laptop, a camera and a coffee around it',
};
