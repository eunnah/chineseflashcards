var path = require('path');

module.exports = {
    entry: "./lib/entry.js",
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: [/\.jsx?$/], // Specifies file types to transpile
            exclude: /(node_modules)/, // Leaves dependencies alone
            loader: 'babel-loader', // Sets Babel as the transpiler
            query: {
              presets: ['es2015', 'react'] // Tells Babel what syntaxes to translate
            }
          }
        ]
    },
    devtool: 'source-map'
};
