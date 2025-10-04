/**
 * ThemeToggle component props
 * Implements CONTRACT-HEADER-001 ThemeToggle API
 */
export interface ThemeToggleProps {
  /**
   * Current active theme
   */
  theme: 'light' | 'dark';

  /**
   * Callback when theme changes
   */
  onToggle: (theme: 'light' | 'dark') => void;

  /**
   * Size of toggle buttons
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Additional CSS classes
   */
  className?: string;
}

export type { ThemeToggleProps as default };
