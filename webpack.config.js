const path = require("path");

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.js'
    },
    // loader
    module: {
        rules: [{ 
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 3003
    }
};

