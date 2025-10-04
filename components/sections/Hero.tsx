import React from 'react';
import { Button } from '../Button';
import { HeroProps } from './Hero.types';

/**
 * Hero Section Component
 * 
 * Primary landing page header with headline, subheadline, and CTA.
 * Implements CONTRACT-HERO-001 requirements.
 * 
 * @example
 * ```tsx
 * <Hero
 *   title="Первая партнёрская CPA сеть"
 *   subtitle="Монетизируйте трафик с максимальной отдачей"
 *   ctaText="Начать зарабатывать"
 *   ctaHref="/signup"
 * />
 * ```
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  onCtaClick,
  backgroundVariant = 'gradient',
  showIllustration = true,
}) => {
  // Background styles based on variant
  const backgroundStyles: Record<typeof backgroundVariant, string> = {
    gradient: 'bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/80 to-[var(--color-primary)]',
    solid: 'bg-primary',
    image: 'bg-primary',
  };

  return (
    <section
      className={`relative min-h-[80vh] max-h-[90vh] flex items-center ${backgroundStyles[backgroundVariant]}`}
    >
      <div className="container mx-auto px-[var(--spacing-8)] py-[var(--spacing-16)]"> {/* 32px 64px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-12)] items-center"> {/* 48px */}
          {/* Content */}
          <div className="space-y-[var(--spacing-12)] text-center lg:text-left"> {/* 48px */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-on-accent)] leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-text-on-accent)]/90 max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>
            <div className="flex gap-[var(--spacing-6)] justify-center lg:justify-start"> {/* 24px */}
              <Button
                variant="primary"
                size="lg"
                href={ctaHref}
                onClick={onCtaClick}
              >
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Illustration */}
          {showIllustration && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Placeholder illustration - can be replaced with actual image/SVG */}
                <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-2/3 h-2/3 text-white/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-primary)]/30 rounded-full blur-2xl" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[var(--spacing-12)] left-1/2 -translate-x-1/2 hidden md:block"> {/* 48px */}
        <div className="flex flex-col items-center gap-[var(--spacing-4)] text-[var(--color-text-on-accent)]/60"> {/* 16px */}
          <span className="text-sm">Прокрутите вниз</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
