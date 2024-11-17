import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

// Define entry points for Storybook files and components
const input = path.resolve(__dirname, 'src', 'storybook', 'index.ts');  // Replace with your Storybook entry point

export default {
  input,  // Entry file
  output: [
    {
      file: path.resolve(__dirname, 'dist', 'index.cjs.js'),  // CommonJS output
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.resolve(__dirname, 'dist', 'index.esm.js'),  // ES Module output
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),         // Exclude peer dependencies from the bundle
    resolve(),                  // Resolve node modules
    commonjs(),                 // Convert CommonJS to ES6
    typescript(),               // Process TypeScript files
    terser(),                   // Minify the output
    typescript({
      tsconfig: './tsconfig.json',  // Ensure the tsconfig is correctly referenced
    }),
  ],
  external: ['@storybook/angular'],  // Exclude Storybook itself from the bundle
};
