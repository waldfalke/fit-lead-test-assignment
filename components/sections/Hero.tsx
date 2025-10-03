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
    gradient: 'bg-gradient-to-br from-accent via-accent/80 to-primary',
    solid: 'bg-primary',
    image: 'bg-primary',
  };

  return (
    <section
      className={`relative min-h-[60vh] flex items-center ${backgroundStyles[backgroundVariant]}`}
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-text-on-accent] leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[--color-text-on-accent]/90 max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
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
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-[--color-text-on-accent]/60">
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
