module.exports = {
    plugins:
        // process.env.NODE_ENV === 'production'
        //     ?
        [
            //   [
            //       '@fullhuman/postcss-purgecss',
            //       {
            //           content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
            //           safelist: { greedy: ['/Mui$/', '/slick$/'] },
            //       },
            //   ],
            'postcss-flexbugs-fixes',
            [
                'postcss-preset-env',
                {
                    autoprefixer: {
                        flexbox: 'no-2009',
                    },
                    stage: 3,
                    features: {
                        'custom-properties': false,
                    },
                },
            ],
            // [
            //   'postcss-preset-env',
            //   {
            //     browsers: 'last 2 versions',
            //     stage: 4,
            //   },
            // ],
        ],
    // : [
    //       // No transformations in development
    //   ],
};
