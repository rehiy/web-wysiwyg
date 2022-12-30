import serve from 'rollup-plugin-serve'

import config from './build.js';

//////////////////////////////////////////////////////////////////////

config.plugins.push(serve({
    contentBase: ['example', 'public'],
    host: 'localhost',
    port: 8200
}));

config.watch = {
    include: 'src/**'
};

export default config;
