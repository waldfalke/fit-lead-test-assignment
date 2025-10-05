# Fit&Lead Test Assignment 🚀

Мини-сайт из двух страниц с полноценной дизайн-системой, созданный через AI-инструменты с применением **Contract-Driven Development (DbC)** подхода.

## 🌐 Демо и Ресурсы

- **🌍 Live Demo:** [fit-lead-test-assignment.vercel.app](https://fit-lead-test-assignment.vercel.app)
- **📚 Storybook:** [waldfalke.github.io/fit-lead-test-assignment](https://waldfalke.github.io/fit-lead-test-assignment/)
- **💻 GitHub:** [github.com/waldfalke/fit-lead-test-assignment](https://github.com/waldfalke/fit-lead-test-assignment)

---

## 📋 Краткое описание проекта

### Использованные AI-инструменты:
- **Claude Sonnet 4** (основной) - генерация компонентов, архитектурные решения, рефакторинг
- **Windsurf/Cascade** - интеграция AI в IDE, быстрые итерации
- **ChatGPT** - консультации по Tailwind CSS v4, Next.js 15
- **GitHub Copilot** - автодополнение кода

### Организация компонентной структуры:
Применен **Contract-Driven Development (DbC)** подход - каждый компонент создавался на основе детального YAML-контракта с спецификацией props, вариантов и требований. Это обеспечило:
- Чёткую архитектуру до написания кода
- Типобезопасность (TypeScript interfaces из контрактов)
- Консистентность API компонентов
- Простоту переиспользования

Структура: `/components` (UI), `/components/sections` (секции страниц), `/config` (централизованная конфигурация), `/design-tokens` (единый источник токенов).

### Дизайн-система:
**137 design tokens** в формате JSON, автоматически генерирующие CSS переменные:
- Цвета: Fit&Lead brand (primary #00484F, accent #FBEA1B) + semantic + neutrals
- Spacing: 8px-система (12 значений от 4px до 128px)
- Typography: 6-уровневая шкала с responsive размерами
- Радиусы, тени, анимации, z-index - всё через токены

Light/Dark темы через `next-themes` с автоматической адаптацией всех компонентов.

### Итерации с AI:
**~50+ коммитов** за 2 рабочих дня:
- 10-12 основных компонентов (Button, Card, Navigation, ThemeToggle, Hero, Benefits, CTA, Footer)
- 15-20 итераций рефакторинга (централизация навигации, темы, токены)
- 10-15 фиксов и улучшений UI/UX (скругления, отступы, контраст, адаптивность)
- 5-7 настроек CI/CD (Vercel, GitHub Pages, автотесты)

### Основные сложности и решения:
1. **Tailwind CSS v4 (beta)** - новый синтаксис `@theme`, несовместимость с Storybook
   - Решение: Отдельная PostCSS конфигурация для Storybook, downgrade некоторых пакетов
2. **Темы без FOUC** - мерцание при загрузке
   - Решение: `next-themes` с правильным `suppressHydrationWarning` и storage provider
3. **Централизация навигации** - дублирование в Header/Footer
   - Решение: `config/navigation.ts` + переиспользуемый `Navigation` компонент
4. **Консистентность токенов** - хардкод вместо переменных
   - Решение: Автоматическая генерация CSS переменных + скрипты проверки (`verify-token-usage.js`)
5. **Адаптивность логотипов/иконок** - разные размеры в темах
   - Решение: Унифицированные viewBox + CSS фильтры (`brightness-0 invert` для темной темы)
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

---

## 🎯 Ключевые достижения

### Contract-Driven Development (DbC):
- ✅ **13 YAML-контрактов** определяют API всех компонентов ДО написания кода
- ✅ Контракты как **документация** и **промпты для AI**
- ✅ Автоматическая валидация соответствия контрактам через TypeScript

### Полное переиспользование компонентов:
- ✅ **Button** - используется на Landing (Hero, CTA) + демонстрируется в UI Kit (7 вариантов)
- ✅ **Card** - Benefits на Landing + демонстрация вариантов в UI Kit
- ✅ **Navigation** - Header, Footer, Mobile menu - **один компонент, разные варианты**
- ✅ **ThemeToggle** - в Header + отдельная демонстрация в UI Kit
- ✅ **Иконки** (TrendingUp, Headphones, Zap, BarChart3) - те же на обеих страницах

### Автоматизация:
- ✅ **GitHub Actions CI/CD**: автодеплой на Vercel при пуше в main
- ✅ **Storybook на GitHub Pages**: автоматический билд и деплой компонентов
- ✅ **Token validation**: проверка синхронизации токенов (`verify-tokens-sync.js`)
- ✅ **Component reuse check**: проверка переиспользования (`verify-component-reuse.js`)

### Темная тема:
- ✅ **next-themes** с автоопределением системной темы
- ✅ **Без FOUC** (Flash of Unstyled Content)
- ✅ **137 токенов** автоматически адаптируются к теме
- ✅ **Theme-aware логотипы** (желтый для dark, темно-бирюзовый для light)
- ✅ **Адаптивные иконки** (инверсия цветов через CSS filters)

---

## 💡 Технические особенности

### Stack:
- **Next.js 15** (App Router, Server Components)
- **Tailwind CSS v4** (beta) с `@theme` директивой
- **TypeScript** - строгая типизация
- **Storybook 8** - изолированная разработка компонентов
- **next-themes** - управление темами
- **Design Tokens** - JSON → CSS Variables pipeline

### Архитектурные решения:
1. **Контракты как промпты для AI** - 13 YAML-контрактов для генерации компонентов
2. **Централизованная конфигурация** - `config/navigation.ts` как single source of truth
3. **Token-driven styling** - все стили через CSS переменные, 0 хардкода
4. **Component composition** - маленькие переиспользуемые блоки
5. **Responsive by default** - mobile-first подход

### CI/CD:
```yaml
Push to main → GitHub Actions → Deploy:
├─ Vercel (production site)
└─ GitHub Pages (Storybook)
```

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

# Build Storybook
npm run build-storybook
```

**Локальные адреса:**
- Landing page: [http://localhost:3000](http://localhost:3000)
- UI Kit: [http://localhost:3000/ui-kit](http://localhost:3000/ui-kit)
- Design System: [http://localhost:3000/design-system](http://localhost:3000/design-system)
- Storybook: [http://localhost:6006](http://localhost:6006)

## ✅ Проверка качества

```bash
# Проверить синхронизацию токенов
npm run verify-tokens

# Проверить использование токенов в коде
npm run verify-usage

# Проверить переиспользование компонентов
npm run verify-reuse

# Запустить все проверки
npm run verify-all
```

**Результаты проверок:**
- ✅ **137 токенов** синхронизированы (100%)
- ✅ **Все файлы** используют CSS переменные
- ✅ **0 хардкода** в стилях
- ✅ **Переиспользование** компонентов подтверждено

---

## 🎓 Выводы

### Что получилось хорошо:
1. **Contract-Driven Development** - контракты ускорили разработку и обеспечили консистентность
2. **AI как пара** - Claude Sonnet 4 отлично справился с генерацией компонентов по контрактам
3. **Автоматизация** - CI/CD pipeline работает без участия человека
4. **Дизайн-система** - 137 токенов покрывают все аспекты UI
5. **Переиспользование** - каждый компонент используется минимум в 2 местах

### Что можно улучшить:
- Добавить больше микроанимаций (framer-motion)
- Расширить Storybook (больше stories, controls, документация)
- Добавить E2E тесты (Playwright)
- Оптимизировать bundle size (dynamic imports)

### Время разработки:
- **День 1** (8 часов): Настройка проекта, контракты, базовые компоненты, токены
- **День 2** (10 часов): Секции, темы, рефакторинг, UI/UX полировка, CI/CD

**Итого: ~18 часов чистого времени**

---

## 📄 Лицензия

MIT License - свободное использование для обучения и демонстрации.

---

**Сделано с ❤️ и AI (Claude Sonnet 4 + Windsurf)**
- ✅ **Reuse Score: 2.47x** (отлично!)
- ✅ **Button:** используется 22 раза в 4 файлах
- ✅ **Card:** используется 7 раз в 3 файлах

## 🌐 Деплой на Vercel

### Автоматический деплой:

1. **Push в GitHub:**
   ```bash
   git push origin main
   ```

2. **Vercel автоматически:**
   - Обнаружит изменения
   - Запустит билд
   - Задеплоит на production

### Ручной деплой:

```bash
# Установить Vercel CLI
npm i -g vercel

# Деплой
vercel

# Production деплой
vercel --prod
```

**Live URLs:**
- Production: https://fit-lead-test-assignment.vercel.app
- Landing: https://fit-lead-test-assignment.vercel.app
- UI Kit: https://fit-lead-test-assignment.vercel.app/ui-kit
- Design System: https://fit-lead-test-assignment.vercel.app/design-system

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
# Auto-deploy test
