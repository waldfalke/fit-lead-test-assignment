{{ ... }}

Тестовое задание: мини-сайт из двух страниц, созданный через AI-инструменты с использованием Contract-Driven Development подхода.

## 🎯 AI Workflow

- **Инструменты:** Claude Code, Cursor AI, v0.dev (планируется)
- **Подход:** Contract-Driven AI Development (CDAD) - каждый компонент будет генерироваться AI на основе детального контракта
- **Стратегия:** Покомпонентная разработка с отдельными коммитами для демонстрации итераций

## 🏗️ Архитектура

**Переиспользуемые компоненты:**
- **Button** (CONTRACT-BUTTON-001): 7 вариантов (primary, secondary, sizes, states)
- **Card** (CONTRACT-CARD-001): 3 варианта (default, elevated, outlined)
- Оба компонента используются на Landing странице И в UI Kit

**Секции страницы:**
- Hero - главный блок с CTA
- BenefitsSection - grid из Card компонентов
- CTASection - повторный призыв к действию
- Footer - навигация и контакты Fit&Lead

## 🎨 Design System

**Цвета (Fit&Lead brand):**
- Primary: `#00484F` (темный бирюзовый)
- Accent: `#FBEA1B` (желтый)
- Neutrals: 50-900 шкала серых

**Spacing Scale:**
- xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px, 2xl: 64px

**Typography:**
- Responsive: от 14px (small) до 64px (h1)
- System fonts для быстрой загрузки

**Темы:**
- Light/Dark mode с переключением
- CSS variables для runtime switching
- Все компоненты theme-aware

## 💡 Текущий статус

**✅ Завершено:**
1. **Setup проекта** - Next.js 15 + Tailwind CSS v4 + Storybook 9
2. **Design tokens** - Fit&Lead бренд-цвета (#00484F, #FBEA1B), spacing scale, typography
3. **Theme structure** - CSS variables готовы для light/dark mode
4. **Storybook config** - решена проблема совместимости PostCSS (array → object format)

**🔄 В процессе:**
- Генерация компонентов через AI на основе контрактов
- Покомпонентная разработка с Git коммитами

## 🚀 Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Запуск Storybook
npm run storybook

# Production build
npm run build
npm start
```

Откройте [http://localhost:3000](http://localhost:3000) для Landing page
Storybook доступен на [http://localhost:6006](http://localhost:6006)

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Component Docs:** Storybook 9
- **Testing:** Vitest (configured, not yet implemented)
- **Deployment:** Vercel (planned)

## 📁 Структура проекта

```
fit-lead-test-assignment/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── ui-kit/
│   │   └── page.tsx             # UI Kit showcase
│   ├── layout.tsx
│   └── globals.css              # Design tokens + theme variables
├── components/
│   ├── Button.tsx               # Reusable Button component
│   ├── Card.tsx                 # Reusable Card component
│   └── sections/
│       ├── Hero.tsx
│       ├── BenefitsSection.tsx
│       ├── CTASection.tsx
│       └── Footer.tsx
├── context/
│   └── ThemeContext.tsx         # Theme state management
├── providers/
│   └── ThemeProvider.tsx        # Theme provider wrapper
├── stories/                     # Storybook stories
├── .storybook/                  # Storybook config
└── Contracts/                   # 13 YAML contracts (reference)
```

## 📋 Contracts (CDAD Approach)

Проект использует 13 детальных контрактов в формате YAML:
- **Meta:** METACONTRACT (правила для всех контрактов)
- **Infrastructure:** TOKENS, TAILWIND, THEME, STORYBOOK
- **Components:** BUTTON, CARD
- **Sections:** HERO, BENEFITS, CTA, FOOTER
- **Pages:** LANDING-PAGE, UI-KIT-PAGE

Каждый контракт содержит: API, props, invariants, anti-patterns, acceptance criteria

## 🎓 Цели проекта

1. 🎯 **Компонентный подход** - переиспользование всех компонентов на обеих страницах (Button, Card, секции)
2. 🎯 **Design System** - централизованные токены, консистентные стили
3. 🎯 **AI-first Development** - генерация кода через AI на основе детальных контрактов
4. 🎯 **Git History** - покомпонентные коммиты демонстрируют итерации с AI
5. 🎯 **Theme Support** - light/dark mode с переключением
6. 🎯 **Responsive Design** - mobile-first, адаптивность на всех экранах

---

Создано для Fit&Lead тестового задания | 2025
