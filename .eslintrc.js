const prettierConfig = require('./.prettierrc.js');
const OFF = 0;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['simple-import-sort', 'eslint-plugin-no-cyrillic-string'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
    'no-cyrillic-string/no-cyrillic-string': ERROR,
    'no-shadow': OFF,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: 'tsconfig.json',
        sourceType: 'module',
      },
    },
    {
      files: ['**'],
      rules: {
        // This is not needed since React 17
        'react/react-in-jsx-scope': OFF,
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/no-empty-interface': OFF,

        // Turn on after fix
        'no-cyrillic-string/no-cyrillic-string': OFF,
        'react-native/no-inline-styles': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        // Turn on after fix

        eqeqeq: ERROR,
        '@typescript-eslint/no-unused-vars': [
          ERROR,
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['*.json'],
      rules: {
        'no-cyrillic-string/no-cyrillic-string': OFF,
      },
    },
  ],
};
