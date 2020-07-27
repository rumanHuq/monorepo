// eslint-disable-next-line @typescript-eslint/no-var-requires
const schemaJson = require("./schema.json");

module.exports = {
  env: {
    browser : true,
    es6     : true,
    jest    : true,
  },
  extends: [
    "react-app",
    "airbnb",
    "airbnb/hooks",
    "../.eslintrc",
  ],
  globals  : { React: "writable" },
  plugins  : ["graphql"],
  settings : {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
      ],
    },
    "import/resolver": {
      alias: {
        extensions: [
          ".ts",
          ".js",
          ".tsx",
          ".jsx",
          ".json",
        ],
        map: [
          [
            "@",
            "./src/",
          ],
        ],
      },
      "eslint-import-resolver-typescript": true,
    },
  },
  rules: {
    "graphql/template-strings": ["error", {
      env: "apollo",
      schemaJson,
    }],
    "import/no-extraneous-dependencies" : ["error", { packageDir: ["./", "../"] }],
    "jsx-a11y/anchor-is-valid"          : 0,
    "react/jsx-filename-extension"      : [
      2,
      {
        extensions: [
          ".tsx",
          ".jsx",
        ],
      },
    ],
    "react/jsx-props-no-spreading" : 0,
    "react/no-array-index-key"     : 0,
    "react/prop-types"             : 0,
    "react/react-in-jsx-scope"     : "off",
    "react/require-default-props"  : 0,
  },
};
