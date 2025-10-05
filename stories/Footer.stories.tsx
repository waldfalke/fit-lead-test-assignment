import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/Footer';

/**
 * Footer component stories
 * Reusable footer with navigation, logo, social links, and legal information.
 * Uses the same Navigation component as Header.
 */
const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Reusable footer component with logo, navigation (same component as Header), social media icons, and legal links. Theme-aware with dynamic logo switching and rounded top corners.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default footer in light theme.
 * Shows navigation, logo, social icons, and copyright.
 */
export const Default: Story = {};

/**
 * Footer in dark theme.
 * Note: Theme switching requires the ThemeProvider context.
 */
export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
