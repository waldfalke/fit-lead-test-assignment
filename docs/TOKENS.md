# Design Tokens Reference

Это референсная документация дизайн-токенов проекта Fit&Lead.

## 📍 Source of Truth

**Рабочий источник токенов:** [`app/globals.css`](../app/globals.css)

Все токены определены через `@theme` директиву Tailwind CSS v4 и доступны напрямую в компонентах через Tailwind-классы.

**Этот файл (`design-tokens.json`)** — документация для:
- Передачи токенов дизайнерам/другим командам
- Экспорта в Figma/другие инструменты
- Референса при разработке

## 🎨 Token Categories

### Colors

#### Brand Colors
- **Primary:** `#00484F` — темный бирюзовый (основной цвет Fit&Lead)
- **Accent:** `#FBEA1B` — желтый (акцентный цвет)
- **Gradient:** `linear-gradient(116deg, #FBEA1B 11.8%, #00484F 91.32%)`

#### Semantic Colors
- **Background:** `#FFFFFF` (light) / `#0A0A0A` (dark)
- **Surface:** `#F5F7FA` (light, холодный голубой) / `#1A1A1A` (dark)
- **Text Primary:** `#1A1A1A` (light) / `#F5F5F5` (dark)
- **Text Secondary:** `#5A5A5A` (light, теплый серый) / `#AAAAAA` (dark)
- **Text on Accent:** `#0A0A0A` — почти черный на желтом (высокий контраст)
- **Text on Primary:** `#FFFFFF` — белый на бирюзовом
- **Border:** `#E6EEF0` (light, холодный) / `#333333` (dark)

#### Interactive States
- **Primary Hover:** `#003A3F`
- **Accent Hover:** `#E8D818`
- **Focus:** `rgba(0, 72, 79, 0.4)`

#### Status Colors
- **Success:** `#28c76f`
- **Warning:** `#ff9f43`
- **Danger:** `#ff4c51`
- **Info:** `#00bad1`

### Typography

#### Font Families
- **Sans:** `"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", ...`
- **Mono:** `"SFMono-Regular", Menlo, Monaco, Consolas, ...`

#### Font Sizes
- **xs:** `0.75rem` (12px)
- **sm:** `0.8125rem` (13px)
- **base:** `0.9375rem` (15px) — body text
- **lg:** `1.125rem` (18px) — h5
- **xl:** `1.5rem` (24px) — h4
- **2xl:** `1.75rem` (28px) — h3
- **3xl:** `2.375rem` (38px) — h2
- **4xl:** `2.875rem` (46px) — h1

#### Font Weights
- **normal:** `400`
- **medium:** `500`
- **semibold:** `600`
- **bold:** `700`

#### Line Heights
- **tight:** `1.25`
- **base:** `1.375`
- **relaxed:** `1.625`

### Spacing

Шкала кратная 8px:
- **xs:** `0.5rem` (8px)
- **sm:** `1rem` (16px)
- **md:** `1.5rem` (24px)
- **lg:** `2rem` (32px)
- **xl:** `3rem` (48px)
- **2xl:** `4rem` (64px)

### Border Radius

- **sm:** `0.25rem` (4px)
- **md:** `0.375rem` (6px) — base
- **lg:** `0.5rem` (8px)
- **xl:** `0.625rem` (10px)
- **2xl:** `2rem` (32px)
- **full:** `9999px` — pill (для кнопок/бэйджей)

### Shadows

- **sm:** `0 0.125rem 0.5rem 0 rgba(47, 43, 61, 0.12)`
- **md:** `0 0.1875rem 0.75rem 0 rgba(47, 43, 61, 0.14)`
- **lg:** `0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16)`
- **focus:** `0 0 0 0.15rem rgba(47, 43, 61, 0.75)`

## 🔄 Sync Process

При изменении токенов:

1. **Обновить** `app/globals.css` (source of truth)
2. **Синхронизировать** `docs/design-tokens.json`
3. **Обновить** эту документацию (`docs/TOKENS.md`)
4. **Коммит:** `docs(tokens): update [что изменилось]`

## 📦 Usage in Components

Токены доступны через Tailwind-классы:

```tsx
// Colors
<div className="bg-primary text-white">Primary button</div>
<div className="bg-accent text-[--color-text-on-accent]">Accent badge</div>

// Typography
<h1 className="text-4xl font-bold">Heading</h1>
<p className="text-base text-secondary">Body text</p>

// Spacing
<div className="p-md gap-sm">Content</div>

// Border Radius
<button className="rounded-full">Pill button</button>

// Shadows
<div className="shadow-md">Card</div>
```

## 🎯 Design Principles

1. **Не чистые серые** — все серые оттенки имеют теплый или холодный подтон
2. **Высокий контраст** — текст на цветных фонах должен быть читаемым (WCAG AA)
3. **Холодные surface** — фоны карточек/секций имеют холодный голубой оттенок
4. **Pill-радиусы** — кнопки и бэйджи используют `rounded-full` (9999px)
5. **Spacing кратный 8px** — все отступы кратны 8px для консистентности

---

**Источник токенов:** Извлечены из официального сайта Fit&Lead (theme-default.css, core.css)
