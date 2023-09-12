module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/typescript/recommended',
      'eslint:recommended',
    ],
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    rules: {
    },
  };
  