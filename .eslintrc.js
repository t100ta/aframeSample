module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    'no-extra-semi': 'warn',
    'no-undef': 'warn',
    'space-before-function-paren': ['error', 'never'],
    'arrow-parens': 0,
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
};
