'use client';

import { Header } from '@/components/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { useTheme } from '@/hooks/useTheme';
import { SITE_NAVIGATION } from '@/config/navigation';

/**
 * Header wrapper component that uses theme hook
 * Separated to use useTheme inside ThemeProvider context
 */
function HeaderWithTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Header
      navigation={SITE_NAVIGATION}
      currentTheme={theme}
      onThemeToggle={setTheme}
    />
  );
}

/**
 * Client-side layout wrapper with Header and theme management
 * Implements CONTRACT-THEME-001 requirements
 */
export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="fit-lead-theme">
      <HeaderWithTheme />
      {children}
    </ThemeProvider>
  );
}
