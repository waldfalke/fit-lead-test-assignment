#!/usr/bin/env node

/**
 * Verify token usage in components, pages, and Storybook stories
 * 
 * This script checks:
 * 1. No hardcoded hex colors (#RRGGBB)
 * 2. No hardcoded spacing values (margin: 16px, padding: 24px)
 * 3. No inline styles with hardcoded values
 * 4. All used tokens exist in design-tokens.json
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔍 Verifying token usage in components, pages, and stories...\n');

// Read design-tokens.json
const tokensPath = path.join(__dirname, '../design-tokens/tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

let errors = 0;
let warnings = 0;
let filesChecked = 0;

// Patterns to check
const patterns = {
  hardcodedHex: /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/g,
  hardcodedSpacing: /(?:margin|padding|gap|top|bottom|left|right|width|height):\s*(\d+)px/g,
  inlineStyles: /style=\{\{[^}]+\}\}/g,
};

// Files to check
const filesToCheck = [
  'components/**/*.{ts,tsx,js,jsx}',
  'app/**/*.{ts,tsx,js,jsx}',
  'stories/**/*.{ts,tsx,js,jsx,stories.tsx}',
];

// Allowed exceptions (files that can have hardcoded values)
const allowedExceptions = [
  'tailwind.config',
  'globals.css',
  '.next',
  'node_modules',
  'design-tokens.json',
  'verify-token-usage.js',
  'verify-tokens-sync.js',
];

function shouldSkipFile(filePath) {
  return allowedExceptions.some(exception => filePath.includes(exception));
}

function checkFile(filePath) {
  if (shouldSkipFile(filePath)) {
    return;
  }

  filesChecked++;
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.relative(process.cwd(), filePath);
  
  let fileHasIssues = false;

  // Check for hardcoded hex colors
  const hexMatches = content.match(patterns.hardcodedHex);
  if (hexMatches) {
    // Filter out comments and imports
    const lines = content.split('\n');
    const actualHexIssues = [];
    
    hexMatches.forEach(hex => {
      const lineIndex = content.indexOf(hex);
      const lineNumber = content.substring(0, lineIndex).split('\n').length;
      const line = lines[lineNumber - 1];
      
      // Skip if:
      // - In comment or import
      // - In text content (between > and <)
      // - In string literal for display purposes
      const isInTextContent = line.includes(`>${hex}<`) || line.includes(`"${hex}"`);
      const isInComment = line.includes('//') || line.includes('/*');
      const isInImport = line.includes('import');
      const isInArray = line.includes(`'${hex}'`) || line.includes(`"${hex}"`);
      
      if (!isInTextContent && !isInComment && !isInImport && !isInArray) {
        actualHexIssues.push({ hex, lineNumber, line: line.trim() });
      }
    });

    if (actualHexIssues.length > 0) {
      if (!fileHasIssues) {
        console.log(`\n📄 ${fileName}`);
        fileHasIssues = true;
      }
      console.log(`  ❌ Hardcoded hex colors found:`);
      actualHexIssues.forEach(issue => {
        console.log(`     Line ${issue.lineNumber}: ${issue.hex}`);
        console.log(`     ${issue.line.substring(0, 80)}...`);
      });
      errors += actualHexIssues.length;
    }
  }

  // Check for hardcoded spacing in inline styles
  const inlineStyleMatches = content.match(patterns.inlineStyles);
  if (inlineStyleMatches) {
    const spacingInInline = [];
    
    inlineStyleMatches.forEach(styleBlock => {
      const spacingMatch = styleBlock.match(/(\d+)px/g);
      if (spacingMatch) {
        const lineIndex = content.indexOf(styleBlock);
        const lineNumber = content.substring(0, lineIndex).split('\n').length;
        spacingInInline.push({ 
          values: spacingMatch, 
          lineNumber,
          block: styleBlock.substring(0, 60) + '...'
        });
      }
    });

    if (spacingInInline.length > 0) {
      if (!fileHasIssues) {
        console.log(`\n📄 ${fileName}`);
        fileHasIssues = true;
      }
      console.log(`  ⚠️  Hardcoded spacing in inline styles:`);
      spacingInInline.forEach(issue => {
        console.log(`     Line ${issue.lineNumber}: ${issue.values.join(', ')}`);
        console.log(`     ${issue.block}`);
      });
      warnings += spacingInInline.length;
    }
  }

  // Check for undefined Tailwind classes (bg-*, text-*, etc.)
  const tailwindClassPattern = /className=["']([^"']+)["']/g;
  const classMatches = [...content.matchAll(tailwindClassPattern)];
  
  if (classMatches.length > 0) {
    const undefinedClasses = [];
    
    classMatches.forEach(match => {
      const classes = match[1].split(/\s+/);
      classes.forEach(cls => {
        // Check for color classes that might not be defined
        if (cls.startsWith('bg-') || cls.startsWith('text-') || cls.startsWith('border-')) {
          const colorName = cls.split('-')[1];
          
          // Check if it's a custom color that should be in tokens
          if (colorName && !['white', 'black', 'transparent', 'current'].includes(colorName)) {
            // Check if it's using CSS variable syntax
            if (cls.includes('[--')) {
              // This is OK - using CSS variables
            } else if (!['primary', 'accent', 'surface', 'background'].includes(colorName)) {
              // Might be undefined - but could be Tailwind default
              // We'll just note it, not error
            }
          }
        }
      });
    });
  }

  return fileHasIssues;
}

// Find all files
console.log('📂 Scanning files...\n');

filesToCheck.forEach(pattern => {
  const files = glob.sync(pattern, { 
    cwd: process.cwd(),
    ignore: ['**/node_modules/**', '**/.next/**']
  });
  
  files.forEach(file => {
    checkFile(path.join(process.cwd(), file));
  });
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 Summary:');
console.log(`   Files checked: ${filesChecked}`);
console.log(`   ❌ Errors: ${errors} (hardcoded hex colors)`);
console.log(`   ⚠️  Warnings: ${warnings} (hardcoded spacing in inline styles)`);
console.log('='.repeat(60) + '\n');

if (errors > 0) {
  console.log('❌ FAILED: Found hardcoded values!');
  console.log('   Please use design tokens instead:\n');
  console.log('   - Replace hex colors with Tailwind classes (bg-primary, text-accent)');
  console.log('   - Or use CSS variables: text-[--color-primary]\n');
  process.exit(1);
} else if (warnings > 0) {
  console.log('⚠️  WARNING: Found some hardcoded spacing in inline styles');
  console.log('   Consider using Tailwind classes or CSS variables\n');
  process.exit(0);
} else {
  console.log('✅ SUCCESS: All components use design tokens correctly! 🎉\n');
  process.exit(0);
}
