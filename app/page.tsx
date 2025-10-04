import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/Footer';

/**
 * Landing Page
 * 
 * Main landing page with Hero, Benefits, CTA, and Footer sections.
 * Demonstrates component reusability and design system consistency.
 */
export default function Home() {
  // Sample benefits data
  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <rect width="48" height="48" rx="8" fill="currentColor" opacity="0.1" />
          <path d="M24 14L28 22H20L24 14Z M24 26L20 34H28L24 26Z" fill="currentColor" />
        </svg>
      ),
      title: 'Высокие выплаты',
      description: 'Конкурентные ставки и прозрачная система вознаграждений для всех партнёров',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <path d="M24 8C24 8 8 18 8 28C8 34 12 38 16 38C19 38 22 36 24 33C26 36 29 38 32 38C36 38 40 34 40 28C40 18 24 8 24 8Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'Поддержка 24/7',
      description: 'Персональный менеджер и техническая поддержка в любое время суток',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <path d="M24 8L28 20L40 20L30 28L34 40L24 32L14 40L18 28L8 20L20 20L24 8Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'Быстрые выплаты',
      description: 'Еженедельные выплаты без задержек и минимальных порогов',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <rect x="8" y="8" width="32" height="32" rx="4" fill="currentColor" opacity="0.1" />
          <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Удобные инструменты',
      description: 'Современная платформа с детальной аналитикой и отчётностью',
    },
  ];

  // Footer navigation data
  const footerNavigation = [
    {
      title: 'Продукт',
      links: [
        { label: 'Возможности', href: '/features' },
        { label: 'Тарифы', href: '/pricing' },
        { label: 'Кейсы', href: '/cases' },
      ],
    },
    {
      title: 'Ресурсы',
      links: [
        { label: 'Документация', href: '/docs' },
        { label: 'UI Kit', href: '/ui-kit' },
        { label: 'Design System', href: '/design-system' },
      ],
    },
  ];

  const footerContacts = {
    email: 'hello@fit-lead.com',
    telegram: '@fitlead',
  };

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Первая партнёрская CPA сеть в тематике спорта и ЗОЖ"
        subtitle="Монетизируйте трафик с максимальной отдачей. Высокие выплаты, прозрачная статистика, поддержка 24/7"
        ctaText="Начать зарабатывать"
        ctaHref="#cta"
        backgroundVariant="gradient"
      />

      {/* Benefits Section */}
      <Benefits
        title="Почему выбирают Fit&Lead"
        subtitle="Мы создали идеальные условия для партнёров в нише спорта, здоровья и здорового образа жизни"
        benefits={benefits}
        columns={4}
      />

      {/* CTA Section */}
      <CTA
        title="Готовы начать зарабатывать?"
        description="Присоединяйтесь к тысячам партнёров, которые уже монетизируют свой трафик вместе с нами"
        ctaText="Зарегистрироваться"
        ctaHref="/signup"
        variant="gradient"
      />

      {/* Footer */}
      <Footer
        navigation={footerNavigation}
        contacts={footerContacts}
      />
    </main>
  );
}
