import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/Footer';
import { TrendingUpIcon, HeadphonesIcon, ZapIcon, BarChart3Icon } from '@/components/icons';

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
      icon: <TrendingUpIcon size={48} className="text-primary" />,
      title: 'Высокие выплаты',
      description: 'Конкурентные ставки и прозрачная система вознаграждений для всех партнёров',
    },
    {
      icon: <HeadphonesIcon size={48} className="text-primary" />,
      title: 'Поддержка 24/7',
      description: 'Персональный менеджер и техническая поддержка в любое время суток',
    },
    {
      icon: <ZapIcon size={48} className="text-primary" />,
      title: 'Быстрые выплаты',
      description: 'Еженедельные выплаты без задержек и минимальных порогов',
    },
    {
      icon: <BarChart3Icon size={48} className="text-primary" />,
      title: 'Удобные инструменты',
      description: 'Современная платформа с детальной аналитикой и отчётностью',
    },
  ];

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
      <Footer />
    </main>
  );
}
