#!/usr/bin/env node
/**
 * Add missing 'type' field to all tokens
 * Run: node scripts/add-types-to-tokens.js
 */

const fs = require('fs');
const path = require('path');

const TOKENS_PATH = path.join(__dirname, '..', 'design-tokens', 'tokens.json');

const tokens = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf8'));

// Add type to color tokens
if (tokens.color) {
  Object.keys(tokens.color).forEach(key => {
    if (!tokens.color[key].type) {
      tokens.color[key].type = 'color';
    }
  });
}

// Add type to shadow tokens
if (tokens.shadow) {
  Object.keys(tokens.shadow).forEach(key => {
    if (!tokens.shadow[key].type) {
      tokens.shadow[key].type = 'shadow';
    }
  });
}

// Add type to breakpoints
if (tokens.breakpoints) {
  Object.keys(tokens.breakpoints).forEach(key => {
    const token = tokens.breakpoints[key];
    if (!token.type) {
      // Convert "768px" → { value: 768, type: "dimension", unit: "px" }
      const match = token.value.match(/^(\d+)px$/);
      if (match) {
        token.value = parseInt(match[1], 10);
        token.type = 'dimension';
        token.unit = 'px';
      }
    }
  });
}

// Add type to zIndex
if (tokens.zIndex) {
  Object.keys(tokens.zIndex).forEach(key => {
    const token = tokens.zIndex[key];
    if (!token.type) {
      // Convert "1050" → { value: 1050, type: "number" }
      if (typeof token.value === 'string') {
        token.value = parseInt(token.value, 10);
      }
      token.type = 'number';
    }
  });
}

// Add type to transitions
if (tokens.transitions) {
  Object.keys(tokens.transitions).forEach(key => {
    if (!tokens.transitions[key].type) {
      tokens.transitions[key].type = 'transition';
    }
  });
}

// Add type to effects
if (tokens.effects) {
  Object.keys(tokens.effects).forEach(key => {
    if (!tokens.effects[key].type) {
      tokens.effects[key].type = 'custom';
    }
  });
}

// Add type to gradient
if (tokens.gradient) {
  Object.keys(tokens.gradient).forEach(key => {
    if (!tokens.gradient[key].type) {
      tokens.gradient[key].type = 'gradient';
    }
  });
}

// Add type to animation
if (tokens.animation) {
  Object.keys(tokens.animation).forEach(key => {
    if (!tokens.animation[key].type) {
      tokens.animation[key].type = 'animation';
    }
  });
}

// Write back
fs.writeFileSync(TOKENS_PATH, JSON.stringify(tokens, null, 2), 'utf8');
console.log('✅ Added type to all tokens');
console.log('📝 Updated:', TOKENS_PATH);
