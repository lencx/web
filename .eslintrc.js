module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "settings": {
    "import/resolver": {
      "alias": [
        ["~components", "./src/components"],
        ["~utils", "./src/utils"]
      ]
    }
  }
}