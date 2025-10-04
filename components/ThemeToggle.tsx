import React from 'react';
import { Button } from './Button';
import { SunIcon, MoonIcon } from './icons';
import { ThemeToggleProps } from './ThemeToggle.types';

/**
 * ThemeToggle Component
 * 
 * Two ghost buttons for switching between light and dark themes.
 * Implements CONTRACT-HEADER-001 ThemeToggle requirements.
 * 
 * @example
 * ```tsx
 * <ThemeToggle 
 *   theme="light" 
 *   onToggle={(theme) => setTheme(theme)} 
 * />
 * ```
 */
export const ThemeToggle = React.forwardRef<HTMLDivElement, ThemeToggleProps>(
  ({ theme, onToggle, size = 'md', className = '' }, ref) => {
    return (
      <div 
        ref={ref}
        className={`flex gap-[var(--spacing-4)] ${className}`}
        role="group"
        aria-label="Theme toggle"
      >
        {/* Light theme button */}
        <Button
          variant="ghost"
          size={size}
          iconOnly
          onClick={() => onToggle('light')}
          ariaLabel="Switch to light theme"
          className={theme === 'light' ? 'bg-[var(--color-primary)]/10' : ''}
        >
          <SunIcon size={20} />
        </Button>

        {/* Dark theme button */}
        <Button
          variant="ghost"
          size={size}
          iconOnly
          onClick={() => onToggle('dark')}
          ariaLabel="Switch to dark theme"
          className={theme === 'dark' ? 'bg-[var(--color-primary)]/10' : ''}
        >
          <MoonIcon size={20} />
        </Button>
      </div>
    );
  }
);

ThemeToggle.displayName = 'ThemeToggle';
