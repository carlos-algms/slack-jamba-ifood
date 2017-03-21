module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "amd": true,
    "mocha": true,
    "jasmine": true,
    "protractor": true,
    "jquery": true
  },
  "extends": "airbnb",
  "globals": {
    "angular": true,
    "$": true,
    "jQuery": true,
    "sinon": true,
    "inject": true,
    "moment": true,
    "should": true,
    "waitElementVisible": true
  },

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },

  "rules": {
    "comma-dangle": 0,
    "no-use-before-define": [ "error", { "functions": false, "classes": true } ],
    "no-console": ["error", {"allow": [ "warn", "error", "info" ] } ],
    "no-param-reassign": ["error", { "props": false }]
  }
};
