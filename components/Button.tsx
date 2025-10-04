import React from 'react';
import Link from 'next/link';
import { ButtonProps } from './Button.types';

/**
 * Button Component
 * 
 * Accessible, themeable button component following Fit&Lead design system.
 * Implements CONTRACT-BUTTON-001 requirements.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" iconLeft={<Icon />}>With Icon</Button>
 * <Button loading disabled>Loading...</Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      iconLeft,
      iconRight,
      iconOnly = false,
      onClick,
      type = 'button',
      ariaLabel,
      href,
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    // Base styles - always applied
    const baseStyles = [
      'inline-flex',
      'items-center',
      'justify-center',
      'gap-2',
      'font-medium',
      'transition-all',
      'duration-200',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
    ].join(' ');

    // Variant styles - mapped to design tokens
    const variantStyles: Record<typeof variant, string> = {
      primary: [
        'bg-[var(--color-primary)]',
        'text-white',
        'hover:bg-[var(--color-primary-hover)]',
        'focus-visible:ring-2',
        'focus-visible:ring-[var(--color-focus)]',
        'active:scale-95',
      ].join(' '),
      secondary: [
        'bg-transparent',
        'text-[var(--color-primary)]',
        'border-2',
        'border-[var(--color-primary)]',
        'hover:bg-[var(--color-primary)]',
        'hover:text-white',
        'focus-visible:ring-2',
        'focus-visible:ring-[var(--color-focus)]',
        'active:scale-95',
      ].join(' '),
      ghost: [
        'bg-transparent',
        'text-[var(--color-text-primary)]',
        'hover:bg-[var(--color-surface)]',
        'focus-visible:ring-2',
        'focus-visible:ring-[var(--color-focus)]',
        'active:scale-95',
      ].join(' '),
      danger: [
        'bg-[var(--color-danger)]',
        'text-white',
        'hover:bg-[var(--color-danger)]',
        'hover:opacity-90',
        'focus-visible:ring-2',
        'focus-visible:ring-[var(--color-focus)]',
        'active:scale-95',
      ].join(' '),
      subtle: [
        'bg-[var(--color-surface)]',
        'text-[var(--color-text-primary)]',
        'hover:bg-[var(--color-border)]',
        'focus-visible:ring-2',
        'focus-visible:ring-[var(--color-focus)]',
        'active:scale-95',
      ].join(' '),
      link: [
        'bg-transparent',
        'text-[var(--color-primary)]',
        'underline',
        'underline-offset-4',
        'hover:opacity-80',
        'focus-visible:ring-2',
        'focus-visible:ring-[var(--color-focus)]',
        'focus-visible:ring-offset-0',
      ].join(' '),
      tonal: [
        'bg-[var(--color-accent)]',
        'text-[var(--color-text-on-accent)]',
        'hover:bg-[var(--color-accent-hover)]',
        'focus-visible:ring-2',
        'focus-visible:ring-[var(--color-focus)]',
        'active:scale-95',
      ].join(' '),
    };

    // Size styles - mapped to spacing tokens
    const sizeStyles: Record<typeof size, string> = iconOnly
      ? {
          // Icon-only: square buttons (w = h)
          xs: 'p-[var(--spacing-1)] text-sm rounded-[var(--radius-md)] w-8 h-8',
          sm: 'p-[var(--spacing-1)] text-sm rounded-[var(--radius-md)] w-9 h-9',
          md: 'p-[var(--spacing-1)] text-base rounded-[var(--radius-md)] w-10 h-10',
          lg: 'p-[var(--spacing-3)] text-lg rounded-[var(--radius-md)] w-11 h-11',
          xl: 'p-[var(--spacing-4)] text-xl rounded-[var(--radius-md)] w-12 h-12',
        }
      : {
          // Regular: rectangular buttons with text
          xs: 'px-[var(--spacing-4)] py-[var(--spacing-2)] text-sm rounded-full min-h-8',
          sm: 'px-[var(--spacing-6)] py-[var(--spacing-2)] text-sm rounded-full min-h-9',
          md: 'px-8 py-[var(--spacing-2)] text-base rounded-full min-h-10',
          lg: 'px-12 py-[var(--spacing-3)] text-lg rounded-full min-h-11',
          xl: 'px-[var(--spacing-16)] py-[var(--spacing-4)] text-xl rounded-full min-h-12',
        };

    // Combine all styles
    const buttonClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Handle click with loading/disabled state
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    // Button content
    const buttonContent = (
      <>
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && iconLeft && <span aria-hidden="true">{iconLeft}</span>}
        {children}
        {!loading && iconRight && <span aria-hidden="true">{iconRight}</span>}
      </>
    );

    // If href provided, render as Link
    if (href && !disabled && !loading) {
      return (
        <Link href={href} className={buttonClasses} aria-label={ariaLabel}>
          {buttonContent}
        </Link>
      );
    }

    // Default: render as button
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        onClick={handleClick}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
        aria-disabled={disabled || loading}
        {...rest}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
