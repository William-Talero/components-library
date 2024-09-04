import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sass from "rollup-plugin-sass";
import alias from "@rollup/plugin-alias";
import pkg from "./package.json" with { type: "json" };

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
      extensions: [".ts", ".tsx"],
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "styled-components": ["styled", "css", "ThemeProvider"],
      },
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"],
      },
    }),
    alias({
      entries: [{ find: "@", replacement: "./src" }],
    }),
    sass({
      output: "dist/styles.css",
    }),
  ],
  external: ["react", "react-dom"],
};
