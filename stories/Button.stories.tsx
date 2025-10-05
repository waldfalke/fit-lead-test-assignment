import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

/**
 * Button component stories
 * 
 * Versatile button component with 7 variants, 5 sizes, and multiple states.
 * Used extensively on Landing page (Hero, CTA) and UI Kit page.
 * 
 * Matrix: variants × sizes × states
 * - Variants: primary, secondary, ghost, danger, subtle, link, tonal
 * - Sizes: xs, sm, md, lg, xl
 * - States: default, hover, focus, disabled, loading
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Accessible, theme-aware button component with 7 variants, 5 sizes, and multiple states. Used on Landing (Hero CTA, CTA section) and UI Kit pages. Supports icons, loading state, and works as link or button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'subtle', 'link', 'tonal'],
      description: 'Visual semantic variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
    href: {
      control: 'text',
      description: 'URL for link button (uses Next.js Link)',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Primary Variant Stories
// ============================================

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Disabled',
  },
};

export const PrimaryLoading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    children: 'Loading...',
  },
};

// ============================================
// Secondary Variant Stories
// ============================================

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: true,
    children: 'Disabled',
  },
};

// ============================================
// Ghost Variant Stories
// ============================================

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Button',
  },
};

// ============================================
// Danger Variant Stories
// ============================================

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'Delete',
  },
};

// ============================================
// Subtle Variant Stories
// ============================================

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    size: 'md',
    children: 'Subtle Button',
  },
};

// ============================================
// Link Variant Stories
// ============================================

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'md',
    children: 'Link Button',
  },
};

// ============================================
// Tonal Variant (Accent) Stories
// ============================================

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    size: 'md',
    children: 'Tonal Button',
  },
};

// ============================================
// Size Variants
// ============================================

export const SizeXS: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    children: 'Extra Small',
  },
};

export const SizeSM: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small',
  },
};

export const SizeMD: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium',
  },
};

export const SizeLG: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large',
  },
};

export const SizeXL: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    children: 'Extra Large',
  },
};

// ============================================
// With Icons
// ============================================

const IconLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0L10.5 5.5L16 6.5L12 10.5L13 16L8 13L3 16L4 10.5L0 6.5L5.5 5.5L8 0Z" />
  </svg>
);

const IconRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6 3L11 8L6 13V3Z" />
  </svg>
);

export const WithIconLeft: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    iconLeft: <IconLeft />,
    children: 'With Icon',
  },
};

export const WithIconRight: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    iconRight: <IconRight />,
    children: 'Next',
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    iconLeft: <IconLeft />,
    iconRight: <IconRight />,
    children: 'Both Icons',
  },
};

// ============================================
// Icon-Only Buttons
// ============================================

export const IconOnly: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    iconOnly: true,
    ariaLabel: 'Icon button',
    children: <IconLeft />,
  },
};

export const IconOnlyPrimary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    iconOnly: true,
    ariaLabel: 'Primary icon button',
    children: <IconLeft />,
  },
};

export const IconOnlySizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="xs" iconOnly ariaLabel="XS">
        <IconLeft />
      </Button>
      <Button variant="ghost" size="sm" iconOnly ariaLabel="SM">
        <IconLeft />
      </Button>
      <Button variant="ghost" size="md" iconOnly ariaLabel="MD">
        <IconLeft />
      </Button>
      <Button variant="ghost" size="lg" iconOnly ariaLabel="LG">
        <IconLeft />
      </Button>
      <Button variant="ghost" size="xl" iconOnly ariaLabel="XL">
        <IconLeft />
      </Button>
    </div>
  ),
};

// ============================================
// All Variants Showcase
// ============================================

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="link">Link</Button>
        <Button variant="tonal">Tonal</Button>
      </div>
    </div>
  ),
};

// ============================================
// All Sizes Showcase
// ============================================

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
};

// ============================================
// Interactive Example
// ============================================

export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click me!',
    onClick: () => alert('Button clicked!'),
  },
};
