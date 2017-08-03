var path = require('path');

module.exports = {
    entry: "./lib/entry.js",
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devtool: 'source-map'
};
