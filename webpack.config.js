const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./build/index.html", 
  filename: "./index.html"
});

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "build"),
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin],
    module: {
        rules: [{ 
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        open: true,
        port: process.env.PORT || 8080
    }
};

