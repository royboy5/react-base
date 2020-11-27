module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
