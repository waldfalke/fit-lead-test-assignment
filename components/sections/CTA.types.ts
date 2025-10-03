/**
 * CTA section props
 * Implements CONTRACT-CTA-SECTION-001 API specification
 */
export interface CTAProps {
  /**
   * Main CTA headline
   */
  title: string;

  /**
   * Supporting description text (optional)
   */
  description?: string;

  /**
   * CTA button text
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
   * Visual variant
   * @default "gradient"
   */
  variant?: 'gradient' | 'solid' | 'accent' | 'subtle';

  /**
   * Section size
   * @default "default"
   */
  size?: 'default' | 'compact';
}

export type { CTAProps as default };
