module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
    //   'eslint:recommended',
    //   'plugin:@typescript-eslint/recommended',
    'js-ts',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    parserOptions: {
project:"./tsconfig.json",

    },
    rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        // need discussion
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/consistent-type-definitions":"off",
        "no-shadow":"off",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }