const path = require('path');

module.exports = {
  entry: './src/ts/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
               loader: 'style-loader'
            }, {
               loader: 'css-loader'
            }, {
               loader: 'sass-loader'
            }]
        }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
  ]
};