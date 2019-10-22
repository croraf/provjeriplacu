module.exports = {
 "presets": [
  "es2015",
  "react"
 ],
 "plugins": ["transform-object-rest-spread", "transform-class-properties"]
};

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
  ['react']
];

module.exports = { presets };