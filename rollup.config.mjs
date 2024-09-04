import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import sass from "rollup-plugin-sass";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import packageJson from "./package.json" with { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "react-is": ["isForwardRef", "isValidElementType"],
      },
    }),
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"],
      },
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    postcss({
      preprocessor: (content, id) =>
        new Promise((res) => {
          const result = sass.renderSync({ file: id });

          res({ code: result.css.toString() });
        }),
      plugins: [autoprefixer],
      modules: {
        scopeBehaviour: "global",
      },
      sourceMap: true,
      extract: true,
    }),
  ],
};
