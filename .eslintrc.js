module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react", "class-property"
  ],
  "rules": {
    "indent": [
      "error", 2, { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      0,
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
};
