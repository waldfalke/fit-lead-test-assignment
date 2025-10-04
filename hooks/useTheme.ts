import { useTheme as useNextTheme } from 'next-themes';

/**
 * useTheme Hook
 * 
 * React hook for accessing current theme and toggle function.
 * Implements CONTRACT-THEME-001 API contract.
 * 
 * @returns {Object} Theme control object
 * @returns {string} theme - Current active theme ('light' | 'dark')
 * @returns {function} setTheme - Function to set specific theme
 * @returns {function} toggleTheme - Function to switch between themes
 * 
 * @example
 * ```tsx
 * const { theme, setTheme, toggleTheme } = useTheme();
 * 
 * // Set specific theme
 * setTheme('dark');
 * 
 * // Toggle between themes
 * toggleTheme();
 * ```
 */
export function useTheme() {
  const { theme, setTheme } = useNextTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme: theme as 'light' | 'dark',
    setTheme: (newTheme: 'light' | 'dark') => setTheme(newTheme),
    toggleTheme,
  };
}
