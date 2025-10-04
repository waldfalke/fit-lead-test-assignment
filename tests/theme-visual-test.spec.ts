import { test, expect } from '@playwright/test';

/**
 * Полная проверка страницы в светлой и темной темах
 * Тестирует все компоненты, блоки и элементы
 */

test.describe('Полная проверка тем', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test.describe('Светлая тема (Light Mode)', () => {
    test('должна загрузить страницу в светлой теме по умолчанию', async ({ page }) => {
      // Проверяем, что класс dark отсутствует
      const htmlElement = page.locator('html');
      await expect(htmlElement).not.toHaveClass(/dark/);
      
      // Проверяем цвет фона body
      const bodyBg = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });
      expect(bodyBg).toBe('rgb(255, 255, 255)'); // #FFFFFF
    });

    test('Header - светлая тема', async ({ page }) => {
      const header = page.locator('header');
      
      // Проверяем наличие элементов
      await expect(header.locator('img[alt="Fit&Lead"]')).toBeVisible();
      await expect(header.getByText('Главная')).toBeVisible();
      await expect(header.getByText('UI Kit')).toBeVisible();
      await expect(header.getByText('Design System')).toBeVisible();
      
      // Проверяем кнопки переключения темы
      await expect(header.getByLabel('Switch to light theme')).toBeVisible();
      await expect(header.getByLabel('Switch to dark theme')).toBeVisible();
      
      // Проверяем цвета
      const headerBg = await page.evaluate(() => {
        const header = document.querySelector('header');
        return window.getComputedStyle(header!).backgroundColor;
      });
      expect(headerBg).toContain('rgba(255, 255, 255'); // bg-background/80
    });

    test('Hero Section - светлая тема', async ({ page }) => {
      const hero = page.locator('main > section').first();
      
      // Проверяем заголовок
      await expect(hero.locator('h1')).toContainText('Первая партнёрская CPA сеть');
      
      // Проверяем подзаголовок
      await expect(hero.locator('p').first()).toContainText('Монетизируйте трафик');
      
      // Проверяем CTA кнопку
      const ctaButton = hero.getByText('Начать зарабатывать');
      await expect(ctaButton).toBeVisible();
      await expect(ctaButton).toHaveAttribute('href', '#cta');
      
      // Проверяем градиентный фон
      const heroSection = await page.locator('main > section').first();
      const heroBg = await heroSection.evaluate((el) => {
        return window.getComputedStyle(el).backgroundImage;
      });
      expect(heroBg).toContain('gradient');
      
      // Проверяем scroll indicator
      await expect(hero.getByText('Прокрутите вниз')).toBeVisible();
    });

    test('Benefits Section - светлая тема', async ({ page }) => {
      const benefits = page.locator('section').filter({ hasText: 'Почему выбирают Fit&Lead' });
      
      // Проверяем заголовок
      await expect(benefits.locator('h2')).toContainText('Почему выбирают Fit&Lead');
      
      // Проверяем подзаголовок
      await expect(benefits.locator('p').first()).toContainText('идеальные условия');
      
      // Проверяем 4 карточки преимуществ
      const cards = benefits.locator('[class*="flex"][class*="flex-col"]').filter({ 
        has: page.locator('h3') 
      });
      await expect(cards).toHaveCount(4);
      
      // Проверяем содержимое карточек
      await expect(benefits.locator('h3').nth(0)).toContainText('Высокие выплаты');
      await expect(benefits.locator('h3').nth(1)).toContainText('Поддержка 24/7');
      await expect(benefits.locator('h3').nth(2)).toContainText('Быстрые выплаты');
      await expect(benefits.locator('h3').nth(3)).toContainText('Удобные инструменты');
      
      // Проверяем наличие иконок
      const icons = benefits.locator('svg');
      await expect(icons).toHaveCount(4);
      
      // Проверяем фон секции
      const sectionBg = await benefits.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      expect(sectionBg).toBe('rgb(255, 255, 255)'); // bg-background
    });

    test('CTA Section - светлая тема', async ({ page }) => {
      const cta = page.locator('section').filter({ hasText: 'Готовы начать зарабатывать' });
      
      // Проверяем заголовок
      await expect(cta.locator('h2')).toContainText('Готовы начать зарабатывать?');
      
      // Проверяем описание
      await expect(cta.locator('p')).toContainText('Присоединяйтесь к тысячам партнёров');
      
      // Проверяем кнопку
      const button = cta.getByText('Зарегистрироваться');
      await expect(button).toBeVisible();
      await expect(button).toHaveAttribute('href', '/signup');
      
      // Проверяем фон (gradient)
      const ctaBg = await cta.evaluate((el) => {
        return window.getComputedStyle(el).backgroundImage;
      });
      expect(ctaBg).toContain('gradient');
    });

    test('Footer - светлая тема', async ({ page }) => {
      const footer = page.locator('footer');
      
      // Проверяем навигацию
      await expect(footer.locator('h3').filter({ hasText: 'Продукт' })).toBeVisible();
      await expect(footer.locator('h3').filter({ hasText: 'Ресурсы' })).toBeVisible();
      
      // Проверяем ссылки навигации
      await expect(footer.getByRole('link', { name: 'Возможности' })).toBeVisible();
      await expect(footer.getByRole('link', { name: 'Тарифы' })).toBeVisible();
      await expect(footer.getByRole('link', { name: 'UI Kit' })).toBeVisible();
      
      // Проверяем контакты
      await expect(footer.locator('h3').filter({ hasText: 'Контакты' })).toBeVisible();
      await expect(footer.getByText('hello@fit-lead.com')).toBeVisible();
      await expect(footer.getByText('@fitlead')).toBeVisible();
      
      // Проверяем логотип
      await expect(footer.locator('img[alt="Fit&Lead"]')).toBeVisible();
      
      // Проверяем копирайт
      await expect(footer.getByText(/© 2025 ООО «ЛИДЕРЫ МНЕНИЙ»/)).toBeVisible();
      
      // Проверяем соцсети
      await expect(footer.getByText('Наши соцсети')).toBeVisible();
      await expect(footer.locator('img[alt="VKontakte"]')).toBeVisible();
      await expect(footer.locator('img[alt="Telegram"]')).toBeVisible();
      
      // Проверяем фон
      const footerBg = await footer.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      expect(footerBg).toBe('rgb(245, 247, 250)'); // surface color
    });
  });

  test.describe('Темная тема (Dark Mode)', () => {
    test.beforeEach(async ({ page }) => {
      // Включаем темную тему через localStorage
      await page.evaluate(() => {
        localStorage.setItem('fit-lead-theme', 'dark');
      });
      await page.reload();
      
      // Ждем применения темы
      await page.waitForTimeout(500);
    });

    test('должна загрузить страницу в темной теме', async ({ page }) => {
      // Проверяем, что класс dark присутствует
      const htmlElement = page.locator('html');
      await expect(htmlElement).toHaveClass(/dark/);
      
      // Проверяем цвет фона body
      const bodyBg = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });
      expect(bodyBg).toBe('rgb(10, 10, 10)'); // #0A0A0A - dark background
    });

    test('Header - темная тема', async ({ page }) => {
      const header = page.locator('header');
      
      // Проверяем элементы все еще видны
      await expect(header.locator('img[alt="Fit&Lead"]')).toBeVisible();
      await expect(header.getByText('Главная')).toBeVisible();
      
      // Проверяем цвет фона
      const headerBg = await page.evaluate(() => {
        const header = document.querySelector('header');
        return window.getComputedStyle(header!).backgroundColor;
      });
      expect(headerBg).toContain('rgba(10, 10, 10'); // dark bg with opacity
      
      // Проверяем цвет текста
      const textColor = await page.evaluate(() => {
        const link = document.querySelector('header nav a');
        return window.getComputedStyle(link!).color;
      });
      expect(textColor).toBe('rgb(245, 245, 245)'); // text-primary-dark
    });

    test('Benefits Section - темная тема', async ({ page }) => {
      const benefits = page.locator('section').filter({ hasText: 'Почему выбирают Fit&Lead' });
      
      // Проверяем фон секции
      const sectionBg = await benefits.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      expect(sectionBg).toBe('rgb(10, 10, 10)'); // dark background
      
      // Проверяем цвет заголовка
      const h2Color = await benefits.locator('h2').evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      expect(h2Color).toBe('rgb(245, 245, 245)'); // text-primary-dark
      
      // Проверяем карточки
      const cards = benefits.locator('[class*="flex"][class*="flex-col"]').filter({ 
        has: page.locator('h3') 
      });
      await expect(cards).toHaveCount(4);
      
      // Проверяем фон карточек
      const cardBg = await cards.first().evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      expect(cardBg).toBe('rgb(26, 26, 26)'); // surface-dark
    });

    test('Footer - темная тема', async ({ page }) => {
      const footer = page.locator('footer');
      
      // Проверяем все элементы видны
      await expect(footer.locator('h3').filter({ hasText: 'Продукт' })).toBeVisible();
      await expect(footer.getByText('hello@fit-lead.com')).toBeVisible();
      
      // Проверяем фон
      const footerBg = await footer.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      expect(footerBg).toBe('rgb(26, 26, 26)'); // surface-dark
      
      // Проверяем цвет текста
      const textColor = await footer.locator('h3').first().evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      expect(textColor).toBe('rgb(245, 245, 245)'); // text-primary-dark
      
      // Проверяем secondary text
      const linkColor = await footer.locator('a').first().evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      expect(linkColor).toBe('rgb(170, 170, 170)'); // text-secondary-dark
    });

    test('CTA Section - темная тема', async ({ page }) => {
      const cta = page.locator('section').filter({ hasText: 'Готовы начать зарабатывать' });
      
      // Проверяем элементы
      await expect(cta.locator('h2')).toBeVisible();
      await expect(cta.getByText('Зарегистрироваться')).toBeVisible();
      
      // Фон остается градиентным (не зависит от темы)
      const ctaBg = await cta.evaluate((el) => {
        return window.getComputedStyle(el).backgroundImage;
      });
      expect(ctaBg).toContain('gradient');
    });
  });

  test.describe('Переключение темы', () => {
    test('должно переключать тему по клику на ThemeToggle', async ({ page }) => {
      // Начинаем со светлой темы
      const html = page.locator('html');
      await expect(html).not.toHaveClass(/dark/);
      
      // Кликаем на кнопку темной темы
      await page.getByLabel('Switch to dark theme').click();
      
      // Ждем применения
      await page.waitForTimeout(300);
      
      // Проверяем класс dark
      await expect(html).toHaveClass(/dark/);
      
      // Проверяем изменение цвета фона
      const bodyBg = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });
      expect(bodyBg).toBe('rgb(10, 10, 10)');
      
      // Переключаем обратно на светлую
      await page.getByLabel('Switch to light theme').click();
      await page.waitForTimeout(300);
      
      // Проверяем возврат к светлой теме
      await expect(html).not.toHaveClass(/dark/);
      const bodyBgLight = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });
      expect(bodyBgLight).toBe('rgb(255, 255, 255)');
    });

    test('должно сохранять выбор темы в localStorage', async ({ page }) => {
      // Переключаем на темную
      await page.getByLabel('Switch to dark theme').click();
      await page.waitForTimeout(300);
      
      // Проверяем localStorage
      const storedTheme = await page.evaluate(() => {
        return localStorage.getItem('fit-lead-theme');
      });
      expect(storedTheme).toBe('dark');
      
      // Перезагружаем страницу
      await page.reload();
      await page.waitForTimeout(500);
      
      // Проверяем, что тема сохранилась
      const html = page.locator('html');
      await expect(html).toHaveClass(/dark/);
    });

    test('должно плавно переключать цвета (transitions)', async ({ page }) => {
      // Проверяем наличие transition на body
      const hasTransition = await page.evaluate(() => {
        const style = window.getComputedStyle(document.body);
        return style.transition.includes('background-color') && style.transition.includes('color');
      });
      expect(hasTransition).toBeTruthy();
    });
  });

  test.describe('Responsive Design', () => {
    test('должен корректно отображаться на mobile (375px)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Проверяем мобильное меню
      const menuButton = page.locator('button').filter({ has: page.locator('svg') }).first();
      await expect(menuButton).toBeVisible();
      
      // Hero должен быть центрирован
      const hero = page.locator('main > section').first();
      const heroText = hero.locator('div').first();
      const textAlign = await heroText.evaluate((el) => {
        return window.getComputedStyle(el).textAlign;
      });
      expect(textAlign).toBe('center');
    });

    test('должен корректно отображаться на tablet (768px)', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      
      // Desktop навигация должна быть видна
      const nav = page.locator('header nav[aria-label="Main navigation"]');
      await expect(nav).toBeVisible();
    });

    test('должен корректно отображаться на desktop (1920px)', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      // Все элементы должны быть видны
      await expect(page.locator('header nav[aria-label="Main navigation"]')).toBeVisible();
      
      // Hero должен иметь 2 колонки
      const hero = page.locator('main > section').first();
      const gridCols = await hero.locator('> div > div').first().evaluate((el) => {
        return window.getComputedStyle(el).gridTemplateColumns;
      });
      expect(gridCols.split(' ').length).toBe(2);
    });
  });

  test.describe('Accessibility (A11y)', () => {
    test('должен иметь корректные ARIA labels', async ({ page }) => {
      // Header navigation
      await expect(page.locator('nav[aria-label="Main navigation"]')).toBeVisible();
      
      // Theme toggle
      await expect(page.locator('group[aria-label="Theme toggle"]')).toBeVisible();
      await expect(page.getByLabel('Switch to light theme')).toBeVisible();
      await expect(page.getByLabel('Switch to dark theme')).toBeVisible();
      
      // Mobile navigation
      const menuButton = page.locator('button').filter({ has: page.locator('svg') }).first();
      await menuButton.click();
      await expect(page.locator('nav[aria-label="Mobile navigation"]')).toBeVisible();
    });

    test('должен поддерживать keyboard navigation', async ({ page }) => {
      // Tab через навигацию
      await page.keyboard.press('Tab'); // Logo
      await page.keyboard.press('Tab'); // Главная
      
      const focused = await page.evaluate(() => {
        return document.activeElement?.textContent;
      });
      expect(focused).toContain('Главная');
    });

    test('должен иметь правильные heading levels', async ({ page }) => {
      // H1 должен быть один
      const h1s = page.locator('h1');
      await expect(h1s).toHaveCount(1);
      await expect(h1s).toContainText('Первая партнёрская CPA сеть');
      
      // H2 для секций
      const h2s = page.locator('h2');
      await expect(h2s.first()).toContainText('Почему выбирают Fit&Lead');
      
      // H3 для карточек и футера
      const h3s = page.locator('h3');
      await expect(h3s).toHaveCount(8); // 4 benefits + 2 footer nav + 1 contacts + 1 socials
    });
  });

  test.describe('Контраст цветов (WCAG AA)', () => {
    test('светлая тема - проверка контраста текста', async ({ page }) => {
      // Benefits карточки
      const card = page.locator('[class*="flex"][class*="flex-col"]').filter({ 
        has: page.locator('h3') 
      }).first();
      
      const bgColor = await card.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      const textColor = await card.locator('h3').evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      
      // #F5F7FA (surface) и #1A1A1A (text-primary) - контраст должен быть >= 4.5:1
      expect(bgColor).toBe('rgb(245, 247, 250)');
      expect(textColor).toBe('rgb(26, 26, 26)');
    });

    test('темная тема - проверка контраста текста', async ({ page }) => {
      await page.evaluate(() => localStorage.setItem('fit-lead-theme', 'dark'));
      await page.reload();
      await page.waitForTimeout(500);
      
      const card = page.locator('[class*="flex"][class*="flex-col"]').filter({ 
        has: page.locator('h3') 
      }).first();
      
      const bgColor = await card.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      const textColor = await card.locator('h3').evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      
      // #1A1A1A (surface-dark) и #F5F5F5 (text-primary-dark) - контраст должен быть >= 4.5:1
      expect(bgColor).toBe('rgb(26, 26, 26)');
      expect(textColor).toBe('rgb(245, 245, 245)');
    });
  });
});
