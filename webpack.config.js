var webpack = require('webpack'),
    path = require('path'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    DtsBundleWebpack = require('dts-bundle-webpack'),
    packageJson = require('./package.json');

const handler = (percentage, message, ...args) => {
    console.info(`${(percentage * 100).toFixed(2)}%`, message, ...args);
};

var configuration = (env, argv) => {

    console.info("Starting Build..");

    var libraryName = 'moderndesign',
        plugins = [],
        isProductionBuild = env.production;

    var entry = {};

    if (isProductionBuild) {
        entry[libraryName + '.min'] = path.resolve(__dirname, 'index.ts');
        plugins.push(new DtsBundleWebpack({
            name: libraryName,
            main: "declaration/index.d.ts",
            out: `../package/${libraryName}.d.ts`,
            removeSource: false,
        }))
    }
    else {
        entry[libraryName] = path.resolve(__dirname, 'index.ts');
    }

    plugins.push(new webpack.ProgressPlugin(handler));

    if (isProductionBuild) {
        var fs = require('fs');
        var libraryPackageJson = {
            name: libraryName,
            version: packageJson.version,
            author: packageJson.author,
            main: `${libraryName}.min.js`,
            types: `${libraryName}.d.ts`,
            dependencies: packageJson.dependencies,
            license: packageJson.license
        }
        console.log("Writing package.json file");
        var directory = path.resolve(__dirname, 'package');
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        var file = path.resolve(directory, 'package.json');
        fs.writeFile(file, JSON.stringify(libraryPackageJson, null, '\t'), err => {
            if (err) throw err;
            console.log(`Writing package.json file for library ${libraryName}`);
        });
    }

    var config = {
        entry: entry,
        devtool: isProductionBuild ? "" : 'source-map',
        output: {
            path: path.resolve(__dirname, "package"),
            filename: "[name].js",
            library: libraryName,
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
            ]
        },
        resolve: {
            extensions: ['.js', '.ts', '.jsx', '.tsx']
        },
        optimization: {
            minimize: isProductionBuild,
            minimizer: [
                new UglifyJsPlugin({
                    parallel: true,
                    uglifyOptions: {
                        output: {
                            comments: false,
                        },
                    }
                })
            ]
        },
        plugins: plugins,
    };

    return config;
}

module.exports = configuration;