const path = require('path');
const PATH_VIEWS = './src/';
const PATH_ASSETS = './public/assets/';

module.exports = {
    entry: {
        main: `${PATH_VIEWS}form/index.ts`
    },
    output: {
        path: path.resolve(__dirname, PATH_ASSETS),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};