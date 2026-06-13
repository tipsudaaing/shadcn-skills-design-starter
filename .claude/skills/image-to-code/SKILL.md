---
name: image-to-code
description: Turn a reference image, screenshot, or mockup into token-driven, accessible code — infer the design system from the reference (palette, type scale, spacing, radius, layout archetype), map it to the 3-tier tokens, rebuild it, then verify with the kit's gates. Use when the user provides a design/screenshot and wants matching UI code.
---

# Skill: Image to Code

Reconstruct a design from a visual reference as a real design system, not a one-off copy. Match the *system* (color/type/spacing language), never lift copyrighted imagery or brand assets.

## Steps
1. **Read the reference like a designer.** Infer and write down:
   - **Palette** — 1 dominant surface family, text colors, 1 primary action + at most 1 accent (sample the hues; don't guess random hex).
   - **Type** — family feel (geometric/grotesk/serif), the scale jumps, display vs. body contrast, weights.
   - **Spacing & density** — base unit, section rhythm, card padding; airy vs. compact.
   - **Radius & depth** — radius language (sharp/soft/pill), shadow vs. hairline separation.
   - **Layout archetype + sequence** — full-bleed hero / asymmetric split / bento / editorial stack (`../_resources/taste/design-taste.md` → Variance Mandate).
2. **Anchor to a known system** if it's close — browse `../_resources/taste/aesthetic-systems.md` / `python3 ../_resources/scripts/design_systems.py search <term>` and adopt that recipe to stabilize decisions.
3. **Build the token theme** from the inferred values → for this project, map onto the neutral theme owned by the `shadcn-ui-design` skill (`globals.css` / `shadcn-ui-design/references/DESIGN.md`); the kit's DTCG token files under `../_resources/tokens/*` are reference samples only. Verify every color pair with `../_resources/scripts/contrast.py` / `../_resources/scripts/validate_contrast.py` (light + dark) — a sampled brand color that fails AA gets adjusted; taste never overrides POUR.
4. **Rebuild layout + components** token-driven via `../_resources/frameworks/adapter-protocol.md` + `../_resources/components/*`: one shared primitive layer, all 8 states, a11y wired, no emoji (lucide), single theme. Apply taste (`../_resources/taste/design-taste.md`) so it doesn't regress to generic.
5. **Verify against the reference** — render and screenshot it, compare side-by-side to the reference; run `node ../_resources/scripts/measure_render.mjs`, `../_resources/scripts/lint_hardcodes.py`, `../_resources/scripts/taste_audit.mjs`, and the `design-qa` skill's gates.

## Verification (definition of done)
- The `design-qa` gates pass (tokens resolve, contrast AA light+dark, no hardcodes/emoji, real-render WCAG).
- The rebuilt UI uses ONE inferred token theme — no per-section palettes.
- A screenshot of the result visibly matches the reference's design language.

> Honest limit: this matches the design **system**, not a pixel-perfect copy. Do not reproduce the reference's photographs, logos, or copyrighted copy — substitute your own or generic placeholders.
