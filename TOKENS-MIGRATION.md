#  Design Tokens Migration Plan

## Goal
Make `design-tokens/tokens.json`  the canonical source of truth and generate CSS/Tailwind outputs from it deterministically.

## Steps
1. **Prepare**: freeze manual edits to app/globals.css; create backup branch.
2. **Extract**: run scripts/extract (or use provided simple generator) to produce candidate tokens.json.
3. **Style-Dictionary**: implement Style Dictionary config and transforms producing:
   - build/css/variables.css
   - build/json/tokens-flat.json
   - build/js/tokens.js
4. **Tailwind generator**: generate `tailwind.config.generated.js`  from tokens-flat.json.
5. **CI**: add verify-sync, idempotence, purge safelist checks.
6. **Migration**: gradually replace app/globals.css with generated artifact and remove manual claims.

## Risks & mitigations
- Visual regressions: use storybook snapshots & Chromatic to detect diff.
- Team friction: provide generator scripts and small docs; keep compatibility shim for one release.

## Acceptance criteria
- tokens.json validated by schema
- generator produces deterministic outputs
- Storybook visual diffs within threshold
- README updated describing workflow
