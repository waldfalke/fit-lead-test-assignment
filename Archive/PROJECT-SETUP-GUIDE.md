# 🚀 Fit&Lead Test Assignment - Setup Guide

## 📋 Пошаговый план запуска проекта

### Шаг 1: Установка Node.js

**Скачать и установить:**
- https://nodejs.org/en (LTS версия, рекомендуется v20.x или v18.x)
- После установки перезапустить терминал

**Проверить установку:**
```bash
node --version
npm --version
```

---

### Шаг 2: Инициализация Next.js проекта

```bash
cd "d:/Dev/Fit lead"
npx create-next-app@latest fit-lead-test-assignment --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

**Параметры:**
- `--typescript` - TypeScript поддержка
- `--tailwind` - Tailwind CSS из коробки
- `--app` - App Router (Next.js 13+)
- `--no-src-dir` - Без папки src (компоненты в корне)
- `--import-alias "@/*"` - Алиасы для импортов

**Переход в проект:**
```bash
cd fit-lead-test-assignment
```

---

### Шаг 3: Установка Storybook

```bash
npx storybook@latest init
```

**Выбрать опции:**
- Framework: Next.js
- TypeScript: Yes
- Install dependencies: Yes

---

### Шаг 4: Настройка Tailwind с токенами

**Файл: `tailwind.config.ts`**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Для темной темы
  theme: {
    extend: {
      colors: {
        // Brand colors (Fit&Lead)
        primary: {
          DEFAULT: '#00484F', // Темный бирюзовый
          50: '#E6F2F3',
          100: '#CCE5E7',
          200: '#99CBCF',
          300: '#66B1B7',
          400: '#33979F',
          500: '#00484F', // Main
          600: '#003A3F',
          700: '#002B2F',
          800: '#001D20',
          900: '#000E10',
        },
        accent: {
          DEFAULT: '#FBEA1B', // Желтый
          50: '#FFFEF5',
          100: '#FFFCEB',
          200: '#FFF9D6',
          300: '#FFF5C2',
          400: '#FEF2AD',
          500: '#FBEA1B', // Main
          600: '#C9BB16',
          700: '#978C10',
          800: '#645D0B',
          900: '#322F05',
        },
        // Semantic colors
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
```

**Файл: `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Theme variables */
:root {
  /* Light theme */
  --color-background: #FFFFFF;
  --color-surface: #F8F8F8;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E5E5E5;
}

.dark {
  /* Dark theme */
  --color-background: #0A0A0A;
  --color-surface: #1A1A1A;
  --color-text-primary: #F5F5F5;
  --color-text-secondary: #AAAAAA;
  --color-border: #333333;
}

body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
}
```

---

### Шаг 5: Git + GitHub

**Инициализация Git:**
```bash
git init
git add .
git commit -m "Initial commit: Next.js + Tailwind + Storybook setup"
```

**Создать репозиторий на GitHub:**
1. Открыть https://github.com/waldfalke
2. New repository
3. Название: `fit-lead-test-assignment`
4. Public
5. БЕЗ README/License (уже есть локально)

**Подключить remote и запушить:**
```bash
git remote add origin https://github.com/waldfalke/fit-lead-test-assignment.git
git branch -M main
git push -u origin main
```

---

### Шаг 6: Vercel Deployment

**Вариант A: Через интерфейс Vercel**
1. Открыть https://vercel.com
2. New Project
3. Import from GitHub: `waldfalke/fit-lead-test-assignment`
4. Framework Preset: Next.js (автоопределение)
5. Deploy

**Вариант B: Через CLI**
```bash
npm install -g vercel
vercel login
vercel
```

---

### Шаг 7: Структура проекта

```
fit-lead-test-assignment/
├── app/
│   ├── page.tsx              # Landing page
│   ├── ui-kit/
│   │   └── page.tsx          # UI Kit page
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Button.tsx            # CONTRACT-BUTTON-001
│   ├── Card.tsx              # CONTRACT-CARD-001
│   └── sections/
│       ├── Hero.tsx          # CONTRACT-HERO-001
│       ├── BenefitsSection.tsx
│       ├── CTASection.tsx
│       └── Footer.tsx
├── context/
│   └── ThemeContext.tsx      # CONTRACT-THEME-001
├── providers/
│   └── ThemeProvider.tsx
├── .storybook/
│   └── main.ts
├── tailwind.config.ts
├── package.json
├── README.md
└── Contracts/                # Наши контракты (справочно)
```

---

### Шаг 8: Покомпонентная разработка (Git strategy)

**Порядок коммитов (для истории итераций):**

1. `git commit -m "feat: add Button component with variants (primary, secondary)"`
2. `git commit -m "feat: add Card component (default, elevated, outlined)"`
3. `git commit -m "feat: add Hero section"`
4. `git commit -m "feat: add BenefitsSection with Card grid"`
5. `git commit -m "feat: add CTASection"`
6. `git commit -m "feat: add Footer with Fit&Lead contacts"`
7. `git commit -m "feat: compose Landing page"`
8. `git commit -m "feat: add Theme context and provider (light/dark)"`
9. `git commit -m "feat: add ThemeToggle component"`
10. `git commit -m "feat: create UI Kit showcase page"`
11. `git commit -m "docs: update README with AI workflow description"`

**Каждый коммит = 1 итерация с AI**, заказчик видит прогресс!

---

## 🤖 Workflow с AI

### Вариант 1: v0.dev
1. Скопировать контракт (например CONTRACT-BUTTON-001.yml)
2. Промпт: "Create React/Next.js component based on this contract: [paste contract]"
3. Получить код → скопировать в проект
4. Git commit

### Вариант 2: Cursor/GitHub Copilot
1. Открыть файл компонента
2. В комментарии вставить контракт
3. Cursor сгенерирует код на основе контракта
4. Git commit

### Вариант 3: Claude Code (в IDE)
1. Показать контракт Claude
2. "Implement this component according to contract"
3. Код появится в проекте
4. Git commit

---

## 📝 README.md для проекта

```markdown
# Fit&Lead Test Assignment

Тестовое задание: мини-сайт из двух страниц, созданный через AI-инструменты.

## 🎯 AI Workflow

- **Инструменты:** Cursor AI, Claude Code, v0.dev
- **Подход:** Contract-Driven AI Development (CDAD)
- **Итерации:** ~10-12 коммитов, каждый = 1 AI-генерация компонента

## 🏗️ Архитектура

- **Компоненты:** Button, Card (переиспользуются на обеих страницах)
- **Секции:** Hero, Benefits, CTA, Footer
- **Дизайн-система:** Design tokens → Tailwind config
- **Темы:** Light/Dark mode с переключением

## 🎨 Design System

- **Цвета:** Primary (#00484F), Accent (#FBEA1B), Neutrals
- **Spacing:** 8px, 16px, 24px, 32px, 48px
- **Typography:** Responsive scale (14px - 64px)
- **Компоненты:** 7 variants Button, 3 variants Card

## 💡 Сложности

1. Генерация консистентных токенов через AI (решено контрактами)
2. Адаптивность Card grid (решено Tailwind responsive utilities)
3. Theme switching без flash (решено blocking script в layout)

## 🚀 Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## 📦 Стек

Next.js 14, TypeScript, Tailwind CSS, React, Storybook
```

---

## ✅ Следующий шаг

**После установки Node.js:**
1. Запустить команды из Шага 2-6
2. Создать первый компонент (Button)
3. Git commit
4. Push → автодеплой на Vercel

**Готовы начинать?**
