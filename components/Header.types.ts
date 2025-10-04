/**
 * Header component props
 * Implements CONTRACT-HEADER-001 API
 */

import { NavigationItem } from '@/config/navigation';

export interface HeaderProps {
  /**
   * Array of navigation links
   */
  navigation: NavigationItem[];

  /**
   * Current active theme
   */
  currentTheme: 'light' | 'dark';

  /**
   * Callback when theme button is clicked
   */
  onThemeToggle: (theme: 'light' | 'dark') => void;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether header is sticky
   * @default true
   */
  sticky?: boolean;
}

export type { HeaderProps as default };
