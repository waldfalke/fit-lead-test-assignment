import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';

/**
 * Card component stories
 * Implements CONTRACT-CARD-001 story requirements
 * 
 * Demonstrates:
 * - All variants: default, elevated, outlined
 * - With/without icons
 * - Interactive cards (href, onClick)
 * - Different content lengths
 */
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Reusable content card for benefits, features, and content grids. Supports multiple variants and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
      description: 'Visual variant',
    },
    icon: {
      control: false,
      description: 'Icon element (SVG, image, emoji)',
    },
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Semantic heading level',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icon component
const SampleIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className="text-primary"
  >
    <rect width="48" height="48" rx="8" fill="currentColor" opacity="0.1" />
    <path
      d="M24 14L28 22H20L24 14Z M24 26L20 34H28L24 26Z"
      fill="currentColor"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className="text-primary"
  >
    <path
      d="M24 38C24 38 8 28 8 18C8 12 12 8 16 8C19 8 22 10 24 13C26 10 29 8 32 8C36 8 40 12 40 18C40 28 24 38 24 38Z"
      fill="currentColor"
      opacity="0.2"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className="text-primary"
  >
    <path
      d="M24 8L28 20L40 20L30 28L34 40L24 32L14 40L18 28L8 20L20 20L24 8Z"
      fill="currentColor"
      opacity="0.2"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// ============================================
// Default Variant Stories
// ============================================

export const Default: Story = {
  args: {
    variant: 'default',
    icon: <SampleIcon />,
    title: 'Default Card',
    description: 'This is a default card with subtle background. Perfect for content grids and feature showcases.',
  },
};

export const DefaultWithoutIcon: Story = {
  args: {
    variant: 'default',
    title: 'Card Without Icon',
    description: 'Cards can work without icons, focusing on text content.',
  },
};

// ============================================
// Elevated Variant Stories
// ============================================

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    icon: <HeartIcon />,
    title: 'Elevated Card',
    description: 'Elevated card with shadow effect. Provides more visual prominence and depth.',
  },
};

export const ElevatedHover: Story = {
  args: {
    variant: 'elevated',
    icon: <StarIcon />,
    title: 'Hover Me',
    description: 'Elevated cards have enhanced shadow on hover for better interactivity.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over this card to see the shadow transition effect.',
      },
    },
  },
};

// ============================================
// Outlined Variant Stories
// ============================================

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    icon: <SampleIcon />,
    title: 'Outlined Card',
    description: 'Outlined card with border. Minimal style that works well on colored backgrounds.',
  },
};

export const OutlinedWithoutIcon: Story = {
  args: {
    variant: 'outlined',
    title: 'Minimal Outlined',
    description: 'Clean, minimal card with just border and text.',
  },
};

// ============================================
// Interactive Cards
// ============================================

export const ClickableWithHref: Story = {
  args: {
    variant: 'elevated',
    icon: <HeartIcon />,
    title: 'Clickable Card (Link)',
    description: 'This card is a link. Click to navigate (href prop).',
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with href prop becomes a Next.js Link with hover effects.',
      },
    },
  },
};

export const ClickableWithOnClick: Story = {
  args: {
    variant: 'default',
    icon: <StarIcon />,
    title: 'Clickable Card (Button)',
    description: 'This card is a button. Click to trigger action.',
    onClick: () => alert('Card clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with onClick prop becomes a button element.',
      },
    },
  },
};

// ============================================
// Content Variations
// ============================================

export const LongContent: Story = {
  args: {
    variant: 'default',
    icon: <SampleIcon />,
    title: 'Card with Longer Content',
    description:
      'This card demonstrates how the component handles longer text content. The description can span multiple lines and the card will adjust its height accordingly. This ensures content is always readable and properly formatted.',
  },
};

export const ShortContent: Story = {
  args: {
    variant: 'elevated',
    icon: <HeartIcon />,
    title: 'Brief',
    description: 'Short and sweet.',
  },
};

// ============================================
// All Variants Showcase
// ============================================

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <Card
        variant="default"
        icon={<SampleIcon />}
        title="Default"
        description="Subtle background for content grids"
      />
      <Card
        variant="elevated"
        icon={<HeartIcon />}
        title="Elevated"
        description="Shadow effect for prominence"
      />
      <Card
        variant="outlined"
        icon={<StarIcon />}
        title="Outlined"
        description="Border style for minimal look"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// ============================================
// Benefits Section Example
// ============================================

export const BenefitsGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <Card
        variant="default"
        icon={<HeartIcon />}
        title="Health & Wellness"
        description="Professional guidance for your fitness journey with personalized training plans."
      />
      <Card
        variant="default"
        icon={<StarIcon />}
        title="Expert Trainers"
        description="Work with certified professionals who understand your goals and limitations."
      />
      <Card
        variant="default"
        icon={<SampleIcon />}
        title="Flexible Schedule"
        description="Train at your own pace with 24/7 access to our platform and resources."
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Example of how cards are used in benefits/features sections.',
      },
    },
  },
};
