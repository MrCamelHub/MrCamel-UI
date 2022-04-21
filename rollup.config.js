import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import { DEFAULT_EXTENSIONS } from '@babel/core';

const outputs = [
  {
    file: 'dist/index.esm.js',
    format: 'esm'
  },
  {
    file: 'dist/index.js',
    format: 'cjs'
  }
];

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];

export default outputs.map(({ file, format }) => {
  return {
    input: './src/index.ts',
    output: {
      file,
      format
    },
    external: [/@babel\/runtime/],
    plugins: [
      peerDepsExternal(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        presets: ['@emotion/babel-preset-css-prop'],
        plugins: ['@emotion', '@babel/plugin-transform-runtime'],
        extensions
      }),
      commonjs({
        extensions
      }),
      typescript(),
      resolve({
        extensions
      }),
      terser()
    ]
  };
});
