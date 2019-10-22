/* module.exports = {
 "presets": [
  "es2015",
  "react"
 ],
 "plugins": ["transform-object-rest-spread", "transform-class-properties"]
}; */

const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
  ['@babel/preset-react'],
];

const plugins = [
  ["@babel/plugin-proposal-class-properties",],
]
module.exports = { presets, plugins };