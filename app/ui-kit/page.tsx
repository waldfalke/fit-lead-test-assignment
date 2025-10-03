'use client';

import { Button } from '@/components/Button';

/**
 * UI Kit Page - Design System Showcase
 * 
 * Demonstrates:
 * - Component reusability (same Button/Card used on Landing + UI Kit)
 * - All component variants and states
 * - Design tokens (colors, typography, spacing)
 * - Theme switching capability
 * 
 * Implements CONTRACT-UI-KIT-PAGE-001
 */
export default function UIKitPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-[--color-border] bg-surface">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[--color-text-primary] mb-2">
                UI Kit — Design System
              </h1>
              <p className="text-lg text-[--color-text-secondary]">
                Explore all components, tokens, and design system elements
              </p>
            </div>
            {/* Theme toggle будет добавлен позже */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* ============================================
            Buttons Section
            ============================================ */}
        <section>
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-6">
            Buttons
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            Versatile button component with 7 variants, 5 sizes, and multiple states
          </p>

          {/* Variants */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                Variants
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="subtle">Subtle</Button>
                <Button variant="link">Link</Button>
                <Button variant="tonal">Tonal</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                States
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button loading>Loading...</Button>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                With Icons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  iconLeft={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L10.5 5.5L16 6.5L12 10.5L13 16L8 13L3 16L4 10.5L0 6.5L5.5 5.5L8 0Z" />
                    </svg>
                  }
                >
                  With Icon Left
                </Button>
                <Button
                  iconRight={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6 3L11 8L6 13V3Z" />
                    </svg>
                  }
                >
                  With Icon Right
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            Colors Section
            ============================================ */}
        <section>
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-6">
            Color Palette
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            Design tokens extracted from Fit&Lead brand guidelines
          </p>

          <div className="space-y-8">
            {/* Brand Colors */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                Brand Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-primary shadow-md"></div>
                  <p className="text-sm font-medium text-[--color-text-primary]">Primary</p>
                  <p className="text-xs text-[--color-text-secondary] font-mono">#00484F</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-accent shadow-md"></div>
                  <p className="text-sm font-medium text-[--color-text-primary]">Accent</p>
                  <p className="text-xs text-[--color-text-secondary] font-mono">#FBEA1B</p>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                Neutral Colors
              </h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className="h-16 rounded-lg shadow-sm"
                      style={{ backgroundColor: `var(--color-neutral-${shade})` }}
                    ></div>
                    <p className="text-xs text-center text-[--color-text-secondary]">{shade}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                Semantic Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-[--color-success] shadow-md"></div>
                  <p className="text-sm font-medium text-[--color-text-primary]">Success</p>
                  <p className="text-xs text-[--color-text-secondary] font-mono">#28c76f</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-[--color-warning] shadow-md"></div>
                  <p className="text-sm font-medium text-[--color-text-primary]">Warning</p>
                  <p className="text-xs text-[--color-text-secondary] font-mono">#ff9f43</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-[--color-danger] shadow-md"></div>
                  <p className="text-sm font-medium text-[--color-text-primary]">Danger</p>
                  <p className="text-xs text-[--color-text-secondary] font-mono">#ff4c51</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg bg-[--color-info] shadow-md"></div>
                  <p className="text-sm font-medium text-[--color-text-primary]">Info</p>
                  <p className="text-xs text-[--color-text-secondary] font-mono">#00bad1</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            Typography Section
            ============================================ */}
        <section>
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-6">
            Typography
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            Type scale based on Public Sans font family
          </p>

          <div className="space-y-6 bg-surface p-8 rounded-lg">
            <div className="border-b border-[--color-border] pb-4">
              <p className="text-4xl font-bold text-[--color-text-primary]">
                Heading 1 — 46px / Bold
              </p>
              <p className="text-sm text-[--color-text-secondary] mt-2 font-mono">
                font-size: 2.875rem (46px) | font-weight: 700 | line-height: 1.25
              </p>
            </div>

            <div className="border-b border-[--color-border] pb-4">
              <p className="text-3xl font-bold text-[--color-text-primary]">
                Heading 2 — 38px / Bold
              </p>
              <p className="text-sm text-[--color-text-secondary] mt-2 font-mono">
                font-size: 2.375rem (38px) | font-weight: 700 | line-height: 1.25
              </p>
            </div>

            <div className="border-b border-[--color-border] pb-4">
              <p className="text-2xl font-bold text-[--color-text-primary]">
                Heading 3 — 28px / Bold
              </p>
              <p className="text-sm text-[--color-text-secondary] mt-2 font-mono">
                font-size: 1.75rem (28px) | font-weight: 700 | line-height: 1.25
              </p>
            </div>

            <div className="border-b border-[--color-border] pb-4">
              <p className="text-lg font-medium text-[--color-text-primary]">
                Body Large — 18px / Medium
              </p>
              <p className="text-sm text-[--color-text-secondary] mt-2 font-mono">
                font-size: 1.125rem (18px) | font-weight: 500 | line-height: 1.375
              </p>
            </div>

            <div className="border-b border-[--color-border] pb-4">
              <p className="text-base text-[--color-text-primary]">
                Body — 15px / Regular
              </p>
              <p className="text-sm text-[--color-text-secondary] mt-2 font-mono">
                font-size: 0.9375rem (15px) | font-weight: 400 | line-height: 1.375
              </p>
            </div>

            <div>
              <p className="text-sm text-[--color-text-secondary]">
                Small — 13px / Regular
              </p>
              <p className="text-xs text-[--color-text-secondary] mt-2 font-mono">
                font-size: 0.8125rem (13px) | font-weight: 400 | line-height: 1.375
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            Spacing Section
            ============================================ */}
        <section>
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-6">
            Spacing Scale
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            8px-based spacing system for consistent layouts
          </p>

          <div className="space-y-4 bg-surface p-8 rounded-lg">
            {[
              { name: 'xs', value: '8px', rem: '0.5rem' },
              { name: 'sm', value: '16px', rem: '1rem' },
              { name: 'md', value: '24px', rem: '1.5rem' },
              { name: 'lg', value: '32px', rem: '2rem' },
              { name: 'xl', value: '48px', rem: '3rem' },
              { name: '2xl', value: '64px', rem: '4rem' },
            ].map((spacing) => (
              <div key={spacing.name} className="flex items-center gap-4">
                <div className="w-20 text-sm font-mono text-[--color-text-primary]">
                  {spacing.name}
                </div>
                <div
                  className="bg-primary h-8 rounded"
                  style={{ width: spacing.value }}
                ></div>
                <div className="text-sm text-[--color-text-secondary]">
                  {spacing.value} ({spacing.rem})
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================
            Border Radius Section
            ============================================ */}
        <section>
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-6">
            Border Radius
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            Consistent corner rounding for UI elements
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'sm', value: '4px', class: 'rounded-sm' },
              { name: 'md', value: '6px', class: 'rounded-md' },
              { name: 'lg', value: '8px', class: 'rounded-lg' },
              { name: 'xl', value: '10px', class: 'rounded-xl' },
              { name: '2xl', value: '32px', class: 'rounded-2xl' },
              { name: 'full', value: '9999px', class: 'rounded-full' },
            ].map((radius) => (
              <div key={radius.name} className="space-y-2">
                <div className={`h-24 bg-primary ${radius.class}`}></div>
                <p className="text-sm font-medium text-[--color-text-primary]">
                  {radius.name}
                </p>
                <p className="text-xs text-[--color-text-secondary] font-mono">
                  {radius.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[--color-border] bg-surface mt-16">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-sm text-[--color-text-secondary]">
            UI Kit — Fit&Lead Design System | Built with Next.js + Tailwind CSS v4
          </p>
        </div>
      </footer>
    </div>
  );
}
