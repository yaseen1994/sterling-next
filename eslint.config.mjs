import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import typescript from "typescript-eslint";
import hooks from "eslint-plugin-react-hooks";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,ts,tsx}"],
    extends: [js.configs.recommended, typescript.configs.recommended],
    plugins: { "react-hooks": hooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "docs/discovery/evidence/**",
  ]),
]);
