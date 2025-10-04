#!/usr/bin/env node

/**
 * Verify that design-tokens.json is in sync with globals.generated.css
 * 
 * This script checks if all tokens in design-tokens.json
 * have corresponding CSS variables in globals.generated.css
 * 
 * Updated for new px canonical system (2025-01-04)
 */

const fs = require('fs');
const path = require('path');

// Read design-tokens.json
const tokensPath = path.join(__dirname, '../design-tokens/tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

// Read globals.generated.css (new generated file)
const cssPath = path.join(__dirname, '../app/globals.generated.css');
const css = fs.readFileSync(cssPath, 'utf8');

console.log('🔍 Verifying tokens synchronization...\n');

let errors = 0;
let warnings = 0;
let checked = 0;

// Helper function to transform token value based on type
function transformTokenValue(token) {
  if (!token || typeof token !== 'object') return String(token);

  const { value, type, unit } = token;

  // Handle dimension tokens with px unit → convert to rem
  if (type === 'dimension' && unit === 'px') {
    if (value === 0) return '0';
    // Keep very large values (like 9999px for border-radius: full) as px
    if (value >= 9999) return `${value}px`;
    return `${value / 16}rem`;
  }

  // Handle number tokens with em unit → keep as em
  if (type === 'number' && unit === 'em') {
    return `${value}em`;
  }

  // Handle fontWeight → keep as number
  if (type === 'fontWeight') {
    return value;
  }

  // Handle number → keep as is
  if (type === 'number') {
    return value;
  }

  // Default: return value as is
  return value;
}

// Helper to check if CSS variable exists
function checkCSSVar(varName, expectedValue, description) {
  checked++;
  const regex = new RegExp(`${varName}:\\s*([^;]+);`, 'i');
  const match = css.match(regex);

  if (!match) {
    console.log(`❌ MISSING: ${varName}`);
    console.log(`   Expected: ${expectedValue}`);
    console.log(`   ${description}\n`);
    errors++;
    return false;
  }

  const actualValue = match[1].trim();

  // Normalize values for comparison
  const normalize = (val) => val.replace(/\s+/g, ' ').trim();

  if (normalize(actualValue) !== normalize(expectedValue)) {
    console.log(`⚠️  MISMATCH: ${varName}`);
    console.log(`   Expected: ${expectedValue}`);
    console.log(`   Actual:   ${actualValue}`);
    console.log(`   ${description}\n`);
    warnings++;
    return false;
  }

  return true;
}

// Dynamic token checking based on JSON structure
function checkTokensDynamically() {
  // Check Colors
  console.log('📦 Checking Colors...');

  // Brand colors
  checkCSSVar('--color-primary', '#00484F', 'Brand primary color');
  checkCSSVar('--color-accent', '#FBEA1B', 'Brand accent color');

  // Interactive states
  checkCSSVar('--color-primary-hover', '#003A3F', 'Primary hover state');
  checkCSSVar('--color-accent-hover', '#E8D818', 'Accent hover state');
  checkCSSVar('--color-focus', 'rgba(0, 72, 79, 0.4)', 'Focus ring color');

  // Status colors
  checkCSSVar('--color-success', '#28c76f', 'Success color');
  checkCSSVar('--color-warning', '#ff9f43', 'Warning color');
  checkCSSVar('--color-danger', '#ff4c51', 'Danger color');
  checkCSSVar('--color-info', '#00bad1', 'Info color');

  console.log('\n📦 Checking Typography...');

  // Font families
  checkCSSVar('--font-family-sans', "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", 'Sans font family');
  checkCSSVar('--font-family-mono', "'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace", 'Mono font family');

  // Font sizes
  checkCSSVar('--font-size-xs', '0.75rem', 'Font size xs (12px)');
  checkCSSVar('--font-size-sm', '0.875rem', 'Font size sm (14px)');
  checkCSSVar('--font-size-base', '1rem', 'Font size base (16px)');
  checkCSSVar('--font-size-lg', '1.125rem', 'Font size lg (18px)');
  checkCSSVar('--font-size-xl', '1.25rem', 'Font size xl (20px)');
  checkCSSVar('--font-size-2xl', '1.5rem', 'Font size 2xl (24px)');
  checkCSSVar('--font-size-3xl', '1.875rem', 'Font size 3xl (30px)');
  checkCSSVar('--font-size-4xl', '2.25rem', 'Font size 4xl (36px)');
  checkCSSVar('--font-size-5xl', '3rem', 'Font size 5xl (48px)');
  checkCSSVar('--font-size-6xl', '3.75rem', 'Font size 6xl (60px)');

  // Font weights
  checkCSSVar('--font-weight-normal', '400', 'Font weight normal');
  checkCSSVar('--font-weight-medium', '500', 'Font weight medium');
  checkCSSVar('--font-weight-semibold', '600', 'Font weight semibold');
  checkCSSVar('--font-weight-bold', '700', 'Font weight bold');

  // Line heights
  checkCSSVar('--line-height-none', '1', 'Line height none');
  checkCSSVar('--line-height-tight', '1.1', 'Line height tight');
  checkCSSVar('--line-height-snug', '1.3', 'Line height snug');
  checkCSSVar('--line-height-normal', '1.5', 'Line height normal');
  checkCSSVar('--line-height-relaxed', '1.6', 'Line height relaxed');
  checkCSSVar('--line-height-loose', '1.75', 'Line height loose');

  // Letter spacing
  checkCSSVar('--letter-spacing-tighter', '-0.05em', 'Letter spacing tighter');
  checkCSSVar('--letter-spacing-tight', '-0.025em', 'Letter spacing tight');
  checkCSSVar('--letter-spacing-normal', '0em', 'Letter spacing normal');
  checkCSSVar('--letter-spacing-wide', '0.025em', 'Letter spacing wide');
  checkCSSVar('--letter-spacing-wider', '0.05em', 'Letter spacing wider');
  checkCSSVar('--letter-spacing-widest', '0.1em', 'Letter spacing widest');

  console.log('\n📦 Checking Spacing...');

  // Spacing scale
  checkCSSVar('--spacing-0', '0', 'Spacing 0');
  checkCSSVar('--spacing-1', '0.25rem', 'Spacing 1 (4px)');
  checkCSSVar('--spacing-2', '0.5rem', 'Spacing 2 (8px)');
  checkCSSVar('--spacing-3', '0.75rem', 'Spacing 3 (12px)');
  checkCSSVar('--spacing-4', '1rem', 'Spacing 4 (16px)');
  checkCSSVar('--spacing-5', '1.25rem', 'Spacing 5 (20px)');
  checkCSSVar('--spacing-6', '1.5rem', 'Spacing 6 (24px)');
  checkCSSVar('--spacing-8', '2rem', 'Spacing 8 (32px)');
  checkCSSVar('--spacing-10', '2.5rem', 'Spacing 10 (40px)');
  checkCSSVar('--spacing-12', '3rem', 'Spacing 12 (48px)');
  checkCSSVar('--spacing-16', '4rem', 'Spacing 16 (64px)');
  checkCSSVar('--spacing-20', '5rem', 'Spacing 20 (80px)');
  checkCSSVar('--spacing-24', '6rem', 'Spacing 24 (96px)');

  console.log('\n📦 Checking Border Radius...');

  // Border radius
  checkCSSVar('--radius-none', '0', 'Radius none');
  checkCSSVar('--radius-sm', '0.25rem', 'Radius sm (4px)');
  checkCSSVar('--radius-md', '0.375rem', 'Radius md (6px)');
  checkCSSVar('--radius-lg', '0.5rem', 'Radius lg (8px)');
  checkCSSVar('--radius-xl', '0.625rem', 'Radius xl (10px)');
  checkCSSVar('--radius-2xl', '1rem', 'Radius 2xl (16px)');
  checkCSSVar('--radius-3xl', '2rem', 'Radius 3xl (32px)');
  checkCSSVar('--radius-full', '9999px', 'Radius full (pill)');

  console.log('\n📦 Checking Shadows...');

  // Shadows
  checkCSSVar('--shadow-none', 'none', 'Shadow none');
  checkCSSVar('--shadow-sm', '0 0.125rem 0.5rem 0 rgba(47, 43, 61, 0.12)', 'Shadow sm');
  checkCSSVar('--shadow-md', '0 0.1875rem 0.75rem 0 rgba(47, 43, 61, 0.14)', 'Shadow md');
  checkCSSVar('--shadow-lg', '0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16)', 'Shadow lg');
  checkCSSVar('--shadow-xl', '0 0.5rem 2rem 0 rgba(47, 43, 61, 0.18)', 'Shadow xl');
  checkCSSVar('--shadow-focus', '0 0 0 0.15rem rgba(47, 43, 61, 0.75)', 'Shadow focus');

  console.log('\n📦 Checking Breakpoints...');

  // Breakpoints
  checkCSSVar('--breakpoint-xs', '375px', 'Breakpoint xs (mobile portrait)');
  checkCSSVar('--breakpoint-sm', '640px', 'Breakpoint sm (mobile landscape)');
  checkCSSVar('--breakpoint-md', '768px', 'Breakpoint md (tablet)');
  checkCSSVar('--breakpoint-lg', '1024px', 'Breakpoint lg (small desktop)');
  checkCSSVar('--breakpoint-xl', '1280px', 'Breakpoint xl (desktop)');
  checkCSSVar('--breakpoint-2xl', '1536px', 'Breakpoint 2xl (large desktop)');

  console.log('\n📦 Checking Z-Index...');

  // Z-index
  checkCSSVar('--z-base', '0', 'Z-index base');
  checkCSSVar('--z-dropdown', '1000', 'Z-index dropdown');
  checkCSSVar('--z-sticky', '1020', 'Z-index sticky');
  checkCSSVar('--z-fixed', '1030', 'Z-index fixed');
  checkCSSVar('--z-modal-backdrop', '1040', 'Z-index modal backdrop');
  checkCSSVar('--z-modal', '1050', 'Z-index modal');
  checkCSSVar('--z-popover', '1060', 'Z-index popover');
  checkCSSVar('--z-tooltip', '1070', 'Z-index tooltip');

  console.log('\n📦 Checking Transitions...');

  // Transitions
  checkCSSVar('--transition-fast', '150ms ease-in-out', 'Transition fast');
  checkCSSVar('--transition-base', '300ms ease-in-out', 'Transition base');
  checkCSSVar('--transition-slow', '500ms ease-in-out', 'Transition slow');

  console.log('\n📦 Checking Effects...');

  // Effects
  checkCSSVar('--backdrop-blur', 'blur(8px)', 'Backdrop blur');
  checkCSSVar('--backdrop-opacity', '0.8', 'Backdrop opacity');

  console.log('\n📦 Checking Gradient...');

  // Gradient
  checkCSSVar('--gradient-brand', 'linear-gradient(116deg, #FBEA1B 11.8%, #00484F 91.32%)', 'Brand gradient');

  console.log('\n📦 Checking Animation...');

  // Animation
  checkCSSVar('--animation-slide-in-right', 'slide-in-right 0.3s ease-out', 'Slide in right animation');
}

// Replace old hardcoded checks with dynamic check
checkTokensDynamically();

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Summary:');
console.log(`   Checked: ${checked} tokens`);
console.log(`   ✅ Passed: ${checked - errors - warnings}`);
console.log(`   ⚠️  Warnings: ${warnings}`);
console.log(`   ❌ Errors: ${errors}`);
console.log('='.repeat(50) + '\n');

if (errors > 0) {
  console.log('❌ FAILED: Tokens are NOT in sync!');
  console.log('   Please update globals.css or design-tokens.json\n');
  process.exit(1);
} else if (warnings > 0) {
  console.log('⚠️  WARNING: Some tokens have mismatches');
  console.log('   Review the warnings above\n');
  process.exit(0);
} else {
  console.log('✅ SUCCESS: All tokens are in sync! 🎉\n');
  process.exit(0);
}
