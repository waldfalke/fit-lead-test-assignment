# 🔓 Как открыть публичный доступ к Vercel сайту

## Проблема:
**401 Unauthorized** - сайт защищен паролем Vercel

```
HTTP/1.1 401 Unauthorized
Set-Cookie: _vercel_sso_nonce=...
```

---

## ✅ Решение 1: Отключить Password Protection

### Шаги:

1. **Откройте настройки проекта:**
   https://vercel.com/waldfalkes-projects/fit-lead-test-assignment/settings

2. **Перейдите в "Deployment Protection":**
   - Settings → Deployment Protection

3. **Отключите защиту:**
   - Найдите "Vercel Authentication" или "Password Protection"
   - Переключите на **OFF** или **Disabled**
   - Сохраните изменения

4. **Проверьте:**
   ```bash
   curl -I https://fit-lead-test-assignment-d9m62c3ny-waldfalkes-projects.vercel.app
   # Должно быть: HTTP/1.1 200 OK
   ```

---

## ✅ Решение 2: Получить публичный URL

### Если хотите оставить защиту, используйте публичный домен:

1. **Откройте Vercel Dashboard:**
   https://vercel.com/waldfalkes-projects/fit-lead-test-assignment

2. **Скопируйте Production URL:**
   - Обычно это: `fit-lead-test-assignment.vercel.app`
   - Или назначьте custom domain

3. **Используйте этот URL:**
   ```
   https://fit-lead-test-assignment.vercel.app
   ```

---

## ✅ Решение 3: Использовать Preview Deployment URL

### Preview deployments обычно не защищены:

1. **Откройте Deployments:**
   https://vercel.com/waldfalkes-projects/fit-lead-test-assignment/deployments

2. **Найдите последний успешный deployment**

3. **Кликните на него и скопируйте URL**

4. **Используйте этот preview URL для тестирования**

---

## 🔍 Как проверить настройки:

### 1. В Vercel Dashboard:
```
Project → Settings → Deployment Protection
```

### 2. Проверьте что отключено:
- [ ] Vercel Authentication (SSO)
- [ ] Password Protection
- [ ] IP Allowlist
- [ ] Trusted IPs

### 3. Настройки для публичного доступа:
```json
{
  "protection": {
    "type": "none"
  }
}
```

---

## 🎯 Текущие URLs:

### Проблемный URL (401):
```
https://fit-lead-test-assignment-d9m62c3ny-waldfalkes-projects.vercel.app
```

### Возможные рабочие URLs:
```
https://fit-lead-test-assignment.vercel.app
https://fit-lead-test-assignment-git-main.vercel.app
```

### Проверка URL:
```bash
# Должен вернуть 200 OK для публичного сайта
curl -I https://ваш-url.vercel.app

# Если 200 OK - сайт доступен!
# Если 401 - нужно отключить защиту
```

---

## 📝 Рекомендации:

### Для публичного демо:
- ✅ **Отключите** Vercel Authentication
- ✅ **Отключите** Password Protection
- ✅ Используйте публичный URL: `*.vercel.app`

### Для закрытого проекта:
- ⚠️ **Оставьте** защиту включенной
- ⚠️ Используйте Preview URLs для тестирования
- ⚠️ Или добавьте IP в allowlist

---

## ✅ После отключения защиты:

### Проверьте доступность:
```bash
curl -I https://fit-lead-test-assignment.vercel.app
# HTTP/1.1 200 OK ✅
```

### Откройте в браузере:
```
https://fit-lead-test-assignment.vercel.app
```

### Тестируйте через Playwright:
Теперь можно запускать автотесты!

---

**Следующий шаг:** Отключите защиту в Vercel Settings и попробуйте снова!
