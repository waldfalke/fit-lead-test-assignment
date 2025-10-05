import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from '../components/Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Reusable navigation component used in Header, Footer, and mobile menu. Supports different variants with consistent styling and behavior.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of navigation items',
      control: 'object',
    },
    variant: {
      description: 'Visual variant of navigation',
      control: 'select',
      options: ['header', 'footer', 'mobile'],
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { label: 'Главная', href: '/', active: false },
  { label: 'UI Kit', href: '/ui-kit', active: true },
  { label: 'Storybook', href: 'https://waldfalke.github.io/fit-lead-test-assignment/', active: false, external: true },
  { label: 'GitHub', href: 'https://github.com/waldfalke/fit-lead-test-assignment', active: false, external: true },
];

/**
 * Header navigation variant with animated underline on hover.
 * Used in the main site header.
 */
export const HeaderVariant: Story = {
  args: {
    items: defaultItems,
    variant: 'header',
    className: 'flex gap-8',
  },
};

/**
 * Footer navigation variant with simple hover effect.
 * Used in the site footer.
 */
export const FooterVariant: Story = {
  args: {
    items: defaultItems,
    variant: 'header', // Footer uses header variant now
    className: 'flex justify-center gap-8',
  },
};

/**
 * Mobile navigation variant with borders between items.
 * Used in mobile menu overlay.
 */
export const MobileVariant: Story = {
  args: {
    items: defaultItems,
    variant: 'mobile',
    className: 'flex flex-col gap-2',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Navigation with active state.
 * Shows how the active item is highlighted.
 */
export const WithActiveItem: Story = {
  args: {
    items: [
      { label: 'Главная', href: '/', active: true },
      { label: 'UI Kit', href: '/ui-kit', active: false },
      { label: 'GitHub', href: 'https://github.com', active: false, external: true },
    ],
    variant: 'header',
    className: 'flex gap-8',
  },
};

/**
 * Minimal navigation with few items.
 */
export const MinimalItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', active: false },
      { label: 'About', href: '/about', active: false },
    ],
    variant: 'header',
    className: 'flex gap-6',
  },
};
