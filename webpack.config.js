const path = require("path");

module.exports = {
    mode: "development",
    "entry": path.resolve(__dirname, `src`, `app`),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            // any files with .js or maybe x at the end
            // which means js or jsx, matches the test
            test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }
};