# GitHub + Vercel Setup

## Шаг 1: Создать репозиторий на GitHub

1. Открыть https://github.com/waldfalke
2. Нажать **"New repository"** (зеленая кнопка)
3. Заполнить:
   - **Repository name:** `fit-lead-test-assignment`
   - **Description:** `Fit&Lead Test Assignment - AI-generated landing with design system`
   - **Visibility:** Public (чтобы заказчик мог посмотреть)
   - **НЕ добавлять:** README, .gitignore, license (уже есть локально)
4. Нажать **"Create repository"**

## Шаг 2: Подключить remote и push

После создания репозитория GitHub покажет инструкции. Выполнить:

```bash
cd "d:/Dev/Fit lead/fit-lead-test-assignment"

# Добавить remote
git remote add origin https://github.com/waldfalke/fit-lead-test-assignment.git

# Push main ветки
git branch -M main
git push -u origin main
```

## Шаг 3: Deploy на Vercel

### Вариант A: Через веб-интерфейс (рекомендуется)

1. Открыть https://vercel.com
2. Sign in with GitHub
3. Нажать **"New Project"**
4. Import Git Repository: выбрать `waldfalke/fit-lead-test-assignment`
5. Configure Project:
   - **Framework Preset:** Next.js (автоопределится)
   - **Build Command:** `npm run build --turbopack` (по умолчанию)
   - **Output Directory:** `.next` (по умолчанию)
   - **Install Command:** `npm install` (по умолчанию)
6. Нажать **"Deploy"**

### Вариант B: Через CLI

```bash
# Установить Vercel CLI (если еще нет)
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# После первого deploy - production deploy
vercel --prod
```

## Что получим:

✅ **GitHub репозиторий:** https://github.com/waldfalke/fit-lead-test-assignment
- Код доступен для просмотра
- История коммитов показывает процесс разработки
- Заказчик может клонировать и запустить локально

✅ **Vercel deployment:** https://fit-lead-test-assignment.vercel.app
- Автоматический deploy при каждом push
- Preview deployments для каждой ветки
- Production URL для заказчика

## После успешного deploy:

1. Добавить URL в README.md:
```markdown
## 🌐 Live Demo

- **Production:** https://fit-lead-test-assignment.vercel.app
- **GitHub:** https://github.com/waldfalke/fit-lead-test-assignment
```

2. Commit и push:
```bash
git add README.md
git commit -m "docs: add live demo URLs"
git push
```

---

**Готово! Можно начинать генерацию компонентов через AI.**
