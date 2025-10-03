import React from 'react';
import Link from 'next/link';
import { CardProps } from './Card.types';

/**
 * Card Component
 * 
 * Reusable content card for benefits, features, and content grids.
 * Implements CONTRACT-CARD-001 requirements.
 * 
 * @example
 * ```tsx
 * <Card 
 *   icon={<Icon />}
 *   title="Feature Title"
 *   description="Feature description text"
 *   variant="elevated"
 * />
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      icon,
      title,
      description,
      variant = 'default',
      href,
      onClick,
      className = '',
      headingLevel = 'h3',
      ...rest
    },
    ref
  ) => {
    // Base styles - always applied
    const baseStyles = [
      'flex',
      'flex-col',
      'gap-4',
      'p-6',
      'rounded-lg',
      'transition-all',
      'duration-200',
    ].join(' ');

    // Variant styles - mapped to design tokens
    const variantStyles: Record<typeof variant, string> = {
      default: [
        'bg-surface',
        'border',
        'border-transparent',
      ].join(' '),
      elevated: [
        'bg-surface',
        'shadow-md',
        'hover:shadow-lg',
      ].join(' '),
      outlined: [
        'bg-transparent',
        'border',
        'border-[--color-border]',
        'hover:border-primary',
      ].join(' '),
    };

    // Interactive styles - for clickable cards
    const interactiveStyles = (href || onClick) ? [
      'cursor-pointer',
      'hover:scale-[1.02]',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-[--color-focus]',
      'focus-visible:ring-offset-2',
      'active:scale-[0.98]',
    ].join(' ') : '';

    // Combine all styles
    const cardClasses = [
      baseStyles,
      variantStyles[variant],
      interactiveStyles,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Heading component based on headingLevel prop
    const HeadingTag = headingLevel as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    // Card content
    const cardContent = (
      <>
        {icon && (
          <div className="flex-shrink-0" aria-hidden="true">
            {icon}
          </div>
        )}
        <div className="flex-1 space-y-2">
          <HeadingTag className="text-xl font-semibold text-[--color-text-primary]">
            {title}
          </HeadingTag>
          <p className="text-base text-[--color-text-secondary] leading-relaxed">
            {description}
          </p>
        </div>
      </>
    );

    // If href provided, render as Link
    if (href) {
      return (
        <Link href={href} className={cardClasses} {...rest}>
          {cardContent}
        </Link>
      );
    }

    // If onClick provided, render as button
    if (onClick) {
      return (
        <button
          type="button"
          onClick={onClick}
          className={cardClasses}
          ref={ref as React.Ref<HTMLButtonElement>}
          {...rest}
        >
          {cardContent}
        </button>
      );
    }

    // Default: render as div
    return (
      <div className={cardClasses} ref={ref} {...rest}>
        {cardContent}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
