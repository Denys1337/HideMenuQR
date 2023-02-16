module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'react/button-has-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
    'import/no-unresolved': 'error',
    'no-nested-ternary': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  },
};
