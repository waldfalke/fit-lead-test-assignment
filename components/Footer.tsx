import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterNavSection {
  title: string;
  links: FooterLink[];
}

interface FooterContacts {
  email: string;
  telegram: string;
}

interface FooterProps {
  navigation?: FooterNavSection[];
  contacts?: FooterContacts;
}

/**
 * Footer Component
 * 
 * Simplified footer in Fit&Lead brand colors: logo, copyright, and social links.
 * 
 * @example
 * ```tsx
 * <Footer navigation={footerNavigation} contacts={footerContacts} />
 * ```
 */
export const Footer: React.FC<FooterProps> = ({ navigation, contacts }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        {/* Navigation Sections (if provided) */}
        {navigation && navigation.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {navigation.map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Contacts (if provided) */}
        {contacts && (
          <div className="mb-8 pb-8 border-b border-[var(--color-border)]">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
              Контакты
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${contacts.email}`}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {contacts.email}
              </a>
              <a
                href={`https://t.me/${contacts.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {contacts.telegram}
              </a>
            </div>
          </div>
        )}

        {/* Main Footer Content - Mobile: Column, Desktop: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/logo.svg"
                alt="Fit&Lead"
                width={206}
                height={54}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Copyright & Links - Mobile: Center, Desktop: Left */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              © {currentYear} ООО «ЛИДЕРЫ МНЕНИЙ» ИНН 6685214668 Все права защищены
            </p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs">
              <Link
                href="/privacy"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:underline transition-colors"
              >
                Политика обработки персональных данных
              </Link>
              <Link
                href="/info"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:underline transition-colors"
              >
                Информация о продукте
              </Link>
            </div>
          </div>

          {/* Social Links - Mobile: Center, Desktop: Right */}
          <div className="flex flex-col gap-3 items-center md:items-end">
            <p className="text-sm text-[var(--color-text-secondary)]">Наши соцсети</p>
            <div className="flex gap-4">
              <a
                href="https://vk.com/affiliateclub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VKontakte"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/vk-logo.svg"
                  alt="VKontakte"
                  width={34}
                  height={34}
                />
              </a>
              <a
                href="https://t.me/FitnessAffiliate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/tg-logo.svg"
                  alt="Telegram"
                  width={34}
                  height={34}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
