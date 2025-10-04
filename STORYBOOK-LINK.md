# 📚 Storybook - Ссылка для заказчика

## 🔗 Ссылка на Storybook:

**GitHub Pages:**
```
https://waldfalke.github.io/fit-lead-test-assignment/
```

---

## ⚙️ Настройка GitHub Pages (если еще не настроено):

1. Перейти в репозиторий: https://github.com/waldfalke/fit-lead-test-assignment
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** → **/ (root)** → Save
5. Подождать 1-2 минуты

---

## ✅ После настройки:

Storybook будет доступен по адресу:
```
https://waldfalke.github.io/fit-lead-test-assignment/
```

---

## 🔄 Обновление Storybook:

Каждый раз когда нужно обновить Storybook для заказчика:

```bash
npm run deploy-storybook
```

Изменения появятся на GitHub Pages через 1-2 минуты.

---

## 📧 Письмо заказчику:

```
Добрый день!

Storybook с UI компонентами доступен по ссылке:
🔗 https://waldfalke.github.io/fit-lead-test-assignment/

В Storybook вы можете:
✅ Посмотреть все компоненты (Button, Card, Header, ThemeToggle)
✅ Протестировать разные состояния и варианты
✅ Переключать темы (light/dark)
✅ Проверить адаптивность (mobile/desktop)

Компоненты:
- Button: 18 вариантов (primary, secondary, ghost, sizes, states, icon-only)
- Card: 8 вариантов (default, elevated, outlined, interactive)
- Header: навигация с анимацией, theme toggle, responsive menu
- ThemeToggle: переключатель light/dark тем

Все компоненты следуют дизайн-системе Fit&Lead:
- Цвета: #00484F (primary), #FBEA1B (accent)
- Spacing: 8px grid
- Иконки: Lucide React (1000+ профессиональных иконок)
- Адаптивность: mobile-first подход

С уважением,
Евгений
```

---

## 📊 Что включено в Storybook:

### Components:
- **Button** (18 stories)
  - All variants: primary, secondary, ghost, danger, subtle, link, tonal
  - All sizes: xs, sm, md, lg, xl
  - States: default, disabled, loading
  - With icons: iconLeft, iconRight, iconOnly

- **Card** (8 stories)
  - Variants: default, elevated, outlined
  - With/without icons (Lucide)
  - Interactive: href, onClick
  - Content variations

- **Header** (7 stories)
  - Default, Dark Theme, Not Sticky
  - Interactive (theme switching)
  - Mobile View, Long Navigation
  - Hover Animation demo

- **ThemeToggle** (6 stories)
  - Light/Dark themes
  - Sizes: sm, md, lg
  - Interactive showcase

### Features:
✅ Interactive controls (Storybook Controls addon)
✅ Accessibility checks (a11y addon)
✅ Responsive testing (viewport addon)
✅ Documentation (autodocs)
✅ Dark mode support

---

## 🎯 Следующие шаги:

1. ✅ Storybook задеплоен на GitHub Pages
2. ⏳ Настроить GitHub Pages (если еще не настроено)
3. 📧 Отправить ссылку заказчику
4. 🔄 При необходимости обновлять через `npm run deploy-storybook`
