import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import typescript from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,ts,tsx}"],
    extends: [js.configs.recommended, typescript.configs.recommended],
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "docs/discovery/evidence/**",
  ]),
]);
