import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import terser from "@rollup/plugin-terser";
import { babel } from "@rollup/plugin-babel";
import analyze from "rollup-plugin-analyzer";
import json from "@rollup/plugin-json";
import pkg from "./package.json" assert { type: "json" };

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ 
      extensions,
      preferBuiltins: true
    }),
    commonjs(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"],
      },
    }),
    babel({
      exclude: "node_modules/**",
      extensions,
      babelHelpers: "bundled",
    }),
    alias({
      entries: [{ find: "@", replacement: "./src" }],
    }),
    postcss({
      extensions: [".css", ".scss"],
      extract: false,
      minimize: true,
      use: [
        [
          "sass",
          {
            includePaths: ["./src/**/*.scss"],
          },
        ],
      ],
    }),
    terser(),
    analyze({ summaryOnly: true }),
  ],
  external: ["react", "react-dom", ...Object.keys(pkg.peerDependencies || {})],
};