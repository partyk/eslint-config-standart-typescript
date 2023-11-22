module.exports = {
  'extends': ['standard-with-typescript'],
  'env': {
    'browser': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 9,
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
    'ecmaFeatures': {
      'spread': true
    }
  },
  'rules': {
      'comma-dangle': [
          1,
          {
              'arrays': 'always-multiline',
              'objects': 'always-multiline',
              'imports': 'always-multiline',
              'exports': 'always-multiline',
              'functions': 'always-multiline'
          }
      ],
      'operator-linebreak': [1, 'before'],
      'eol-last': 1,
      'spaced-comment': 1,
      'no-new': 1,
      'no-multiple-empty-lines': [
          1,
          {
              'max': 2,
              'maxEOF': 0,
              'maxBOF': 0
          }
      ],
      'space-before-function-paren': [1,
          {
              'anonymous': 'always',
              'named': 'never',
              'asyncArrow': 'always'
          }
      ],
      'no-unneeded-ternary': 2,
      'indent': [1, 4, {'SwitchCase': 1}],
      'semi': [2, 'always', {'omitLastInOneLineBlock': true}],
      'quotes': [1, 'single', {'allowTemplateLiterals': true}],
      'object-curly-spacing': [1, 'never', {'objectsInObjects': true}],
      'quote-props': [1, 'consistent'],
      'dot-notation': 1,
      'lines-between-class-members': [1, 'always', {'exceptAfterSingleLine': true}],
      'prefer-const': [1, {
          'destructuring': 'any',
          'ignoreReadBeforeAssign': false
      }]
  }
}
