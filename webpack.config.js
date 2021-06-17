const path = require('path');

module.exports = {
    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, "build"),
        filename: 'bundle.js'
    },
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
        port: 3001
    }
};

