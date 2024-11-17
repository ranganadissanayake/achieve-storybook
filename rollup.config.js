// rollup.config.mjs

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',  // Output file
      format: 'esm',  // Output format (e.g., 'esm', 'cjs')
      sourcemap: true,  // Optionally include sourcemaps
    },
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      terser(),
      typescript(),
      babel({
        extensions: ['.js', '.ts', '.tsx'],
        exclude: 'node_modules/**',
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],  // Enable decorators support
        ],
      }),
    ],
    external: ['@storybook/angular'],
  },
];