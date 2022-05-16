import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./index.js",
  output: {
    file: "./index.build.js",
    format: "iife",
  },
  plugins: [nodeResolve()],
};
