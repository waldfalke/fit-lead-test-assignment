import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/Footer';

/**
 * Footer component stories
 * Implements CONTRACT-FOOTER-001 story requirements
 */
const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullwidth',
    docs: {
      description: {
        component: 'Site footer with navigation, contacts, and brand info. Responsive layout adapting from stacked (mobile) to multi-column (desktop).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample navigation data
const sampleNavigation = [
  {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '/features' },
      { label: 'Тарифы', href: '/pricing' },
      { label: 'Кейсы', href: '/cases' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '/about' },
      { label: 'Блог', href: '/blog' },
      { label: 'Карьера', href: '/careers' },
      { label: 'Контакты', href: '/contacts' },
    ],
  },
];

// Sample contacts
const sampleContacts = {
  email: 'hello@fit-lead.com',
  telegram: '@fitlead',
  supportUrl: '/support',
};

// Sample social links
const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const sampleSocial = [
  {
    platform: 'telegram' as const,
    url: 'https://t.me/fitlead',
    icon: <TelegramIcon />,
  },
  {
    platform: 'instagram' as const,
    url: 'https://instagram.com/fitlead',
    icon: <InstagramIcon />,
  },
];

// ============================================
// Default Story
// ============================================

export const Default: Story = {
  args: {
    navigation: sampleNavigation,
    contacts: sampleContacts,
    social: sampleSocial,
  },
};

// ============================================
// Without Social Links
// ============================================

export const WithoutSocial: Story = {
  args: {
    navigation: sampleNavigation,
    contacts: sampleContacts,
  },
};

// ============================================
// Minimal (Only Email)
// ============================================

export const Minimal: Story = {
  args: {
    navigation: [
      {
        title: 'Компания',
        links: [
          { label: 'О нас', href: '/about' },
          { label: 'Контакты', href: '/contacts' },
        ],
      },
    ],
    contacts: {
      email: 'hello@fit-lead.com',
    },
  },
};

// ============================================
// Custom Copyright
// ============================================

export const CustomCopyright: Story = {
  args: {
    navigation: sampleNavigation,
    contacts: sampleContacts,
    copyrightText: '© 2024 Fit&Lead CPA Network. Все права защищены.',
  },
};

// ============================================
// Full Featured
// ============================================

export const FullFeatured: Story = {
  args: {
    navigation: [
      {
        title: 'Продукт',
        links: [
          { label: 'Возможности', href: '/features' },
          { label: 'Тарифы', href: '/pricing' },
          { label: 'Интеграции', href: '/integrations' },
          { label: 'API', href: '/api' },
        ],
      },
      {
        title: 'Ресурсы',
        links: [
          { label: 'Документация', href: '/docs' },
          { label: 'Блог', href: '/blog' },
          { label: 'Кейсы', href: '/cases' },
          { label: 'Вебинары', href: '/webinars' },
        ],
      },
      {
        title: 'Компания',
        links: [
          { label: 'О нас', href: '/about' },
          { label: 'Команда', href: '/team' },
          { label: 'Карьера', href: '/careers' },
          { label: 'Пресс-кит', href: '/press' },
        ],
      },
    ],
    contacts: {
      email: 'hello@fit-lead.com',
      telegram: '@fitlead_support',
      supportUrl: 'https://support.fit-lead.com',
    },
    social: sampleSocial,
  },
};
