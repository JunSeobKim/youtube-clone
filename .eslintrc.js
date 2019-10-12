module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": "off",
    quotes: "off",
    "comma-dangle": "off",
    "linebreak-style": "off",
    "implicit-arrow-linebreak": "off"
  }
};
