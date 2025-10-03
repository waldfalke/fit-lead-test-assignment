import React from 'react';
import Link from 'next/link';
import { FooterProps } from './Footer.types';

/**
 * Footer Component
 * 
 * Site footer with navigation, contacts, and brand info.
 * Implements CONTRACT-FOOTER-001 requirements.
 * 
 * @example
 * ```tsx
 * <Footer
 *   navigation={[
 *     { title: 'Product', links: [{ label: 'Features', href: '/features' }] }
 *   ]}
 *   contacts={{ email: 'hello@fit-lead.com', telegram: '@fitlead' }}
 * />
 * ```
 */
export const Footer: React.FC<FooterProps> = ({
  navigation,
  contacts,
  social,
  copyrightText,
}) => {
  const currentYear = new Date().getFullYear();
  const copyright = copyrightText || `© ${currentYear} Fit&Lead. All rights reserved.`;

  return (
    <footer className="border-t border-[--color-border] bg-surface">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[--color-text-primary]">
              Fit&Lead
            </h3>
            <p className="text-sm text-[--color-text-secondary] leading-relaxed">
              Первая партнёрская CPA-сеть в тематике спорта, здоровья и ЗОЖ
            </p>
          </div>

          {/* Navigation Sections */}
          {navigation.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-sm font-semibold text-[--color-text-primary] uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-[--color-text-secondary] hover:text-primary hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacts Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[--color-text-primary] uppercase tracking-wide">
              Контакты
            </h4>
            <ul className="space-y-2">
              {contacts.email && (
                <li>
                  <a
                    href={`mailto:${contacts.email}`}
                    className="text-sm text-[--color-text-secondary] hover:text-primary hover:underline transition-colors"
                  >
                    {contacts.email}
                  </a>
                </li>
              )}
              {contacts.telegram && (
                <li>
                  <a
                    href={`https://t.me/${contacts.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[--color-text-secondary] hover:text-primary hover:underline transition-colors"
                  >
                    Telegram: {contacts.telegram}
                  </a>
                </li>
              )}
              {contacts.supportUrl && (
                <li>
                  <a
                    href={contacts.supportUrl}
                    className="text-sm text-[--color-text-secondary] hover:text-primary hover:underline transition-colors"
                  >
                    Поддержка
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        {social && social.length > 0 && (
          <div className="flex items-center gap-4 py-6 border-t border-[--color-border]">
            <span className="text-sm text-[--color-text-secondary]">Мы в соцсетях:</span>
            <div className="flex gap-3">
              {social.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${link.platform}`}
                  className="text-[--color-text-secondary] hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="pt-6 border-t border-[--color-border]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[--color-text-secondary]">{copyright}</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-[--color-text-secondary] hover:text-primary hover:underline transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[--color-text-secondary] hover:text-primary hover:underline transition-colors"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
