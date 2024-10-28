import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import analyze from 'rollup-plugin-analyzer';
import json from '@rollup/plugin-json';
import pkg from './package.json' assert { type: 'json' };
import cssnano from 'cssnano';
import copy from 'rollup-plugin-copy';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions,
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true,
      tsconfig: './tsconfig.json',
      tsconfigOverride: {
        exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
      },
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
      babelHelpers: 'bundled',
    }),
    alias({
      entries: [{ find: '@', replacement: './src' }],
    }),
    copy({
      targets: [
        { src: 'public/fonts/BandaBold-Bold.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaBold-Bold.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaBold-Bold.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaBold-Bold.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaBold-BoldItalic.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaBold-BoldItalic.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaBold-BoldItalic.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaBold-BoldItalic.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaExtraLight-ExtraLightItalic.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaExtraLight-ExtraLightItalic.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaExtraLight-ExtraLightItalic.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaExtraLight-ExtraLightItalic.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaExtraLight-ExtraLight.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaExtraLight-ExtraLight.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaExtraLight-ExtraLight.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaExtraLight-ExtraLight.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaLight-LightItalic.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaLight-LightItalic.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaLight-LightItalic.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaLight-LightItalic.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaLight-Light.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaLight-Light.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaLight-Light.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaLight-Light.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaRegular-Italic.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaRegular-Italic.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaRegular-Italic.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaRegular-Italic.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaRegular.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaRegular.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaRegular.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaRegular.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaSemibold-SemiBold.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaSemibold-SemiBold.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaSemibold-SemiBold.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaSemibold-SemiBold.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaSemibold-SemiBoldItalic.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaSemibold-SemiBoldItalic.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaSemibold-SemiBoldItalic.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaSemibold-SemiBoldItalic.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaThin-Thin.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaThin-Thin.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaThin-Thin.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaThin-Thin.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaThin-ThinItalic.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaThin-ThinItalic.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaThin-ThinItalic.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/BandaThin-ThinItalic.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/Bandaultrathin-UltraThin.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/Bandaultrathin-UltraThin.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/Bandaultrathin-UltraThin.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/Bandaultrathin-UltraThin.woff', dest: 'dist/public/fonts' },
        { src: 'public/fonts/Bandaultrathin-Italic.woff2', dest: 'dist/public/fonts' },
        { src: 'public/fonts/Bandaultrathin-Italic.eot', dest: 'dist/public/fonts' },
        { src: 'public/fonts/Bandaultrathin-Italic.ttf', dest: 'dist/public/fonts' },
        { src: 'public/fonts/Bandaultrathin-Italic.woff', dest: 'dist/public/fonts' },
      ],
    }),
    postcss({
      extensions: ['.css', '.scss'],
      extract: false,
      minimize: true,
      use: [
        [
          'sass',
          {
            includePaths: ['./src/**/*.scss'],
          },
        ],
      ],
      plugins: [
        cssnano({
          preset: 'default',
        }),
      ],
    }),
    terser(),
    analyze({ summaryOnly: true }),
  ],
  external: ['react', 'react-dom', ...Object.keys(pkg.peerDependencies || {})],
};