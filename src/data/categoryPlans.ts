/**
 * Which monthly plan covers which department.
 *
 * Every category on the services page can be bought one service at a time, or
 * handed over as a monthly plan. This is the map between the two, so the
 * "or make it recurring" offer appears under every department rather than
 * only the ones that happen to have a plan named after them.
 */
export const CATEGORY_PLANS: Record<string, string[]> = {
  'formation-compliance': ['hr-admin-monthly'],
  'web-foundation': ['ops-systems-monthly'],
  'brand-creative': ['marketing-seo-monthly'],
  'sales-marketing': ['marketing-seo-monthly', 'sales-crm-monthly'],
  'ai-automation': ['sales-crm-monthly', 'ops-systems-monthly'],
  'operations-growth': ['ops-systems-monthly'],
  'people-talent': ['hr-admin-monthly'],
};

/** The category id for a category name, since the catalog stores names. */
export const CATEGORY_ID_BY_NAME: Record<string, string> = {
  'Formation & Compliance': 'formation-compliance',
  'Web & Foundation': 'web-foundation',
  'Brand & Creative': 'brand-creative',
  'Sales & Marketing': 'sales-marketing',
  'AI & Automation': 'ai-automation',
  'Operations & Growth': 'operations-growth',
  'People & Talent': 'people-talent',
};
