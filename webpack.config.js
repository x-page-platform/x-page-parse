var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'XPageParser.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'XPageParser',
    libraryTarget: 'umd'
  },
  watch: true
};
