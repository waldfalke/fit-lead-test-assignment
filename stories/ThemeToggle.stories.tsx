import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '../components/ThemeToggle';
import { useState } from 'react';

/**
 * ThemeToggle component stories
 * 
 * Light/Dark theme switcher used in Header and demonstrated in UI Kit.
 * Features sun/moon icons and smooth transitions.
 */
const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Theme toggle component with sun/moon icons. Two ghost buttons for switching between light and dark themes. Used in site Header and shown in UI Kit page. Works with next-themes provider for persistent theme preference.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Current theme',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of toggle buttons',
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Basic Stories
// ============================================

export const LightTheme: Story = {
  args: {
    theme: 'light',
    onToggle: (theme) => console.log('Theme changed to:', theme),
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    onToggle: (theme) => console.log('Theme changed to:', theme),
  },
};

// ============================================
// Size Variants
// ============================================

export const SmallSize: Story = {
  args: {
    theme: 'light',
    size: 'sm',
    onToggle: (theme) => console.log('Theme changed to:', theme),
  },
};

export const MediumSize: Story = {
  args: {
    theme: 'light',
    size: 'md',
    onToggle: (theme) => console.log('Theme changed to:', theme),
  },
};

export const LargeSize: Story = {
  args: {
    theme: 'light',
    size: 'lg',
    onToggle: (theme) => console.log('Theme changed to:', theme),
  },
};

// ============================================
// Interactive Example
// ============================================

export const Interactive: Story = {
  args: {
    theme: 'light',
    onToggle: (theme) => console.log('Theme changed to:', theme),
  },
  render: (args) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(args.theme);
    
    return (
      <div className="flex flex-col gap-4 items-center">
        <ThemeToggle theme={theme} onToggle={setTheme} />
        <p className="text-sm text-[--color-text-secondary]">
          Current theme: <strong>{theme}</strong>
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the buttons to toggle between light and dark themes.',
      },
    },
  },
};

// ============================================
// All Sizes Showcase
// ============================================

export const AllSizes: Story = {
  args: {
    theme: 'light',
    onToggle: (theme) => console.log('Theme changed to:', theme),
  },
  render: (args) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(args.theme);
    
    return (
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2 items-center">
          <ThemeToggle theme={theme} onToggle={setTheme} size="sm" />
          <span className="text-xs text-[--color-text-secondary]">Small</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <ThemeToggle theme={theme} onToggle={setTheme} size="md" />
          <span className="text-xs text-[--color-text-secondary]">Medium</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <ThemeToggle theme={theme} onToggle={setTheme} size="lg" />
          <span className="text-xs text-[--color-text-secondary]">Large</span>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};
