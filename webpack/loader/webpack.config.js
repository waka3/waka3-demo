const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|gif|jpg|svg)$/,
        use: ['file-loader']
      }, {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        use: ['file-loader']
      }, {
        test: /\.xml$/,
        use: ['xml-loader']
      }, {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      }
    ]
  }
};