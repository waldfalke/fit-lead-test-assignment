'use client';

/**
 * Design System Page - Complete Token Documentation
 * 
 * Comprehensive showcase of all design tokens:
 * - Color palette (brand, neutral, semantic, status)
 * - Typography scale (sizes, weights, line heights)
 * - Spacing system
 * - Border radius
 * - Shadows
 * - Gradients
 */
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
        {/* ============================================
            Color System
            ============================================ */}
        <section id="colors">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Color System
          </h2>

          {/* Brand Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-6">
              Brand Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primary Scale */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-[--color-text-primary]">
                  Primary (Teal)
                </h4>
                {[
                  { shade: '50', hex: '#E6F2F3' },
                  { shade: '100', hex: '#CCE5E7' },
                  { shade: '200', hex: '#99CBCF' },
                  { shade: '300', hex: '#66B1B7' },
                  { shade: '400', hex: '#33979F' },
                  { shade: '500', hex: '#00484F', main: true },
                  { shade: '600', hex: '#003A3F' },
                  { shade: '700', hex: '#002B2F' },
                  { shade: '800', hex: '#001D20' },
                  { shade: '900', hex: '#000E10' },
                ].map((color) => (
                  <div
                    key={color.shade}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface transition-colors"
                  >
                    <div
                      className="w-20 h-12 rounded-md shadow-sm border border-[--color-border]"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-[--color-text-primary]">
                          primary-{color.shade}
                        </span>
                        {color.main && (
                          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                            Main
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-[--color-text-secondary]">
                        {color.hex}
                      </span>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(color.hex)}
                      className="text-xs text-[--color-text-secondary] hover:text-primary px-3 py-1 rounded hover:bg-surface"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>

              {/* Accent Scale */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-[--color-text-primary]">
                  Accent (Yellow)
                </h4>
                {[
                  { shade: '50', hex: '#FFFEF5' },
                  { shade: '100', hex: '#FFFCEB' },
                  { shade: '200', hex: '#FFF9D6' },
                  { shade: '300', hex: '#FFF5C2' },
                  { shade: '400', hex: '#FEF2AD' },
                  { shade: '500', hex: '#FBEA1B', main: true },
                  { shade: '600', hex: '#C9BB16' },
                  { shade: '700', hex: '#978C10' },
                  { shade: '800', hex: '#645D0B' },
                  { shade: '900', hex: '#322F05' },
                ].map((color) => (
                  <div
                    key={color.shade}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface transition-colors"
                  >
                    <div
                      className="w-20 h-12 rounded-md shadow-sm border border-[--color-border]"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-[--color-text-primary]">
                          accent-{color.shade}
                        </span>
                        {color.main && (
                          <span className="text-xs bg-accent text-[--color-text-on-accent] px-2 py-0.5 rounded-full">
                            Main
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-[--color-text-secondary]">
                        {color.hex}
                      </span>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(color.hex)}
                      className="text-xs text-[--color-text-secondary] hover:text-primary px-3 py-1 rounded hover:bg-surface"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-6">
              Neutral Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { shade: '50', hex: '#FAFAFA' },
                { shade: '100', hex: '#F5F5F5' },
                { shade: '200', hex: '#E5E5E5' },
                { shade: '300', hex: '#D4D4D4' },
                { shade: '400', hex: '#A3A3A3' },
                { shade: '500', hex: '#737373' },
                { shade: '600', hex: '#525252' },
                { shade: '700', hex: '#404040' },
                { shade: '800', hex: '#262626' },
                { shade: '900', hex: '#171717' },
              ].map((color) => (
                <div key={color.shade} className="space-y-2">
                  <div
                    className="h-24 rounded-lg shadow-sm border border-[--color-border]"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-center">
                    <p className="font-mono text-sm text-[--color-text-primary]">
                      neutral-{color.shade}
                    </p>
                    <p className="font-mono text-xs text-[--color-text-secondary]">
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-6">
              Semantic Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Background (Light)', var: '--color-background', value: '#FFFFFF' },
                { name: 'Surface (Light)', var: '--color-surface', value: '#F5F7FA' },
                { name: 'Text Primary', var: '--color-text-primary', value: '#1A1A1A' },
                { name: 'Text Secondary', var: '--color-text-secondary', value: '#5A5A5A' },
                { name: 'Text on Accent', var: '--color-text-on-accent', value: '#0A0A0A' },
                { name: 'Text on Primary', var: '--color-text-on-primary', value: '#FFFFFF' },
                { name: 'Border', var: '--color-border', value: '#E6EEF0' },
              ].map((color) => (
                <div
                  key={color.name}
                  className="flex items-center gap-4 p-4 rounded-lg bg-surface"
                >
                  <div
                    className="w-16 h-16 rounded-md shadow-sm border border-[--color-border]"
                    style={{ backgroundColor: color.value }}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-[--color-text-primary]">{color.name}</p>
                    <p className="font-mono text-xs text-[--color-text-secondary]">
                      {color.var}
                    </p>
                    <p className="font-mono text-xs text-[--color-text-secondary]">
                      {color.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Colors */}
          <div>
            <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-6">
              Status Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { name: 'Success', hex: '#28c76f', var: '--color-success' },
                { name: 'Warning', hex: '#ff9f43', var: '--color-warning' },
                { name: 'Danger', hex: '#ff4c51', var: '--color-danger' },
                { name: 'Info', hex: '#00bad1', var: '--color-info' },
              ].map((color) => (
                <div key={color.name} className="space-y-3">
                  <div
                    className="h-32 rounded-lg shadow-md"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p className="font-semibold text-[--color-text-primary]">{color.name}</p>
                    <p className="font-mono text-xs text-[--color-text-secondary]">
                      {color.var}
                    </p>
                    <p className="font-mono text-xs text-[--color-text-secondary]">
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            Typography System
            ============================================ */}
        <section id="typography">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Typography System
          </h2>

          {/* Font Family */}
          <div className="mb-12 p-8 bg-surface rounded-lg">
            <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-4">
              Font Family
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[--color-text-secondary] mb-2">Sans Serif (Primary)</p>
                <p className="text-2xl text-[--color-text-primary]">
                  Public Sans — The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-mono text-xs text-[--color-text-secondary] mt-2">
                  font-family: "Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
                </p>
              </div>
              <div>
                <p className="text-sm text-[--color-text-secondary] mb-2">Monospace</p>
                <p className="text-xl font-mono text-[--color-text-primary]">
                  SFMono-Regular — The quick brown fox jumps
                </p>
                <p className="font-mono text-xs text-[--color-text-secondary] mt-2">
                  font-family: "SFMono-Regular", Menlo, Monaco, Consolas, monospace
                </p>
              </div>
            </div>
          </div>

          {/* Font Sizes */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-6">
              Font Size Scale
            </h3>
            <div className="space-y-6 bg-surface p-8 rounded-lg">
              {[
                { name: 'xs', size: '0.75rem', px: '12px', sample: 'Extra Small Text' },
                { name: 'sm', size: '0.8125rem', px: '13px', sample: 'Small Text' },
                { name: 'base', size: '0.9375rem', px: '15px', sample: 'Base Body Text', main: true },
                { name: 'lg', size: '1.125rem', px: '18px', sample: 'Large Text' },
                { name: 'xl', size: '1.5rem', px: '24px', sample: 'Heading 4' },
                { name: '2xl', size: '1.75rem', px: '28px', sample: 'Heading 3' },
                { name: '3xl', size: '2.375rem', px: '38px', sample: 'Heading 2' },
                { name: '4xl', size: '2.875rem', px: '46px', sample: 'Heading 1' },
              ].map((font) => (
                <div
                  key={font.name}
                  className="flex items-baseline gap-6 pb-6 border-b border-[--color-border] last:border-0"
                >
                  <div className="w-24 flex-shrink-0">
                    <p className="font-mono text-sm text-[--color-text-primary]">
                      text-{font.name}
                    </p>
                    {font.main && (
                      <span className="text-xs text-[--color-text-secondary]">(Body)</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-[--color-text-primary]"
                      style={{ fontSize: font.size }}
                    >
                      {font.sample}
                    </p>
                  </div>
                  <div className="w-32 text-right">
                    <p className="font-mono text-xs text-[--color-text-secondary]">
                      {font.size}
                    </p>
                    <p className="font-mono text-xs text-[--color-text-secondary]">
                      {font.px}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Font Weights */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-6">
              Font Weights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Normal', weight: '400', class: 'font-normal' },
                { name: 'Medium', weight: '500', class: 'font-medium' },
                { name: 'Semibold', weight: '600', class: 'font-semibold' },
                { name: 'Bold', weight: '700', class: 'font-bold' },
              ].map((weight) => (
                <div key={weight.name} className="p-6 bg-surface rounded-lg">
                  <p className={`text-2xl text-[--color-text-primary] mb-2 ${weight.class}`}>
                    {weight.name} — The quick brown fox
                  </p>
                  <p className="font-mono text-xs text-[--color-text-secondary]">
                    font-weight: {weight.weight} | {weight.class}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Line Heights */}
          <div>
            <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-6">
              Line Heights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Tight', value: '1.25', class: 'leading-tight' },
                { name: 'Base', value: '1.375', class: 'leading-normal' },
                { name: 'Relaxed', value: '1.625', class: 'leading-relaxed' },
              ].map((lh) => (
                <div key={lh.name} className="p-6 bg-surface rounded-lg">
                  <p className="text-sm font-medium text-[--color-text-primary] mb-3">
                    {lh.name} ({lh.value})
                  </p>
                  <p className={`text-base text-[--color-text-secondary] ${lh.class}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore.
                  </p>
                  <p className="font-mono text-xs text-[--color-text-secondary] mt-3">
                    line-height: {lh.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            Spacing System
            ============================================ */}
        <section id="spacing">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Spacing System
          </h2>
          <p className="text-lg text-[--color-text-secondary] mb-8">
            8px-based spacing scale for consistent layouts
          </p>

          <div className="space-y-6 bg-surface p-8 rounded-lg">
            {[
              { name: 'xs', value: '8px', rem: '0.5rem', var: '--spacing-xs' },
              { name: 'sm', value: '16px', rem: '1rem', var: '--spacing-sm' },
              { name: 'md', value: '24px', rem: '1.5rem', var: '--spacing-md' },
              { name: 'lg', value: '32px', rem: '2rem', var: '--spacing-lg' },
              { name: 'xl', value: '48px', rem: '3rem', var: '--spacing-xl' },
              { name: '2xl', value: '64px', rem: '4rem', var: '--spacing-2xl' },
            ].map((spacing) => (
              <div key={spacing.name} className="flex items-center gap-6">
                <div className="w-24 flex-shrink-0">
                  <p className="font-mono text-sm text-[--color-text-primary]">
                    {spacing.name}
                  </p>
                  <p className="font-mono text-xs text-[--color-text-secondary]">
                    {spacing.value}
                  </p>
                </div>
                <div
                  className="bg-primary h-12 rounded transition-all"
                  style={{ width: spacing.value }}
                />
                <div className="flex-1">
                  <p className="font-mono text-xs text-[--color-text-secondary]">
                    {spacing.rem} | {spacing.var}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================
            Border Radius
            ============================================ */}
        <section id="radius">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Border Radius
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'sm', value: '4px', class: 'rounded-sm' },
              { name: 'md', value: '6px', class: 'rounded-md' },
              { name: 'lg', value: '8px', class: 'rounded-lg' },
              { name: 'xl', value: '10px', class: 'rounded-xl' },
              { name: '2xl', value: '32px', class: 'rounded-2xl' },
              { name: 'full', value: '9999px', class: 'rounded-full' },
            ].map((radius) => (
              <div key={radius.name} className="space-y-3">
                <div className={`h-32 bg-primary ${radius.class}`} />
                <div>
                  <p className="font-mono text-sm text-[--color-text-primary]">
                    {radius.class}
                  </p>
                  <p className="font-mono text-xs text-[--color-text-secondary]">
                    {radius.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================
            Shadows
            ============================================ */}
        <section id="shadows">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Shadows
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'sm', class: 'shadow-sm', value: '0 0.125rem 0.5rem 0 rgba(47, 43, 61, 0.12)' },
              { name: 'md', class: 'shadow-md', value: '0 0.1875rem 0.75rem 0 rgba(47, 43, 61, 0.14)' },
              { name: 'lg', class: 'shadow-lg', value: '0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16)' },
              { name: 'focus', class: 'ring-2 ring-[--color-focus]', value: '0 0 0 0.15rem rgba(0, 72, 79, 0.4)' },
            ].map((shadow) => (
              <div key={shadow.name} className="space-y-4">
                <div className={`h-32 bg-surface rounded-lg ${shadow.class} flex items-center justify-center`}>
                  <span className="text-sm text-[--color-text-secondary]">
                    {shadow.name}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-sm text-[--color-text-primary]">
                    {shadow.class}
                  </p>
                  <p className="font-mono text-xs text-[--color-text-secondary] break-all">
                    {shadow.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================
            Gradient
            ============================================ */}
        <section id="gradient">
          <h2 className="text-3xl font-bold text-[--color-text-primary] mb-8">
            Brand Gradient
          </h2>

          <div className="space-y-6">
            <div
              className="h-64 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(116deg, #FBEA1B 11.8%, #00484F 91.32%)' }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-white drop-shadow-lg">
                  Fit&Lead Brand Gradient
                </p>
                <p className="text-white/90 mt-2">Yellow → Teal</p>
              </div>
            </div>
            <div className="p-6 bg-surface rounded-lg">
              <p className="font-mono text-sm text-[--color-text-primary]">
                --gradient-brand
              </p>
              <p className="font-mono text-xs text-[--color-text-secondary] mt-2">
                linear-gradient(116deg, #FBEA1B 11.8%, #00484F 91.32%)
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[--color-border] bg-surface mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-sm text-[--color-text-secondary]">
            Design System — Fit&Lead | All tokens extracted from brand guidelines
          </p>
        </div>
      </footer>
    </div>
  );
}
