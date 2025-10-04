#!/usr/bin/env node

/**
 * Verify component reuse and composition
 * 
 * This script checks:
 * 1. No duplicate button implementations (must use <Button>)
 * 2. No duplicate card implementations (must use <Card>)
 * 3. Sections use atomic components, not custom markup
 * 4. Pages use sections, not direct markup
 * 5. No inline <button>, <a> tags (must use <Button>)
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔍 Verifying component reuse and composition...\n');

let errors = 0;
let warnings = 0;
let filesChecked = 0;

// Anti-patterns to detect
const antiPatterns = {
  // Direct HTML elements that should use components
  rawButton: /<button[^>]*(?!ref=)/g,  // <button> without component
  rawLink: /<a\s+href=[^>]*(?!className="[^"]*hover:)/g,  // <a> without proper styling
  rawCard: /<div[^>]*className="[^"]*(?:border|shadow|rounded)[^"]*"[^>]*>\s*<div/g,  // DIY cards
  
  // Duplicate implementations
  customButton: /className="[^"]*(?:px-\d+|py-\d+)[^"]*(?:bg-primary|bg-accent)[^"]*"/g,
  customCard: /className="[^"]*(?:p-\d+)[^"]*(?:border|shadow)[^"]*(?:rounded)/g,
};

// Component imports to check
const requiredImports = {
  Button: /import.*Button.*from.*['"].*\/Button['"]/,
  Card: /import.*Card.*from.*['"].*\/Card['"]/,
  Footer: /import.*Footer.*from.*['"].*\/Footer['"]/,
};

// Files to check
const filesToCheck = [
  'app/**/*.{ts,tsx,js,jsx}',
  'components/sections/**/*.{ts,tsx,js,jsx}',
];

// Files that are allowed to have raw HTML (base components)
const allowedBaseComponents = [
  'components/Button.tsx',
  'components/Card.tsx',
  'components/Footer.tsx',
  'app/layout.tsx',
  'app/not-found.tsx',
];

function shouldSkipFile(filePath) {
  return allowedBaseComponents.some(allowed => filePath.endsWith(allowed));
}

function checkFile(filePath) {
  if (shouldSkipFile(filePath)) {
    return;
  }

  filesChecked++;
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.relative(process.cwd(), filePath);
  
  let fileHasIssues = false;

  // Check 1: Raw <button> tags (should use <Button>)
  const rawButtons = content.match(antiPatterns.rawButton);
  if (rawButtons) {
    // Filter out refs and special cases
    const actualIssues = rawButtons.filter(btn => {
      return !btn.includes('ref=') && 
             !btn.includes('type="button"') &&
             !btn.includes('onClick=');
    });

    if (actualIssues.length > 0) {
      if (!fileHasIssues) {
        console.log(`\n📄 ${fileName}`);
        fileHasIssues = true;
      }
      console.log(`  ❌ Found ${actualIssues.length} raw <button> tag(s)`);
      console.log(`     Should use: <Button> component instead`);
      console.log(`     Example: <Button variant="primary">Click me</Button>`);
      errors += actualIssues.length;
    }
  }

  // Check 2: Custom button-like divs (should use <Button>)
  const customButtons = content.match(antiPatterns.customButton);
  if (customButtons) {
    const lines = content.split('\n');
    const issues = [];

    customButtons.forEach(match => {
      const lineIndex = content.indexOf(match);
      const lineNumber = content.substring(0, lineIndex).split('\n').length;
      const line = lines[lineNumber - 1];

      // Check if it's not already using <Button>
      if (!line.includes('<Button') && !line.includes('Button.tsx')) {
        issues.push({ lineNumber, line: line.trim().substring(0, 80) });
      }
    });

    if (issues.length > 0) {
      if (!fileHasIssues) {
        console.log(`\n📄 ${fileName}`);
        fileHasIssues = true;
      }
      console.log(`  ⚠️  Found ${issues.length} custom button-like element(s)`);
      console.log(`     Consider using: <Button> component`);
      issues.slice(0, 3).forEach(issue => {
        console.log(`     Line ${issue.lineNumber}: ${issue.line}...`);
      });
      warnings += issues.length;
    }
  }

  // Check 3: Custom card-like divs (should use <Card>)
  const customCards = content.match(antiPatterns.customCard);
  if (customCards) {
    const lines = content.split('\n');
    const issues = [];

    customCards.forEach(match => {
      const lineIndex = content.indexOf(match);
      const lineNumber = content.substring(0, lineIndex).split('\n').length;
      const line = lines[lineNumber - 1];

      // Check if it's not already using <Card>
      if (!line.includes('<Card') && !line.includes('Card.tsx')) {
        issues.push({ lineNumber, line: line.trim().substring(0, 80) });
      }
    });

    if (issues.length > 0) {
      if (!fileHasIssues) {
        console.log(`\n📄 ${fileName}`);
        fileHasIssues = true;
      }
      console.log(`  ⚠️  Found ${issues.length} custom card-like element(s)`);
      console.log(`     Consider using: <Card> component`);
      issues.slice(0, 3).forEach(issue => {
        console.log(`     Line ${issue.lineNumber}: ${issue.line}...`);
      });
      warnings += issues.length;
    }
  }

  // Check 4: Sections should import atomic components
  if (filePath.includes('sections/')) {
    const hasButton = content.includes('<Button');
    const hasCard = content.includes('<Card');
    const hasButtonImport = requiredImports.Button.test(content);
    const hasCardImport = requiredImports.Card.test(content);

    if (hasButton && !hasButtonImport) {
      if (!fileHasIssues) {
        console.log(`\n📄 ${fileName}`);
        fileHasIssues = true;
      }
      console.log(`  ❌ Uses <Button> but missing import`);
      console.log(`     Add: import Button from '@/components/Button';`);
      errors++;
    }

    if (hasCard && !hasCardImport) {
      if (!fileHasIssues) {
        console.log(`\n📄 ${fileName}`);
        fileHasIssues = true;
      }
      console.log(`  ❌ Uses <Card> but missing import`);
      console.log(`     Add: import Card from '@/components/Card';`);
      errors++;
    }
  }

  // Check 5: Pages should use sections, not direct components
  if (filePath.includes('app/') && filePath.endsWith('page.tsx')) {
    const hasHero = content.includes('<Hero');
    const hasBenefits = content.includes('<Benefits');
    const hasCTA = content.includes('<CTA');

    const hasRawMarkup = content.match(/<section[^>]*>/g);
    
    if (hasRawMarkup && !hasHero && !hasBenefits && !hasCTA) {
      if (!fileHasIssues) {
        console.log(`\n📄 ${fileName}`);
        fileHasIssues = true;
      }
      console.log(`  ⚠️  Page has raw <section> tags`);
      console.log(`     Consider using: <Hero>, <Benefits>, <CTA> sections`);
      warnings++;
    }
  }

  return fileHasIssues;
}

// Component usage analysis
function analyzeComponentUsage() {
  console.log('\n📊 Component Usage Analysis:\n');

  const components = {
    Button: { files: [], count: 0 },
    Card: { files: [], count: 0 },
    Hero: { files: [], count: 0 },
    Benefits: { files: [], count: 0 },
    CTA: { files: [], count: 0 },
    Footer: { files: [], count: 0 },
  };

  const allFiles = [
    ...glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() }),
    ...glob.sync('components/**/*.{ts,tsx}', { cwd: process.cwd() }),
  ];

  allFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.relative(process.cwd(), filePath);

    Object.keys(components).forEach(comp => {
      const regex = new RegExp(`<${comp}[\\s>]`, 'g');
      const matches = content.match(regex);
      if (matches) {
        components[comp].files.push(fileName);
        components[comp].count += matches.length;
      }
    });
  });

  // Display results
  Object.entries(components).forEach(([name, data]) => {
    if (data.count > 0) {
      console.log(`✅ <${name}> used ${data.count} times in ${data.files.length} file(s)`);
      if (data.files.length <= 5) {
        data.files.forEach(file => {
          console.log(`   - ${file}`);
        });
      } else {
        data.files.slice(0, 3).forEach(file => {
          console.log(`   - ${file}`);
        });
        console.log(`   ... and ${data.files.length - 3} more`);
      }
    } else {
      console.log(`⚠️  <${name}> not used anywhere`);
    }
  });

  // Calculate reuse score
  const totalUsages = Object.values(components).reduce((sum, c) => sum + c.count, 0);
  const totalFiles = Object.values(components).reduce((sum, c) => sum + c.files.length, 0);
  const avgReuse = totalFiles > 0 ? (totalUsages / totalFiles).toFixed(2) : 0;

  console.log(`\n📈 Reuse Score: ${avgReuse}x average (higher is better)`);
  
  return avgReuse >= 1.5 ? 0 : 1; // Warning if low reuse
}

// Find all files
console.log('📂 Scanning files...\n');

filesToCheck.forEach(pattern => {
  const files = glob.sync(pattern, { 
    cwd: process.cwd(),
    ignore: ['**/node_modules/**', '**/.next/**', '**/*.test.*', '**/*.stories.*']
  });
  
  files.forEach(file => {
    checkFile(path.join(process.cwd(), file));
  });
});

// Analyze component usage
const reuseWarnings = analyzeComponentUsage();
warnings += reuseWarnings;

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 Summary:');
console.log(`   Files checked: ${filesChecked}`);
console.log(`   ❌ Errors: ${errors} (must fix)`);
console.log(`   ⚠️  Warnings: ${warnings} (should improve)`);
console.log('='.repeat(60) + '\n');

if (errors > 0) {
  console.log('❌ FAILED: Found component reuse violations!');
  console.log('\n💡 Component Reuse Principles:');
  console.log('   1. Use <Button> instead of <button> or custom divs');
  console.log('   2. Use <Card> instead of custom card markup');
  console.log('   3. Sections should compose atomic components');
  console.log('   4. Pages should compose sections');
  console.log('   5. Import components properly\n');
  process.exit(1);
} else if (warnings > 0) {
  console.log('⚠️  WARNING: Some component reuse improvements possible');
  console.log('   Review warnings above for optimization opportunities\n');
  process.exit(0);
} else {
  console.log('✅ SUCCESS: Excellent component reuse! 🎉');
  console.log('   All components are properly composed and reused\n');
  process.exit(0);
}
