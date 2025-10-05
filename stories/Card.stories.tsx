import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';
import { TrendingUpIcon, HeadphonesIcon, ZapIcon, BarChart3Icon } from '../components/icons';

/**
 * Card component stories
 * 
 * Flexible content card component used in Benefits section (Landing page) and UI Kit.
 * Uses the same icons (TrendingUp, Headphones, Zap, BarChart3) on both pages.
 * 
 * Features:
 * - 3 variants: default, elevated, outlined
 * - With/without icons (Lucide React icons)
 * - Interactive cards (href, onClick)
 * - Rounded corners (32px) and responsive
 */
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Reusable content card component with 3 variants. Used in Benefits section (Landing) and UI Kit page. Supports icons, semantic heading levels, and interactive states (clickable, linkable). Features highly rounded corners (2rem) and no max-width for flexible layouts.',
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

// Icon components from Lucide React
// Using semantic wrappers from components/icons

// ============================================
// Default Variant Stories
// ============================================

export const Default: Story = {
  args: {
    variant: 'default',
    icon: <TrendingUpIcon size={48} className="text-primary" />,
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
    icon: <HeadphonesIcon size={48} className="text-primary" />,
    title: 'Elevated Card',
    description: 'Elevated card with shadow effect. Provides more visual prominence and depth.',
  },
};

export const ElevatedHover: Story = {
  args: {
    variant: 'elevated',
    icon: <ZapIcon size={48} className="text-primary" />,
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
    icon: <BarChart3Icon size={48} className="text-primary" />,
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
    icon: <HeadphonesIcon size={48} className="text-primary" />,
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
    icon: <ZapIcon size={48} className="text-primary" />,
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
    icon: <BarChart3Icon size={48} className="text-primary" />,
    title: 'Card with Longer Content',
    description:
      'This card demonstrates how the component handles longer text content. The description can span multiple lines and the card will adjust its height accordingly. This ensures content is always readable and properly formatted.',
  },
};

export const ShortContent: Story = {
  args: {
    variant: 'elevated',
    icon: <HeadphonesIcon size={48} className="text-primary" />,
    title: 'Brief',
    description: 'Short and sweet.',
  },
};

// ============================================
// All Variants Showcase
// ============================================

export const AllVariants: Story = {
  args: {
    variant: 'default',
    title: 'Sample Card',
    description: 'This story shows all variants',
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <Card
        variant="default"
        icon={<BarChart3Icon size={48} className="text-primary" />}
        title="Default"
        description="Subtle background for content grids"
      />
      <Card
        variant="elevated"
        icon={<HeadphonesIcon size={48} className="text-primary" />}
        title="Elevated"
        description="Shadow effect for prominence"
      />
      <Card
        variant="outlined"
        icon={<ZapIcon size={48} className="text-primary" />}
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
  args: {
    variant: 'default',
    title: 'Benefits Example',
    description: 'Grid layout for benefits section',
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <Card
        variant="default"
        icon={<HeadphonesIcon size={48} className="text-primary" />}
        title="Health & Wellness"
        description="Professional guidance for your fitness journey with personalized training plans."
      />
      <Card
        variant="default"
        icon={<ZapIcon size={48} className="text-primary" />}
        title="Expert Trainers"
        description="Work with certified professionals who understand your goals and limitations."
      />
      <Card
        variant="default"
        icon={<BarChart3Icon size={48} className="text-primary" />}
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
