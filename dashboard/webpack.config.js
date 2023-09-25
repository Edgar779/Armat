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
            app: path.resolve(__dirname, 'app'),
            assets: path.resolve(__dirname, 'assets'),
            images: path.resolve(__dirname, 'assets.images'),
            components: path.resolve(__dirname, 'components'),
            fragments: path.resolve(__dirname, 'fragments'),
            page: path.resolve(__dirname, 'page'),
            router: path.resolve(__dirname, 'router'),
            store: path.resolve(__dirname, 'store'),
            utils: path.resolve(__dirname, 'utils'),
        },
        fallback: {
            fs: false,
            os: false,
            path: false,
        },
    },
};
