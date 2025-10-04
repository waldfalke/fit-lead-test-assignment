# Token System Migration - TODO (short)

## Current state
- Manual globals.css exists (temporary)
- No automated tokens pipeline in place
- design-tokens/tokens.json skeleton added (proposed)

## Immediate goals (this PR)
1. Add `design-tokens/tokens.json`  (skeleton) - DONE
2. Add scripts/generate-tokens.js to produce `app/globals.generated.css`  - DONE
3. Add metadata header in `app/globals.css`  indicating TEMPORARY - DONE
4. Add minimal CI workflow to run token generation & smoke build - DONE (workflow added)

## Next steps (Phase 2)
- Replace simple generator with Style Dictionary pipeline
- Generate tailwind.config from tokens-flat.json
- Add verify-sync CI checks and visual regression gating
- Integrate tokens.json with design (Figma) if required

## Owner / Tracking
- Issue: TODO - create tracking issue in repo and link here
- Owner: @waldfalke
