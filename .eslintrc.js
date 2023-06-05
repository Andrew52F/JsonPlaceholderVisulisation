module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'warn',
    'implicit-arrow-linebreak': 'warn',

    'react/require-default-props': ['error', {
      functions: 'defaultArguments',
    }],
    // "react/require-default-props": [<enabled>, {
    //   "forbidDefaultForRequired": <boolean>,
    //   "classes": "defaultProps" | "ignore",
    //   "functions": "defaultProps" | "defaultArguments" | "ignore"
    //   // @deprecated Use `functions` option instead.
    //   "ignoreFunctionalComponents": <boolean>,
    // }]
  },
};
