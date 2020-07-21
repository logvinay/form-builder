const path = require("path");

module.exports = {
    entry: {
        "form-builder": 'form-builder/index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname + 'packages'),
        publicPath: '/packages'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // sass-loader
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'ts-loader' }
                ]
            }
        ]
    },
    plugins: [
        
    ]
};