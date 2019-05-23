

exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    const ImageminPlugin = require('imagemin-webpack-plugin').default
    const imageminMozjpeg = require('imagemin-mozjpeg');
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                    // We don't need to add the matching ExtractText plugin
                    // because gatsby already includes it and makes sure its only
                    // run at the appropriate stages, e.g. not in development
                    loaders.miniCssExtract(),
                    loaders.css({ importLoaders: 1 }),
                    // the postcss loader comes with some nice defaults
                    // including autoprefixer for our configured browsers
                    loaders.postcss(),
                    `less-loader`,
                    ],
                },
            ],
        },
    plugins: [
        plugins.define({
            __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
        }),
        new ImageminPlugin({
            jpegtran: {
                progressive: true
            },
        }),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '95-100'
            },
            optipng: {
                optimizationLevel: 9
            },
            plugins: [imageminMozjpeg({quality: 80})]
        }),
      ],
    })
  }