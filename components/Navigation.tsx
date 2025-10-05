import React from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/config/navigation';

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  linkClassName?: string;
  onItemClick?: () => void;
  variant?: 'header' | 'footer' | 'mobile';
}

/**
 * Navigation Component
 * 
 * Reusable navigation component used in Header, Footer, and mobile menu.
 * Handles both internal (Next.js Link) and external (anchor) links.
 * 
 * @example
 * ```tsx
 * <Navigation items={SITE_NAVIGATION} variant="header" />
 * ```
 */
export const Navigation: React.FC<NavigationProps> = ({
  items,
  className = '',
  linkClassName = '',
  onItemClick,
  variant = 'header',
}) => {
  // Different base styles for different variants
  const variantClasses = {
    header: `
      relative
      text-base font-medium
      text-[var(--color-text-primary)]
      transition-colors duration-300
      
      after:content-['']
      after:absolute
      after:bottom-[-4px]
      after:left-1/2
      after:w-0
      after:h-[2px]
      after:bg-[var(--color-primary)]
      after:transition-all
      after:duration-300
      
      hover:after:w-full
      hover:after:left-0
    `,
    footer: `
      text-base font-medium
      text-[var(--color-text-primary)]
      hover:text-[var(--color-primary)]
      transition-colors
    `,
    mobile: `
      text-lg font-medium
      text-[var(--color-text-primary)]
      py-4
      border-b border-[var(--color-border)]
      transition-colors
      hover:text-[var(--color-primary)]
    `,
  };

  const baseLinkClasses = variantClasses[variant];

  return (
    <nav className={className} aria-label="Navigation">
      {items.map((item) => {
        // Hide external links on mobile (show only on md+)
        const mobileHideClass = item.external ? 'hidden md:inline-flex' : '';
        const linkClasses = `${baseLinkClasses} ${linkClassName} ${mobileHideClass} ${
          item.active ? 'after:w-full after:left-0 text-[var(--color-primary)]' : ''
        }`.trim();

        const handleClick = () => {
          if (onItemClick) {
            onItemClick();
          }
        };

        return item.external ? (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={linkClasses}
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleClick}
            className={linkClasses}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
