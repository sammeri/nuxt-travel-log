import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu(
    {
      type: "app",
      vue: true,
      typescript: true,
      formatters: true,
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
      ignores: [".pnpm-store/**", "**/migrations/*"],
    },
    {
      rules: {
        "vue/max-attributes-per-line": [
          "error",
          {
            singleline: {
              max: 2,
            },
            multiline: {
              max: 1,
            },
          },
        ],
        "ts/no-redeclare": "off",
        "ts/consistent-type-definitions": ["error", "type"],
        "no-console": ["warn"],
        "antfu/no-top-level-await": ["off"],
        "node/prefer-global/process": ["off"],
        "node/no-process-env": ["error"],
        "perfectionist/sort-imports": [
          "error",
          {
            tsconfigRootDir: ".",
          },
        ],
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
            ignore: ["README.md"],
          },
        ],
        "vue/html-self-closing": [
          "error",
          {
            html: {
              void: "never", // br, img и т.д.
              normal: "never", // обычные теги (например main, div) не требуют self-close
              component: "always", // компоненты Vue всегда self-close
            },
            svg: "always",
            math: "always",
          },
        ],
      },
    },
  ),
);
// Your custom configs here
