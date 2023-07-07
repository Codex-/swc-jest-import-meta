/// <reference types="node" />

const fs = require("node:fs");

const config = JSON.parse(fs.readFileSync(`${process.cwd()}/.swcrc`, "utf-8"));
delete config.exclude;
config.swcrc = false;
config.jsc.transform.hidden = {
  ...config.jsc.transform.hidden,
  jest: true,
};

/**
 * @type { import("jest").Config }
 */
module.exports = {
  roots: ["<rootDir>/src/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    uuid: "<rootDir>/../../node_modules/uuid/dist/index.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: { url: "http://localhost/" },
  testRegex: "(test|spec).tsx?$",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", config],
  },
};
