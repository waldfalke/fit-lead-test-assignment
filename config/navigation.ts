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
}

/**
 * Main site navigation
 * Used in Header and Footer for consistency
 */
export const SITE_NAVIGATION: NavigationItem[] = [
  { label: 'Главная', href: '/', active: false },
  { label: 'UI Kit', href: '/ui-kit', active: false },
  { label: 'Design System', href: '/design-system', active: false },
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
