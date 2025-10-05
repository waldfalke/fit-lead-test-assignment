import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';
import { useState } from 'react';

/**
 * Header component stories
 * Implements CONTRACT-HEADER-001 story requirements
 */
const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Sticky header with logo, navigation links, and theme toggle. Includes responsive mobile menu with slide-in animation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentTheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Current theme',
    },
    sticky: {
      control: 'boolean',
      description: 'Whether header is sticky',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample navigation data (using actual site navigation)
const sampleNavigation = [
  { label: 'Главная', href: '/', active: true },
  { label: 'UI Kit', href: '/ui-kit', active: false },
  { label: 'Storybook', href: 'https://waldfalke.github.io/fit-lead-test-assignment/', active: false, external: true },
  { label: 'GitHub', href: 'https://github.com/waldfalke/fit-lead-test-assignment', active: false, external: true },
];

// ============================================
// Basic Stories
// ============================================

export const Default: Story = {
  args: {
    navigation: sampleNavigation,
    currentTheme: 'light',
    onThemeToggle: (theme) => console.log('Theme changed to:', theme),
  },
};

export const DarkTheme: Story = {
  args: {
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'UI Kit', href: '/ui-kit', active: true },
      { label: 'Design System', href: '/design-system' },
    ],
    currentTheme: 'dark',
    onThemeToggle: (theme) => console.log('Theme changed to:', theme),
  },
};

export const NotSticky: Story = {
  args: {
    navigation: sampleNavigation,
    currentTheme: 'light',
    sticky: false,
    onThemeToggle: (theme) => console.log('Theme changed to:', theme),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header without sticky positioning. Scroll to see the difference.',
      },
    },
  },
};

// ============================================
// Interactive Example
// ============================================

export const Interactive: Story = {
  args: {
    navigation: sampleNavigation,
    currentTheme: 'light',
    onThemeToggle: (theme) => console.log('Theme changed to:', theme),
  },
  render: (args) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(args.currentTheme);
    
    return (
      <div className={theme === 'dark' ? 'dark' : ''}>
        <Header
          navigation={args.navigation}
          currentTheme={theme}
          onThemeToggle={setTheme}
        />
        <div className="p-8 min-h-screen bg-background">
          <h1 className="text-3xl font-bold mb-4 text-[--color-text-primary]">
            Interactive Header Demo
          </h1>
          <p className="text-[--color-text-secondary] mb-4">
            Try clicking the theme toggle buttons in the header.
          </p>
          <p className="text-[--color-text-secondary] mb-4">
            Current theme: <strong>{theme}</strong>
          </p>
          <p className="text-[--color-text-secondary]">
            Scroll down to see the sticky header behavior.
          </p>
          <div className="h-[200vh]"></div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Fully interactive header with theme switching and sticky behavior.',
      },
    },
  },
};

// ============================================
// Mobile View
// ============================================

export const MobileView: Story = {
  args: {
    navigation: sampleNavigation,
    currentTheme: 'light',
    onThemeToggle: (theme) => console.log('Theme changed to:', theme),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Header on mobile devices with hamburger menu. Click the menu icon to open the mobile navigation.',
      },
    },
  },
};

// ============================================
// With Long Navigation
// ============================================

export const LongNavigation: Story = {
  args: {
    navigation: [
      { label: 'Home', href: '/', active: true },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    currentTheme: 'light',
    onThemeToggle: (theme) => console.log('Theme changed to:', theme),
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with more navigation items to test spacing and layout.',
      },
    },
  },
};

// ============================================
// Hover Animation Demo
// ============================================

export const HoverAnimation: Story = {
  args: {
    navigation: sampleNavigation,
    currentTheme: 'light',
    onThemeToggle: (theme) => console.log('Theme changed to:', theme),
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over navigation links to see the underline animation (grows from center with 0.3s ease-in-out).',
      },
    },
  },
};
