import { ReactNode } from 'react';

/**
 * Single benefit item
 */
export interface BenefitItem {
  icon?: ReactNode;
  title: string;
  description: string;
}

/**
 * Benefits section props
 * Implements CONTRACT-BENEFITS-SECTION-001 API specification
 */
export interface BenefitsProps {
  /**
   * Section title (H2)
   */
  title: string;

  /**
   * Optional subtitle/description
   */
  subtitle?: string;

  /**
   * Array of benefit items to display
   */
  benefits: BenefitItem[];

  /**
   * Number of columns in grid (2, 3, or 4)
   * @default 3
   */
  columns?: 2 | 3 | 4;
}

export type { BenefitsProps as default };
