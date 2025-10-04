'use client';

import { Header } from '@/components/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { useTheme } from '@/hooks/useTheme';

/**
 * Header wrapper component that uses theme hook
 * Separated to use useTheme inside ThemeProvider context
 */
function HeaderWithTheme() {
  const { theme, setTheme } = useTheme();

  const navigation = [
    { label: 'Главная', href: '/', active: false },
    { label: 'UI Kit', href: '/ui-kit', active: false },
    { label: 'Design System', href: '/design-system', active: false },
  ];

  return (
    <Header
      navigation={navigation}
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
