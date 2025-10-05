'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAVIGATION, SOCIAL_LINKS, LEGAL_LINKS, COMPANY_INFO } from '@/config/navigation';
import { Navigation } from './Navigation';
import { useTheme } from '@/hooks/useTheme';

/**
 * Footer Component
 * 
 * Simplified footer in Fit&Lead brand colors: logo, navigation, copyright, and social links.
 * Uses same navigation as Header for consistency (from centralized config).
 * Uses theme-aware logo (yellow for dark theme, regular for light theme).
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-border)] rounded-t-[2rem] mt-[var(--spacing-8)]">
      <div className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        {/* Main Footer Content - Mobile: Column, Desktop: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
                alt="Fit&Lead"
                width={206}
                height={54}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Same as Header */}
          <Navigation 
            items={SITE_NAVIGATION}
            variant="footer"
            className="flex justify-center gap-8"
          />

          {/* Social Links - Mobile: Center, Desktop: Right */}
          <div className="flex gap-4 items-center justify-center md:justify-end">
            <a
              href={SOCIAL_LINKS.vk}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VKontakte"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/vk-icon.svg"
                alt="VKontakte"
                width={34}
                height={34}
                className={theme === 'dark' ? 'brightness-0 invert' : ''}
              />
            </a>
            <a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/tg-icon.svg"
                alt="Telegram"
                width={34}
                height={34}
                className={theme === 'dark' ? 'brightness-0 invert' : ''}
              />
            </a>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-secondary)] text-center md:text-left">
            © {currentYear} {COMPANY_INFO.name} ИНН {COMPANY_INFO.inn} Все права защищены
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-xs text-center md:text-right">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
