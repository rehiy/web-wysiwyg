import sh from 'shelljs';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';

//////////////////////////////////////////////////////////////////////

sh.rm('-rf', 'public');

export default {
    input: 'src/public-api.ts',
    output: {
        dir: 'public',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        copy({
            targets: [
                { src: 'src/assets/smiley', dest: 'public/assets/' }
            ]
        }),
        scss({
            fileName: 'assets/theme.css'
        }),
        typescript(),
        resolve({
            browser: true
        }),
        commonjs()
    ]
};
