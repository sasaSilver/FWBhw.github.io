import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from "rollup-plugin-import-css";

export default {
    input: 'src/index.tsx',
    output: {
        file: '.dist/AppBundle.js',
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
