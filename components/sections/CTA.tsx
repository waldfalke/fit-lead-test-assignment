import React from 'react';
import { Button } from '../Button';
import { CTAProps } from './CTA.types';

/**
 * CTA (Call-to-Action) Section Component
 * 
 * Prominent call-to-action section with headline and button.
 * Implements CONTRACT-CTA-SECTION-001 requirements.
 * 
 * @example
 * ```tsx
 * <CTA
 *   title="Готовы начать?"
 *   description="Присоединяйтесь к тысячам партнёров"
 *   ctaText="Начать сейчас"
 *   ctaHref="/signup"
 * />
 * ```
 */
export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  onCtaClick,
  variant = 'gradient',
  size = 'default',
}) => {
  // Background styles based on variant
  const backgroundStyles: Record<typeof variant, string> = {
    gradient: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80',
    solid: 'bg-[var(--color-primary)]',
    accent: 'bg-[var(--color-accent)]',
    subtle: 'bg-[var(--color-surface)]',
  };

  // Text color based on variant
  const textColor = variant === 'subtle' 
    ? 'text-[var(--color-text-primary)]' 
    : variant === 'accent'
    ? 'text-[var(--color-text-on-accent)]'
    : 'text-white';

  const subtextColor = variant === 'subtle'
    ? 'text-[var(--color-text-secondary)]'
    : variant === 'accent'
    ? 'text-[var(--color-text-on-accent)]/80'
    : 'text-white/90';

  // Padding based on size
  const padding = size === 'compact' ? 'py-[var(--spacing-12)]' : 'py-[var(--spacing-16)]'; // 48px или 64px

  return (
    <section className="px-[var(--spacing-8)] py-[var(--spacing-8)]">
      <div className={`${backgroundStyles[variant]} ${padding} rounded-3xl`}>
        <div className="container mx-auto px-[var(--spacing-8)]"> {/* 32px */}
          <div className="max-w-4xl mx-auto text-center space-y-[var(--spacing-12)]"> {/* 48px */}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor}`}>
              {title}
            </h2>
            {description && (
              <p className={`text-lg md:text-xl ${subtextColor} max-w-2xl mx-auto`}>
                {description}
              </p>
            )}
            <div className="flex gap-[var(--spacing-6)] justify-center"> {/* 24px */}
              <Button
                variant={variant === 'accent' ? 'primary' : variant === 'subtle' ? 'primary' : 'tonal'}
                size="lg"
                href={ctaHref}
                onClick={onCtaClick}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
