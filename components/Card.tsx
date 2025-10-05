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
    },
    ref
  ) => {
    // Base styles - always applied
    const baseStyles = [
      'flex',
      'flex-col',
      'gap-[var(--spacing-6)]',  // 24px
      'p-[var(--spacing-8)]',   // 32px
      'rounded-3xl',  // 24px - rounded corners
      'transition-all',
      'duration-200',
      'min-w-[17.5rem]',  // 280px - минимальная ширина для мобильных
      'w-full',  // Занимает всю доступную ширину
    ].join(' ');

    // Variant styles - mapped to design tokens
    const variantStyles: Record<typeof variant, string> = {
      default: [
        'bg-[var(--color-background)]',  // Белый фон
        'border',
        'border-transparent',
      ].join(' '),
      elevated: [
        'bg-[var(--color-background)]',  // Белый фон для карточек
        'shadow-[var(--shadow-md)]',
        'hover:shadow-[var(--shadow-lg)]',
      ].join(' '),
      outlined: [
        'bg-transparent',
        'border',
        'border-[var(--color-border)]',
        'hover:border-[var(--color-primary)]',
      ].join(' '),
    };

    // Interactive styles - for clickable cards
    const interactiveStyles = (href || onClick) ? [
      'cursor-pointer',
      'hover:scale-[1.02]',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-[var(--color-focus)]',
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
          <HeadingTag className="text-xl font-semibold text-[var(--color-text-primary)]">
            {title}
          </HeadingTag>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>
      </>
    );
    // If href provided, render as Link
    if (href) {
      return (
        <Link href={href} className={cardClasses}>
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
        >
          {cardContent}
        </button>
      );
    }

    // Default: render as div
    return (
      <div className={cardClasses} ref={ref}>
        {cardContent}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
