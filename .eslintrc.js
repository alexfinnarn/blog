module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  }, 
  rules: {
    strict: 0
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: [
    'react',
    'jsx-a11y',
    
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
}