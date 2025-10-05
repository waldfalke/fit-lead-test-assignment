/**
 * Navigation configuration
 * 
 * Centralized navigation data used across Header, Footer, and other components.
 * Single source of truth to avoid hardcoding navigation items.
 */

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean; // Opens in new tab if true
}

/**
 * Main site navigation
 * Used in Header and Footer for consistency
 */
export const SITE_NAVIGATION: NavigationItem[] = [
  { label: 'Главная', href: '/', active: false },
  { label: 'UI Kit', href: '/ui-kit', active: false },
  { label: 'Storybook', href: 'https://waldfalke.github.io/fit-lead-test-assignment/', active: false, external: true },
  { label: 'GitHub', href: 'https://github.com/waldfalke/fit-lead-test-assignment', active: false, external: true },
  { label: 'README', href: 'https://github.com/waldfalke/fit-lead-test-assignment#readme', active: false, external: true },
];

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  vk: 'https://vk.com/affiliateclub',
  telegram: 'https://t.me/FitnessAffiliate',
};

/**
 * Legal/Info links
 */
export const LEGAL_LINKS = [
  { label: 'Политика обработки персональных данных', href: '/privacy' },
  { label: 'Информация о продукте', href: '/info' },
];

/**
 * Company info
 */
export const COMPANY_INFO = {
  name: 'ООО «ЛИДЕРЫ МНЕНИЙ»',
  inn: '6685214668',
};
