module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['prettier', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    indent: 'off',
    'implicit-arrow-linebreak': 'off',
  },
}
