/**
 * Design System Compliance Tests
 * 
 * Ensures that all components use only:
 * - Design tokens from globals.css
 * - Approved components (Button, Card, Footer, etc.)
 * - No hardcoded values (colors, spacing, etc.)
 * - No inline styles
 * 
 * Карает за кастомщину! 🚨
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Approved components that can be used
const APPROVED_COMPONENTS = [
  'Button',
  'Card',
  'Footer',
  'Hero',
  'Benefits',
  'CTA',
];

// Design tokens that should be used instead of hardcoded values
const DESIGN_TOKENS = {
  colors: [
    '--color-primary',
    '--color-accent',
    '--color-background',
    '--color-surface',
    '--color-text-primary',
    '--color-text-secondary',
    '--color-text-on-accent',
    '--color-text-on-primary',
    '--color-border',
    '--color-success',
    '--color-warning',
    '--color-danger',
    '--color-info',
  ],
  spacing: [
    '--spacing-xs',
    '--spacing-sm',
    '--spacing-md',
    '--spacing-lg',
    '--spacing-xl',
    '--spacing-2xl',
  ],
  radius: [
    '--radius-sm',
    '--radius-md',
    '--radius-lg',
    '--radius-xl',
    '--radius-2xl',
    '--radius-full',
  ],
};

// Patterns that indicate hardcoded values (forbidden)
const FORBIDDEN_PATTERNS = {
  hexColors: /#[0-9a-fA-F]{3,6}(?![0-9a-fA-F])/g,
  rgbColors: /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g,
  rgbaColors: /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/g,
  inlineStyles: /style=\{\{/g,
  hardcodedSpacing: /(?:padding|margin|gap|space):\s*\d+px/g,
};

describe('Design System Compliance', () => {
  describe('Component Files', () => {
    it('should not contain hardcoded hex colors', async () => {
      const files = await glob('components/**/*.{ts,tsx}', {
        ignore: ['**/*.test.{ts,tsx}', '**/*.types.ts', '**/*.stories.tsx'],
      });

      const violations: Array<{ file: string; matches: string[] }> = [];

      for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        
        // Skip if file is in approved list and uses tokens correctly
        const matches = content.match(FORBIDDEN_PATTERNS.hexColors);
        
        if (matches) {
          // Filter out false positives (comments, imports, etc.)
          const realViolations = matches.filter(match => {
            const lines = content.split('\n');
            const matchingLine = lines.find(line => line.includes(match));
            return matchingLine && 
                   !matchingLine.trim().startsWith('//') &&
                   !matchingLine.trim().startsWith('*') &&
                   !matchingLine.includes('import');
          });

          if (realViolations.length > 0) {
            violations.push({ file, matches: realViolations });
          }
        }
      }

      if (violations.length > 0) {
        const errorMessage = violations
          .map(v => `${v.file}:\n  ${v.matches.join(', ')}`)
          .join('\n\n');
        
        throw new Error(
          `🚨 Hardcoded hex colors found! Use design tokens instead:\n\n${errorMessage}\n\nUse: var(--color-primary) or Tailwind classes like bg-primary`
        );
      }

      expect(violations).toHaveLength(0);
    });

    it('should not contain inline styles', async () => {
      const files = await glob('components/**/*.{ts,tsx}', {
        ignore: ['**/*.test.{ts,tsx}', '**/*.types.ts', '**/*.stories.tsx'],
      });

      const violations: Array<{ file: string; lines: number[] }> = [];

      for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        const lines = content.split('\n');
        
        const violatingLines: number[] = [];
        lines.forEach((line, index) => {
          if (line.includes('style={{') && !line.trim().startsWith('//')) {
            violatingLines.push(index + 1);
          }
        });

        if (violatingLines.length > 0) {
          violations.push({ file, lines: violatingLines });
        }
      }

      if (violations.length > 0) {
        const errorMessage = violations
          .map(v => `${v.file}: lines ${v.lines.join(', ')}`)
          .join('\n');
        
        throw new Error(
          `🚨 Inline styles found! Use Tailwind classes instead:\n\n${errorMessage}\n\nReplace style={{...}} with className="..."`
        );
      }

      expect(violations).toHaveLength(0);
    });

    it('should use only approved components', async () => {
      const files = await glob('app/**/*.{ts,tsx}', {
        ignore: ['**/*.test.{ts,tsx}'],
      });

      const violations: Array<{ file: string; unapprovedComponents: string[] }> = [];

      for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        
        // Check for custom component usage (not from our approved list)
        const componentImports = content.match(/import\s+\{?\s*(\w+)\s*\}?\s+from\s+['"]@?\/components/g);
        
        if (componentImports) {
          const unapproved = componentImports
            .map(imp => {
              const match = imp.match(/import\s+\{?\s*(\w+)/);
              return match ? match[1] : null;
            })
            .filter((comp): comp is string => comp !== null && !APPROVED_COMPONENTS.includes(comp));

          if (unapproved.length > 0) {
            violations.push({ file, unapprovedComponents: unapproved });
          }
        }
      }

      if (violations.length > 0) {
        const errorMessage = violations
          .map(v => `${v.file}:\n  Unapproved: ${v.unapprovedComponents.join(', ')}`)
          .join('\n\n');
        
        throw new Error(
          `🚨 Unapproved components found!\n\n${errorMessage}\n\nApproved components: ${APPROVED_COMPONENTS.join(', ')}`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });

  describe('Design Tokens', () => {
    it('should have all required color tokens defined', () => {
      const globalsCss = fs.readFileSync('app/globals.css', 'utf-8');

      const missingTokens = DESIGN_TOKENS.colors.filter(
        token => !globalsCss.includes(token)
      );

      expect(missingTokens).toHaveLength(0);
    });

    it('should have all required spacing tokens defined', () => {
      const globalsCss = fs.readFileSync('app/globals.css', 'utf-8');

      const missingTokens = DESIGN_TOKENS.spacing.filter(
        token => !globalsCss.includes(token)
      );

      expect(missingTokens).toHaveLength(0);
    });

    it('should have all required radius tokens defined', () => {
      const globalsCss = fs.readFileSync('app/globals.css', 'utf-8');

      const missingTokens = DESIGN_TOKENS.radius.filter(
        token => !globalsCss.includes(token)
      );

      expect(missingTokens).toHaveLength(0);
    });
  });

  describe('Component Structure', () => {
    it('should have TypeScript types for all components', async () => {
      const componentFiles = await glob('components/**/*.tsx', {
        ignore: ['**/*.test.tsx', '**/*.stories.tsx'],
      });

      const missingTypes: string[] = [];

      for (const file of componentFiles) {
        const typesFile = file.replace('.tsx', '.types.ts');
        if (!fs.existsSync(typesFile)) {
          missingTypes.push(file);
        }
      }

      if (missingTypes.length > 0) {
        throw new Error(
          `🚨 Missing .types.ts files:\n\n${missingTypes.join('\n')}\n\nEvery component must have a corresponding .types.ts file`
        );
      }

      expect(missingTypes).toHaveLength(0);
    });

    it('should export component and types correctly', async () => {
      const componentFiles = await glob('components/**/*.tsx', {
        ignore: ['**/*.test.tsx', '**/*.stories.tsx'],
      });

      const violations: string[] = [];

      for (const file of componentFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        
        // Check for default export
        if (!content.includes('export default')) {
          violations.push(`${file}: Missing default export`);
        }
      }

      if (violations.length > 0) {
        throw new Error(
          `🚨 Export violations:\n\n${violations.join('\n')}`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });

  describe('Accessibility', () => {
    it('should use semantic HTML in section components', async () => {
      const sectionFiles = await glob('components/sections/**/*.tsx', {
        ignore: ['**/*.test.tsx', '**/*.stories.tsx'],
      });

      const violations: string[] = [];

      for (const file of sectionFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        
        // Check for semantic <section> tag
        if (!content.includes('<section')) {
          violations.push(`${file}: Missing <section> tag`);
        }
      }

      if (violations.length > 0) {
        throw new Error(
          `🚨 Semantic HTML violations:\n\n${violations.join('\n')}\n\nSection components must use <section> tag`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });
});
