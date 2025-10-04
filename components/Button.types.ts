import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button component props
 * Implements CONTRACT-BUTTON-001 API specification
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Visual semantic variant mapped to design tokens
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'subtle' | 'link' | 'tonal';

  /**
   * Visual size / density mapping to token spacing and min-height
   * @default "md"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Disabled state - prevents interaction
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state - shows spinner and prevents interaction
   * @default false
   */
  loading?: boolean;

  /**
   * Icon to display on the left side of the button text
   */
  iconLeft?: ReactNode;

  /**
   * Icon to display on the right side of the button text
   */
  iconRight?: ReactNode;

  /**
   * Icon-only button (no text)
   * Makes button square instead of rectangular
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Button type attribute
   * @default "button"
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Accessible label for screen readers
   * Use when button content is not descriptive enough
   */
  ariaLabel?: string;

  /**
   * Link href - if provided, renders as Next.js Link
   */
  href?: string;

  /**
   * Button content (text, icons, etc.)
   */
  children?: ReactNode;
}

export type { ButtonProps as default };
