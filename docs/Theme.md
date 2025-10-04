# Theme System Documentation

**Contract:** `CONTRACT-THEME-001`  
**Version:** 1.0  
**Status:** ✅ Implemented

## Overview

Fit&Lead Design System supports two visual themes:
- **Light Theme** (default): Brand colors on light backgrounds
- **Dark Theme**: Same brand colors adapted for dark backgrounds

The theme system is built on:
- **next-themes** library for theme management
- **CSS Custom Properties** for theme values
- **Design Tokens** from `design-tokens/tokens.json`
- **localStorage** for persistence
- **SSR-safe** initialization (no FOUC)

## Architecture

```
┌─────────────────────────────────────────────┐
│  app/layout.tsx (Server Component)          │
│  ┌───────────────────────────────────────┐  │
│  │  app/layout-client.tsx (Client)       │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │  providers/ThemeProvider.tsx    │  │  │
│  │  │  (next-themes wrapper)          │  │  │
│  │  │                                 │  │  │
│  │  │  ┌───────────────────────────┐  │  │  │
│  │  │  │  HeaderWithTheme          │  │  │  │
│  │  │  │  (uses useTheme hook)     │  │  │  │
│  │  │  └───────────────────────────┘  │  │  │
│  │  │                                 │  │  │
│  │  │  {children}                     │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

## Theme Provider Setup

The app is wrapped with `ThemeProvider` in `app/layout-client.tsx`:

```tsx
import { ThemeProvider } from '@/providers/ThemeProvider';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="fit-lead-theme">
      {children}
    </ThemeProvider>
  );
}
```

### ThemeProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `'light' \| 'dark'` | `'light'` | Default theme if no localStorage preference |
| `storageKey` | `string` | `'theme'` | localStorage key for persisting theme |
| `children` | `ReactNode` | - | App content |

## Using Themes in Components

### Option 1: useTheme Hook (Recommended)

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Option 2: Semantic CSS Variables (Best Practice)

Always use semantic tokens, never hardcoded colors:

```tsx
// ✅ GOOD - Uses semantic tokens
<div className="bg-[var(--color-background)] text-[var(--color-text-primary)]">
  <p className="text-[var(--color-text-secondary)]">Secondary text</p>
</div>

// ❌ BAD - Hardcoded colors
<div className="bg-white text-black dark:bg-black dark:text-white">
  <p className="text-gray-600 dark:text-gray-400">Secondary text</p>
</div>
```

### Option 3: Tailwind Dark Variant (Specific Overrides)

For theme-specific overrides:

```tsx
<div className="bg-surface dark:opacity-90">
  <img className="dark:brightness-90" src="/logo.svg" alt="Logo" />
</div>
```

## Theme Toggle Component

The `ThemeToggle` component provides UI for switching themes:

```tsx
import { ThemeToggle } from '@/components/ThemeToggle';

<ThemeToggle 
  theme={currentTheme} 
  onToggle={setTheme} 
  size="md"
/>
```

### ThemeToggle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | - | Current active theme |
| `onToggle` | `(theme: 'light' \| 'dark') => void` | - | Theme change handler |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |

## Token Mapping

### Light Theme (Default)

```css
:root {
  /* Brand Colors - Same in both themes */
  --color-primary: #00484F;
  --color-accent: #FBEA1B;
  
  /* Theme-specific */
  --color-background: #FFFFFF;
  --color-surface: #F5F7FA;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #5A5A5A;
  --color-border: #E6EEF0;
}
```

### Dark Theme

```css
.dark {
  /* Brand Colors - Same as light theme */
  --color-primary: #00484F;
  --color-accent: #FBEA1B;
  
  /* Theme-specific overrides */
  --color-background: var(--color-background-dark); /* #0A0A0A */
  --color-surface: var(--color-surface-dark); /* #1A1A1A */
  --color-text-primary: var(--color-text-primary-dark); /* #F5F5F5 */
  --color-text-secondary: var(--color-text-secondary-dark); /* #AAAAAA */
  --color-border: var(--color-border-dark); /* #333333 */
}
```

## How It Works

### 1. Theme Switching Flow

```
User clicks ThemeToggle
    ↓
toggleTheme() or setTheme() called
    ↓
next-themes updates state & localStorage
    ↓
.dark class added/removed from <html>
    ↓
CSS variables cascade (:root or .dark)
    ↓
Components re-render with new theme
```

### 2. SSR-Safe Initialization

**next-themes** prevents FOUC by:
1. Injecting a blocking `<script>` in `<head>`
2. Reading `localStorage` before first paint
3. Setting `.dark` class on `<html>` immediately
4. Hydrating React state on mount

**No flash, no flicker** ✨

### 3. Theme Persistence

- Theme preference saved to `localStorage.getItem('fit-lead-theme')`
- Restored automatically on page reload
- Survives browser restarts

## Adding Theme-Specific Overrides

### When to Use Overrides

Only when semantic tokens aren't enough:

```tsx
// Image brightness adjustment in dark mode
<img 
  src="/photo.jpg" 
  className="dark:brightness-90 dark:contrast-110" 
/>

// Subtle shadow changes
<div className="shadow-md dark:shadow-xl dark:shadow-white/5">
```

### How to Add Overrides

**1. In CSS:**

```css
.my-component {
  /* Light theme (default) */
  opacity: 1;
}

.dark .my-component {
  /* Dark theme override */
  opacity: 0.9;
}
```

**2. In Tailwind:**

```tsx
<div className="opacity-100 dark:opacity-90">
```

## Best Practices

### ✅ DO

- Use semantic tokens (`--color-background`, `--color-text-primary`)
- Let ThemeProvider manage theme state
- Use `useTheme()` hook for theme-aware logic
- Test both themes in Storybook
- Ensure WCAG AA contrast (4.5:1 ratio)

### ❌ DON'T

- Hardcode `bg-white`, `bg-black` without semantic wrappers
- Use `theme === 'dark'` checks in components (use CSS)
- Duplicate theme logic across files
- Skip contrast testing in dark theme
- Remove `suppressHydrationWarning` from `<html>` (needed for next-themes)

## Accessibility

### Contrast Requirements (WCAG AA)

All text must meet **4.5:1 contrast ratio**:

| Theme | Background | Text Primary | Text Secondary |
|-------|-----------|--------------|----------------|
| Light | `#FFFFFF` | `#1A1A1A` ✅ 16.1:1 | `#5A5A5A` ✅ 7.3:1 |
| Dark | `#0A0A0A` | `#F5F5F5` ✅ 17.9:1 | `#AAAAAA` ✅ 9.5:1 |

### Testing Contrast

```bash
# Run contrast checker
node scripts/check-color-contrast.js --theme dark --threshold 4.5
```

## Storybook Integration

Themes work in Storybook via `.storybook/preview.tsx`:

```tsx
import { ThemeProvider } from '../providers/ThemeProvider';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
```

Use Storybook's theme toolbar to switch between light/dark.

## Troubleshooting

### Theme Flashes on Load

**Problem:** Brief flash of wrong theme  
**Solution:** Ensure `suppressHydrationWarning` on `<html>` tag (next-themes requirement)

```tsx
<html lang="ru" suppressHydrationWarning>
```

### Theme Not Persisting

**Problem:** Theme resets on page reload  
**Solution:** Check `storageKey` prop and localStorage permissions

```tsx
<ThemeProvider storageKey="fit-lead-theme">
```

### Components Don't Update

**Problem:** Components still show light theme in dark mode  
**Solution:** Use CSS variables, not hardcoded colors

```tsx
// ✅ GOOD
className="bg-[var(--color-background)]"

// ❌ BAD  
className="bg-white"
```

## API Reference

### useTheme Hook

```tsx
const { theme, setTheme, toggleTheme } = useTheme();
```

**Returns:**
- `theme`: `'light' | 'dark'` - Current active theme
- `setTheme(theme)`: Set specific theme
- `toggleTheme()`: Switch between themes

### ThemeProvider Component

```tsx
<ThemeProvider 
  defaultTheme="light"
  storageKey="fit-lead-theme"
>
  {children}
</ThemeProvider>
```

**Props:**
- `defaultTheme`: Default theme (no localStorage)
- `storageKey`: localStorage key
- `children`: App content

## Related Contracts

- **[CONTRACT-TOKENS-001](../Contracts/CONTRACT-TOKENS-001.yml)** - Design tokens source
- **[CONTRACT-TAILWIND-001](../Contracts/CONTRACT-TAILWIND-001.yml)** - Tailwind configuration
- **[CONTRACT-STORYBOOK-001](../Contracts/CONTRACT-STORYBOOK-001.yml)** - Storybook theme integration

---

**Last Updated:** 2025-10-05  
**Maintained by:** evgeny.sokolov
