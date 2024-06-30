import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/fetchComic.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        name: 'MyBundle'
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        babel({ babelHelpers: 'bundled' }),
        terser()
    ]
};
