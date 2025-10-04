'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from './Header.types';
import { ThemeToggle } from './ThemeToggle';
import { MenuIcon, XIcon } from './icons';
import { Button } from './Button';

/**
 * Header Component
 * 
 * Sticky header with logo, navigation, and theme toggle.
 * Implements CONTRACT-HEADER-001 requirements.
 * 
 * Features:
 * - Sticky positioning with backdrop blur
 * - Navigation with hover animation (underline from center)
 * - Theme toggle (sun/moon icons)
 * - Responsive mobile menu
 * 
 * @example
 * ```tsx
 * <Header
 *   navigation={[
 *     { label: 'Home', href: '/', active: true },
 *     { label: 'UI Kit', href: '/ui-kit' }
 *   ]}
 *   currentTheme="light"
 *   onThemeToggle={(theme) => setTheme(theme)}
 * />
 * ```
 */
export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      navigation,
      currentTheme,
      onThemeToggle,
      sticky = true,
      className = '',
    },
    ref
  ) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <header
        ref={ref}
        className={`
          ${sticky ? 'sticky top-0 z-[1020]' : ''}
          backdrop-blur-[var(--backdrop-blur)]
          bg-[var(--color-background)]/80
          border-b border-[var(--color-border)]
          px-[var(--spacing-8)] py-[var(--spacing-6)]
          ${className}
        `}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Fit&Lead"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
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
                  
                  ${item.active ? 'after:w-full after:left-0' : ''}
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle (Desktop) */}
          <div className="hidden md:block">
            <ThemeToggle theme={currentTheme} onToggle={onThemeToggle} />
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle theme={currentTheme} onToggle={onThemeToggle} size="sm" />
            <Button
              variant="ghost"
              size="md"
              iconOnly
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              ariaLabel={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-[1030] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <nav
              className="
                fixed top-0 right-0 bottom-0
                w-[17.5rem]
                bg-[var(--color-background)]
                shadow-[var(--shadow-lg)]
                z-[1050]
                md:hidden
                animate-slide-in-right
              "
              aria-label="Mobile navigation"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  onClick={() => setMobileMenuOpen(false)}
                  ariaLabel="Close menu"
                >
                  <XIcon size={24} />
                </Button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-6 px-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      text-lg font-medium
                      text-[var(--color-text-primary)]
                      py-4
                      border-b border-[var(--color-border)]
                      transition-colors
                      hover:text-[var(--color-primary)]
                      ${item.active ? 'text-[var(--color-primary)]' : ''}
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </>
        )}
      </header>
    );
  }
);

Header.displayName = 'Header';
