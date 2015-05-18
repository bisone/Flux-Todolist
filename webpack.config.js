module.exports = {
  //entry: "./app/App.js",
  entry: {
    app: ['webpack/hot/dev-server', './app/App.js']
  },
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
