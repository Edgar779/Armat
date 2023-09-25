const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'menuDrower.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults',
                                    },
                                ],
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'components'),
            constants: path.resolve(__dirname, 'constants'),
            hooks: path.resolve(__dirname, 'hooks'),
            images: path.resolve(__dirname, 'assets.images'),
            pages: path.resolve(__dirname, 'pages'),
            root: path.resolve(__dirname, 'root'),
            store: path.resolve(__dirname, 'store'),
            utils: path.resolve(__dirname, 'utils'),
            theme: path.resolve(__dirname, 'theme'),
            assets: path.resolve(__dirname, 'assets'),
            contexts: path.resolve(__dirname, 'contexts'),
        },
    },
};
