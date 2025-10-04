'use client';

import designTokens from '@/docs/design-tokens.json';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-[--color-border] bg-surface sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold text-[--color-text-primary]">
            Design System — Tokens & Foundations
          </h1>
          <p className="text-lg text-[--color-text-secondary] mt-2">
            Complete reference of design tokens extracted from Fit&Lead brand
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-20">
        {/* Color System */}
        <section id="colors">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Color Palette
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            Design tokens extracted from Fit&Lead brand guidelines
          </p>

          <div className="space-y-12">
            {/* Brand Colors */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                Brand Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary border border-[--color-border]"></div>
                    <div>
                      <div className="font-medium text-[--color-text-primary]">Primary</div>
                      <div className="text-sm text-[--color-text-secondary]">#00484F</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-accent border border-[--color-border]"></div>
                    <div>
                      <div className="font-medium text-[--color-text-primary]">Accent</div>
                      <div className="text-sm text-[--color-text-secondary]">#FBEA1B</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                Neutral Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-3">
                {[
                  { name: '50', color: '#fafafa' },
                  { name: '100', color: '#f5f5f5' },
                  { name: '200', color: '#e5e5e5' },
                  { name: '300', color: '#d4d4d4' },
                  { name: '400', color: '#a3a3a3' },
                  { name: '500', color: '#737373' },
                  { name: '600', color: '#525252' },
                  { name: '700', color: '#404040' },
                  { name: '800', color: '#262626' },
                  { name: '900', color: '#171717' },
                ].map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div
                      className="w-full h-12 rounded-lg border border-[--color-border]"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-[--color-text-primary]">{item.name}</div>
                      <div className="text-xs text-[--color-text-secondary]">{item.color}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-4">
                Semantic Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Success', color: '#28c76f' },
                  { name: 'Warning', color: '#ff9f43' },
                  { name: 'Danger', color: '#ff4c51' },
                  { name: 'Info', color: '#00bad1' },
                ].map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div
                      className="w-full h-12 rounded-lg border border-[--color-border]"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="text-center">
                      <div className="font-medium text-[--color-text-primary]">{item.name}</div>
                      <div className="text-sm text-[--color-text-secondary]">{item.color}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section id="typography">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Typography
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            Type scale based on Public Sans font family
          </p>

          <div className="space-y-8">
            {[
              { name: 'Heading 1', size: '2.875rem', weight: '700', lineHeight: '1.25', className: 'text-4xl font-bold' },
              { name: 'Heading 2', size: '2.375rem', weight: '700', lineHeight: '1.25', className: 'text-3xl font-bold' },
              { name: 'Heading 3', size: '1.75rem', weight: '700', lineHeight: '1.25', className: 'text-2xl font-bold' },
              { name: 'Body Large', size: '1.125rem', weight: '500', lineHeight: '1.375', className: 'text-lg font-medium' },
              { name: 'Body', size: '0.9375rem', weight: '400', lineHeight: '1.375', className: 'text-base' },
              { name: 'Small', size: '0.8125rem', weight: '400', lineHeight: '1.375', className: 'text-sm' },
            ].map((item) => (
              <div key={item.name} className="space-y-2">
                <div className={item.className}>
                  {item.name} — {item.size} / {item.weight === '700' ? 'Bold' : 'Regular'}
                </div>
                <div className="text-sm text-[--color-text-secondary] font-mono">
                  font-size: {item.size} | font-weight: {item.weight} | line-height: {item.lineHeight}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing Scale */}
        <section id="spacing">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Spacing Scale
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            8px-based spacing system for consistent layouts
          </p>

          <div className="space-y-6">
            {Object.entries(designTokens.spacing).map(([key, token]) => {
              const value = token.$value;
              const description = token.$description || '';
              const pxValue = parseFloat(value) * 16; // Convert rem to px
              
              return (
                <div key={key} className="flex items-center gap-4">
                  <div className="w-16 text-sm font-medium text-[--color-text-primary]">{key.toUpperCase()}</div>
                  <div className="flex-1 bg-primary/20 h-4 rounded relative">
                    <div
                      className="bg-primary h-full rounded"
                      style={{ width: `${pxValue}px` }}
                    ></div>
                  </div>
                  <div className="w-24 text-sm text-[--color-text-secondary]">
                    {value} ({description})
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Border Radius */}
        <section id="radius">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Border Radius
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            Consistent corner rounding for UI elements
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(designTokens.borderRadius).map(([key, token]) => {
              const value = token.$value;
              const description = token.$description || '';
              
              return (
                <div key={key} className="space-y-3">
                  <div
                    className="w-full h-16 bg-primary border border-[--color-border] flex items-center justify-center"
                    style={{ borderRadius: value }}
                  >
                    <span className="text-xs font-medium text-white">{key}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-[--color-text-primary]">{key}</div>
                    <div className="text-xs text-[--color-text-secondary]" title={description}>
                      {value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
