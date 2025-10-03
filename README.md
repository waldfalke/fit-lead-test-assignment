# Fit&Lead Test Assignment 🚀

Тестовое задание: мини-сайт из двух страниц, созданный через AI-инструменты с использованием Contract-Driven Development подхода.

## 🌐 Links

- **GitHub Repository:** https://github.com/waldfalke/fit-lead-test-assignment
- **Live Demo (Vercel):** 🔜 Deploying...
- **Storybook:** 🔜 Will be deployed

## 🎯 AI Workflow

- **Инструменты:** Claude Sonnet 4, Windsurf, ChatGPT
- **Подход:** Contract-Driven AI Development (CDAD) - каждый компонент будет генерироваться AI на основе детального контракта
- **Итерации:** Планируется ~10-12 коммитов, каждый коммит = одна AI-генерация компонента с последующей интеграцией
## 🏗️ Архитектура

**Переиспользуемые компоненты:**
- **Button** (CONTRACT-BUTTON-001): 7 вариантов (primary, secondary, sizes, states)
- **Card** (CONTRACT-CARD-001): 3 варианта (default, elevated, outlined)
- **ThemeToggle** - переключатель light/dark режимов
- Все компоненты используются на Landing странице И в UI Kit для демонстрации переиспользования

**Секции страницы:**
- **Hero** - главный блок с CTA (использует Button)
- **BenefitsSection** - grid из Card компонентов
- **CTASection** - повторный призыв к действию (использует Button)
- **Footer** - навигация и контакты Fit&Lead

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

## 💡 Подход и архитектурные решения

1. **Контракты как промпты для AI** - создано 13 детальных YAML-контрактов, которые будут использоваться как инструкции для AI при генерации компонентов
2. **Tailwind CSS v4** - выбрана новая версия с `@theme` директивой для более чистой работы с design tokens
3. **Storybook интеграция** - настроен Storybook с решением проблемы совместимости PostCSS конфигурации между Next.js и Vite
4. **Theme switching** - планируется реализация через CSS variables без flash on load

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

## 🎯 Что будет демонстрировать проект

1. **Компонентный подход** - переиспользование всех компонентов (Button, Card, секции) на обеих страницах
2. **Design System** - централизованные токены (#00484F, #FBEA1B), консистентная spacing/typography шкала
3. **AI-first Development** - каждый компонент генерируется AI на основе детального контракта с anti-patterns
4. **Git History** - четкие коммиты демонстрируют итеративный процесс AI-генерации
5. **Theme Support** - light/dark mode с переключением
6. **Responsive Design** - mobile-first подход, адаптивность на всех экранах

---

Создано для Fit&Lead тестового задания | 2025
