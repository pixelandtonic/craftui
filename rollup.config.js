import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import VuePlugin from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser"

module.exports = [
    {
        input: 'src/craftui.standalone.js',
        output: [
            {
                format: 'cjs',
                file: 'dist/craftui.standalone.js'
            },
            {
                format: 'es',
                file: 'dist/craftui.standalone.esm.js'
            },
            {
                format: 'umd',
                file: 'dist/craftui.standalone.umd.js',
                name: 'CraftUiStandalone',
            },
        ],
        plugins: [
            resolve(),
            babel(),
            svg(),
            postcss({
                extract: true,
                plugins: [
                    require('tailwindcss')('./tailwind.config.js'),
                ],
            }),
            VuePlugin({
                css: false,
            }),
            commonjs(),
        ]
    },
    {
        input: 'src/craftui.standalone.js',
        output: [
            {
                format: 'cjs',
                file: 'dist/craftui.standalone-prefixed.js'
            },
            {
                format: 'es',
                file: 'dist/craftui.standalone-prefixed.esm.js'
            },
            {
                format: 'umd',
                file: 'dist/craftui.standalone-prefixed.umd.js',
                name: 'CraftUiStandalone',
            },
        ],
        plugins: [
            resolve(),
            babel(),
            svg(),
            postcss({
                extract: true,
                plugins: [
                    require('tailwindcss')('./tailwind-prefixed.config.js'),
                ],
            }),
            VuePlugin({
                css: false,
            }),
            commonjs(),
        ]
    },
    {
        input: 'src/craftui.js',
        output: [
            {
                format: 'cjs',
                file: 'dist/craftui.js'
            },
            {
                format: 'es',
                file: 'dist/craftui.esm.js'
            },
            {
                format: 'umd',
                file: 'dist/craftui.umd.js',
                name: 'CraftUi',
            },
        ],
        plugins: [
            resolve(),
            babel(),
            svg(),
            postcss({
                extract: true,
                plugins: [
                    require('tailwindcss')('./tailwind.config.js'),
                ],
            }),
            VuePlugin({
                css: false,
            }),
            commonjs(),
        ]
    },
    {
        input: 'src/craftui.js',
        output: [
            {
                format: 'cjs',
                file: 'dist/craftui.min.js',
                sourcemap: true,
            },
            {
                format: 'es',
                file: 'dist/craftui.esm.min.js',
                sourcemap: true,
            },
            {
                format: 'umd',
                file: 'dist/craftui.umd.min.js',
                name: 'CraftUi',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            babel(),
            svg(),
            postcss({
                extract: true,
                minimize: true,
                plugins: [
                    require('tailwindcss')('./tailwind.config.js'),
                ],
            }),
            VuePlugin({
                css: false,
            }),
            commonjs(),
            terser()
        ],
    },
]

