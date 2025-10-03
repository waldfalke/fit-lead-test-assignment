/**
 * Hero section props
 * Implements CONTRACT-HERO-001 API specification
 */
export interface HeroProps {
  /**
   * Main headline text (H1)
   */
  title: string;

  /**
   * Supporting subheadline text
   */
  subtitle: string;

  /**
   * Call-to-action button text
   */
  ctaText: string;

  /**
   * CTA button link URL
   */
  ctaHref?: string;

  /**
   * CTA button click handler (alternative to href)
   */
  onCtaClick?: () => void;

  /**
   * Background style variant
   * @default "gradient"
   */
  backgroundVariant?: 'gradient' | 'solid' | 'image';

  /**
   * Show illustration/image on desktop
   * @default true
   */
  showIllustration?: boolean;
}

export type { HeroProps as default };
