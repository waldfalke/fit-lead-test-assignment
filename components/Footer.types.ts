import { ReactNode } from 'react';

/**
 * Navigation section in footer
 */
export interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

/**
 * Single navigation link
 */
export interface NavigationLink {
  label: string;
  href: string;
}

/**
 * Contact information
 */
export interface ContactInfo {
  email?: string;
  telegram?: string;
  supportUrl?: string;
}

/**
 * Social media link
 */
export interface SocialLink {
  platform: 'telegram' | 'vk' | 'instagram' | 'youtube' | 'twitter';
  url: string;
  icon: ReactNode;
}

/**
 * Footer component props
 * Implements CONTRACT-FOOTER-001 API specification
 */
export interface FooterProps {
  /**
   * Navigation links (can be flat array or grouped sections)
   */
  navigation: NavigationLink[] | NavigationSection[];

  /**
   * Contact information (optional)
   */
  contacts?: ContactInfo;

  /**
   * Social media links (optional)
   */
  social?: SocialLink[];

  /**
   * Copyright text (optional, defaults to current year + brand)
   */
  copyrightText?: string;
}

export type { FooterProps as default };
