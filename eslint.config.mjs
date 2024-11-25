import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { languageOptions: { globals: globals.browser } },
  // {
  //   rules: {
  //     eqeqeq: "off",
  //     "no-unused-vars": "error",
  //     "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
  //   },
  // },
  // {
  //   ignores: [".node_modules/*"]
  // },
  {
    files: ["**/*.js"],
    plugins: {
        jsdoc: jsdoc
    },
    rules: {
        "jsdoc/require-description": "error",
        "jsdoc/check-values": "error"
    }
}
];