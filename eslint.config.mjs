import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored Claude skill kit — not our source (linting it warns + balloons
    // memory, which is what OOM'd the full-repo lint locally).
    ".claude/**",
    // Generated artifacts.
    "storybook-static/**",
    "coverage/**",
  ]),
]);

export default eslintConfig;
