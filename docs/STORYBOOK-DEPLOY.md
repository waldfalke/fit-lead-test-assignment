# 📚 Storybook Deployment Guide

Руководство по деплою Storybook для доступа заказчика.

## 🎯 Рекомендуемый способ: Chromatic

### Преимущества:
- ✅ Официальный хостинг от создателей Storybook
- ✅ Автоматический деплой при push в GitHub
- ✅ Visual regression testing
- ✅ Бесплатно для публичных проектов
- ✅ Красивый UI с комментариями и шарингом

### Шаги:

#### 1. Установка Chromatic

```bash
npm install --save-dev chromatic
```

#### 2. Регистрация на Chromatic

1. Перейти на https://www.chromatic.com/
2. Войти через GitHub
3. Выбрать репозиторий `fit-lead-test-assignment`
4. Получить Project Token

#### 3. Деплой Storybook

```bash
# Первый деплой (замените YOUR_PROJECT_TOKEN)
npx chromatic --project-token=YOUR_PROJECT_TOKEN

# Или добавьте в package.json:
npm run chromatic
```

#### 4. Автоматический деплой через GitHub Actions

Создайте `.github/workflows/chromatic.yml`:

```yaml
name: Chromatic Deployment

on:
  push:
    branches:
      - main

jobs:
  chromatic-deployment:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm ci
      
      - name: Publish to Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

#### 5. Добавить секрет в GitHub

1. GitHub → Settings → Secrets and variables → Actions
2. New repository secret
3. Name: `CHROMATIC_PROJECT_TOKEN`
4. Value: ваш токен из Chromatic

### Результат:

После push в `main`:
- ✅ Storybook автоматически деплоится
- ✅ Получаете ссылку вида: `https://YOUR_PROJECT_ID.chromatic.com`
- ✅ Можно делиться ссылкой с заказчиком

---

## 🌐 Альтернатива: GitHub Pages

### Преимущества:
- ✅ Бесплатно
- ✅ Простая настройка
- ✅ Интеграция с GitHub

### Шаги:

#### 1. Добавить скрипт в package.json

```json
{
  "scripts": {
    "deploy-storybook": "storybook build && gh-pages -d storybook-static"
  }
}
```

#### 2. Установить gh-pages

```bash
npm install --save-dev gh-pages
```

#### 3. Деплой

```bash
npm run deploy-storybook
```

#### 4. Настроить GitHub Pages

1. GitHub → Settings → Pages
2. Source: `gh-pages` branch
3. Folder: `/ (root)`

### Результат:

Storybook доступен по адресу:
```
https://YOUR_USERNAME.github.io/fit-lead-test-assignment/
```

---

## 📦 Альтернатива: Vercel

### Преимущества:
- ✅ Тот же хостинг что и основной сайт
- ✅ Автоматический деплой
- ✅ Бесплатно

### Шаги:

#### 1. Создать отдельный проект для Storybook

В Vercel Dashboard:
1. New Project
2. Import `fit-lead-test-assignment`
3. Framework Preset: Other
4. Build Command: `npm run build-storybook`
5. Output Directory: `storybook-static`

#### 2. Настроить домен

Получите URL вида:
```
https://fit-lead-storybook.vercel.app
```

---

## 🎨 Альтернатива: Netlify

### Шаги:

#### 1. Создать `netlify.toml`

```toml
[build]
  command = "npm run build-storybook"
  publish = "storybook-static"
```

#### 2. Деплой

1. Netlify Dashboard → New site from Git
2. Выбрать репозиторий
3. Deploy

### Результат:

```
https://fit-lead-storybook.netlify.app
```

---

## ✅ Рекомендация для заказчика

**Используйте Chromatic:**

1. ✅ **Лучший UX** - специально для Storybook
2. ✅ **Комментарии** - заказчик может оставлять фидбек прямо на компонентах
3. ✅ **История** - все версии Storybook сохраняются
4. ✅ **Шаринг** - легко делиться конкретными компонентами

**Пример ссылки для заказчика:**
```
https://6543210abcdef.chromatic.com
```

---

## 📊 Сравнение вариантов

| Вариант | Стоимость | Автодеплой | Visual Testing | Комментарии | Рекомендация |
|---------|-----------|------------|----------------|-------------|--------------|
| **Chromatic** | Бесплатно | ✅ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| **GitHub Pages** | Бесплатно | ⚠️ Manual | ❌ | ❌ | ⭐⭐⭐ |
| **Vercel** | Бесплатно | ✅ | ❌ | ❌ | ⭐⭐⭐⭐ |
| **Netlify** | Бесплатно | ✅ | ❌ | ❌ | ⭐⭐⭐⭐ |

---

## 🚀 Quick Start (Chromatic)

```bash
# 1. Установить
npm install --save-dev chromatic

# 2. Деплой (получите токен на chromatic.com)
npx chromatic --project-token=YOUR_TOKEN

# 3. Получить ссылку
# → https://YOUR_PROJECT_ID.chromatic.com

# 4. Поделиться с заказчиком
# Просто отправьте ссылку!
```

---

## 📝 Что отправить заказчику

**Письмо:**

```
Добрый день!

Storybook с UI компонентами доступен по ссылке:
https://YOUR_PROJECT_ID.chromatic.com

В Storybook вы можете:
- Посмотреть все компоненты (Button, Card, Header, ThemeToggle)
- Протестировать разные состояния и варианты
- Переключать темы (light/dark)
- Проверить адаптивность (mobile/desktop)

Все компоненты следуют дизайн-системе Fit&Lead:
- Цвета: #00484F (primary), #FBEA1B (accent)
- Spacing: 8px grid
- Typography: responsive scale

С уважением,
[Ваше имя]
```
