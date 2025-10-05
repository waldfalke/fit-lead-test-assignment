import React from 'react';
import { Card } from '../Card';
import { BenefitsProps } from './Benefits.types';

/**
 * Benefits Section Component
 * 
 * Showcases key benefits/features using Card components in a grid.
 * Implements CONTRACT-BENEFITS-SECTION-001 requirements.
 * 
 * @example
 * ```tsx
 * <Benefits
 *   title="Почему выбирают нас"
 *   benefits={[
 *     { icon: <Icon />, title: "Высокие выплаты", description: "..." }
 *   ]}
 * />
 * ```
 */
export const Benefits: React.FC<BenefitsProps> = ({
  title,
  subtitle,
  benefits,
  columns = 3,
}) => {
  // Grid columns based on prop
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section className="py-[var(--spacing-12)] md:py-[var(--spacing-16)] bg-[var(--color-surface)]">
      <div className="container mx-auto px-[var(--spacing-6)] md:px-[var(--spacing-8)]">
        {/* Section Header */}
        <div className="text-center mb-[var(--spacing-8)] md:mb-[var(--spacing-12)] max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-text-primary)] mb-[var(--spacing-4)] md:mb-[var(--spacing-6)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)]">
              {subtitle}
            </p>
          )}
        </div>
        <div className={`grid grid-cols-1 ${gridCols} gap-[var(--spacing-12)]`}> {/* 48px */}
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              variant="elevated"
              headingLevel="h3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
