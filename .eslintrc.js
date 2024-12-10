module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["unused-imports"],
  rules: {
    // 'no-console': [ process.env.NODE_ENV === 'production' ? 1 : 2, {
    //   allow: ['info', 'warn', 'error'],
    // }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Best Practices
    eqeqeq: 'error',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',

    // Variable
    // 'init-declarations': 'error',
    'no-use-before-define': 'off',

    'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z]' }],
    'unused-imports/no-unused-imports': 'error',
    // Stylistic Issues
    'array-bracket-newline': ['error', { multiline: true, minItems: null }],
    'array-bracket-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'block-spacing': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    // 'implicit-arrow-linebreak': ['none', 'beside'],
    // indent: ['error', 2],
    'keyword-spacing': 'error',
    // 'multiline-ternary': ['error', 'never'],
    // 'no-lonely-if': 'error',
    // 'no-mixed-operators': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    // 'quote-props': ['error', 'as-needed'],
    // 'quotes': [
    //   'error',
    //   'single'
    // ],
    curly: 'error',
    semi: ['error', 'never'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    // 'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',

    // ES6
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error'
  }
}
