# 🏗️ Architecture & Design System

## 📍 Source of Truth: Single vs Multiple Files

### **Decision: `app/globals.css` is the Single Source of Truth**

**Why?**

1. **Tailwind CSS v4 Integration**
   - Tailwind v4 reads tokens directly from `@theme` directive in CSS
   - No build step needed - tokens are available immediately
   - Direct mapping: CSS variables → Tailwind classes

2. **Simplicity**
   - One file to maintain
   - No synchronization scripts needed
   - Changes apply instantly in development

3. **Pragmatic Approach**
   - Project timeline doesn't allow for Style Dictionary setup
   - No need for complex token transformation
   - Focus on delivery, not perfect architecture

---

## 📂 File Structure

```
app/
  globals.css          ← 📍 SOURCE OF TRUTH (all design tokens)
  
docs/
  design-tokens.json   ← 📋 Documentation (JSON format)
  TOKENS.md            ← 📖 Human-readable reference
  TOKENS-AUDIT.md      ← 🔍 Compliance audit report
  ARCHITECTURE.md      ← 🏗️ This file
  
components/
  Button.tsx           ← Uses tokens via Tailwind classes
  Card.tsx
  Footer.tsx
  sections/
    Hero.tsx
    Benefits.tsx
    CTA.tsx
```

---

## 🔄 Token Workflow

### **When changing tokens:**

1. **Edit** `app/globals.css` (source of truth)
2. **Sync** `docs/design-tokens.json` (manual)
3. **Update** `docs/TOKENS.md` if needed
4. **Test** components in Storybook/browser
5. **Commit** with message: `docs(tokens): update [what changed]`

### **Example:**

```bash
# 1. Edit globals.css
vim app/globals.css

# 2. Sync JSON
# (manually copy values to design-tokens.json)

# 3. Test
npm run dev

# 4. Commit
git add app/globals.css docs/design-tokens.json
git commit -m "docs(tokens): update primary color to #00484F"
```

---

## 🎯 Design Tokens Categories

### **Colors**
- Brand (primary, accent)
- Semantic (background, surface, text, border)
- Interactive (hover, focus states)
- Status (success, warning, danger, info)

### **Typography**
- Font families (sans, mono)
- Font sizes (xs → 4xl)
- Font weights (normal, medium, semibold, bold)
- Line heights (tight, base, relaxed)

### **Spacing**
- Scale: 8px, 16px, 24px, 32px, 48px, 64px
- Mapped to: xs, sm, md, lg, xl, 2xl

### **Border Radius**
- Scale: 4px, 6px, 8px, 10px, 32px, 9999px (pill)
- Mapped to: sm, md, lg, xl, 2xl, full

### **Shadows**
- Elevation: sm, md, lg
- Focus ring: focus

### **Breakpoints** (responsive design)
- xs: 375px (mobile portrait) ← задание
- sm: 640px (mobile landscape)
- md: 768px (tablet) ← задание
- lg: 1024px (small desktop)
- xl: 1440px (desktop) ← задание
- 2xl: 1920px (large desktop)

### **Z-Index**
- Layering: base, dropdown, sticky, fixed, modal, popover, tooltip

---

## 🔧 Usage in Components

### **Tailwind Classes (preferred)**

```tsx
// Colors
<div className="bg-primary text-white">Primary button</div>
<div className="bg-accent">Accent badge</div>

// Typography
<h1 className="text-4xl font-bold">Heading</h1>
<p className="text-base">Body text</p>

// Spacing
<div className="p-lg gap-md">Content</div>

// Border Radius
<button className="rounded-full">Pill button</button>

// Shadows
<div className="shadow-md">Card</div>

// Responsive
<div className="text-sm md:text-base xl:text-lg">
  Responsive text
</div>
```

### **CSS Variables (when needed)**

```tsx
// Custom styles
<div className="text-[--color-text-primary]">
  Custom text color
</div>

<div style={{ 
  background: 'var(--gradient-brand)',
  padding: 'var(--spacing-lg)'
}}>
  Custom gradient
</div>
```

---

## 📊 Compliance with CONTRACT-TOKENS-001.yml

### **Current Status: 88.9% (8/9 categories)**

| Category | Status | Notes |
|----------|--------|-------|
| Colors | ✅ 100% | Complete |
| Typography | ✅ 100% | Complete |
| Spacing | ✅ 100% | Complete |
| Border Radius | ✅ 100% | Complete |
| Shadows | ✅ 100% | Complete |
| Breakpoints | ✅ 100% | Added |
| Z-Index | ✅ 100% | Added |
| Metadata | ✅ 100% | Added |
| JSON Schema | ❌ 0% | Not implemented |

**Missing:**
- `schemas/tokens.schema.json` - JSON Schema for validation
- Validation scripts (detect-circular-refs.js, validate-schema.js)
- Traceability matrix (CSV)

**Reason:** Time constraints - focus on delivery over perfect compliance

---

## 🎨 Design Principles

1. **No Pure Grays**
   - All grays have warm or cool undertones
   - Surface: cool blue-gray (#F5F7FA)
   - Text secondary: warm gray (#5A5A5A)

2. **High Contrast**
   - Text on colored backgrounds must be readable (WCAG AA)
   - Text on accent (#FBEA1B): almost black (#0A0A0A)
   - Text on primary (#00484F): white (#FFFFFF)

3. **8px Spacing Grid**
   - All spacing values are multiples of 8px
   - Ensures visual consistency

4. **Pill Buttons**
   - Buttons use `rounded-full` (9999px)
   - Modern, friendly appearance

5. **Responsive Breakpoints**
   - Match assignment requirements: 375px, 768px, 1440px
   - Extended with standard breakpoints for completeness

---

## 🚀 Future Improvements

### **Phase 2: Style Dictionary Integration**

If project grows, consider:

1. **Setup Style Dictionary**
   ```bash
   npm install style-dictionary
   ```

2. **Change workflow:**
   ```
   design-tokens.json (source)
       ↓ [style-dictionary build]
   globals.css (generated)
       ↓ [Tailwind v4]
   Compiled CSS
   ```

3. **Benefits:**
   - Automatic generation of CSS, JS, iOS, Android tokens
   - No manual synchronization
   - Better traceability

### **Phase 3: Validation & Testing**

1. Create `schemas/tokens.schema.json`
2. Add validation scripts
3. Create traceability matrix
4. Add visual regression tests

---

## 📝 Notes

- **Lint warnings** about `@theme` and missing schema are **expected**
  - `@theme` is Tailwind v4 syntax (not standard CSS)
  - Schema file intentionally not created (time constraints)
  
- **Contract compliance** is 88.9% - acceptable for MVP
  - Missing parts are documentation/tooling, not functionality
  
- **Pragmatic over perfect** - delivery is priority

---

**Last Updated:** 2025-10-04  
**Author:** evgeny.sokolov
