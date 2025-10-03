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
        'bg-primary',
        'text-white',
        'hover:bg-[--color-primary-hover]',
        'focus-visible:ring-[--color-focus]',
        'active:scale-95',
      ].join(' '),
      secondary: [
        'bg-transparent',
        'text-primary',
        'border-2',
        'border-primary',
        'hover:bg-primary',
        'hover:text-white',
        'focus-visible:ring-[--color-focus]',
        'active:scale-95',
      ].join(' '),
      ghost: [
        'bg-transparent',
        'text-primary',
        'hover:bg-surface',
        'focus-visible:ring-[--color-focus]',
        'active:scale-95',
      ].join(' '),
      danger: [
        'bg-[--color-danger]',
        'text-white',
        'hover:opacity-90',
        'focus-visible:ring-[--color-danger]',
        'active:scale-95',
      ].join(' '),
      subtle: [
        'bg-surface',
        'text-[--color-text-primary]',
        'hover:bg-[--color-border]',
        'focus-visible:ring-[--color-focus]',
        'active:scale-95',
      ].join(' '),
      link: [
        'bg-transparent',
        'text-primary',
        'underline',
        'underline-offset-4',
        'hover:opacity-80',
        'focus-visible:ring-[--color-focus]',
        'focus-visible:ring-offset-0',
      ].join(' '),
      tonal: [
        'bg-accent',
        'text-[--color-text-on-accent]',
        'hover:bg-[--color-accent-hover]',
        'focus-visible:ring-[--color-focus]',
        'active:scale-95',
      ].join(' '),
    };

    // Size styles - mapped to spacing tokens
    const sizeStyles: Record<typeof size, string> = {
      xs: 'px-3 py-1.5 text-xs rounded-full min-h-[32px]',
      sm: 'px-4 py-2 text-sm rounded-full min-h-[36px]',
      md: 'px-6 py-2.5 text-base rounded-full min-h-[40px]',
      lg: 'px-8 py-3 text-lg rounded-full min-h-[44px]',
      xl: 'px-10 py-4 text-xl rounded-full min-h-[48px]',
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
