var path = require("path");

const config = {
    entry: {
        app: ['./src/main.tsx']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    }
};

module.exports = config;
