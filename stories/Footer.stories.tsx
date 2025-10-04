import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/Footer';

/**
 * Footer component stories
 * Simplified footer in Fit&Lead colors with logo, copyright, and social links.
 */
const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullwidth',
    docs: {
      description: {
        component: 'Simplified footer in Fit&Lead brand colors. Includes logo, copyright, and social media links.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Default Story
// ============================================

export const Default: Story = {};
