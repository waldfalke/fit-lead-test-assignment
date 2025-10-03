import { HTMLAttributes, ReactNode } from 'react';

/**
 * Card component props
 * Implements CONTRACT-CARD-001 API specification
 */
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Icon element displayed at top of card
   * Can be SVG, image, emoji, or any ReactNode
   */
  icon?: ReactNode;

  /**
   * Card heading text
   */
  title: string;

  /**
   * Card body text / description
   */
  description: string;

  /**
   * Visual variant
   * - default: subtle background
   * - elevated: shadow effect
   * - outlined: border style
   * @default "default"
   */
  variant?: 'default' | 'elevated' | 'outlined';

  /**
   * If provided, card becomes clickable link
   * Uses Next.js Link component
   */
  href?: string;

  /**
   * Click handler if card is interactive button
   */
  onClick?: () => void;

  /**
   * Heading level for title
   * Allows proper semantic hierarchy
   * @default "h3"
   */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export type { CardProps as default };
