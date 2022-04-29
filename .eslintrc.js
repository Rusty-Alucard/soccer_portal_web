module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
  ],
  'rules': {
    'semi': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2],
    'require-jsdoc': ['off'],
    'spaced-comment': ['off'],
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      'plugins': [
        '@typescript-eslint',
      ],
    },
  ],
}
