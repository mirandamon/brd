const path = require('path')

module.exports = {
  context: __dirname,
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/public'
    //contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'app')]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ["style", "css", "sass"], exclude: /node_modules/ },
      { include: path.resolve(__dirname, 'js'), test: /\.jx$/, loader: 'babel-loader'},
      { include: path.resolve(__dirname, 'jsx'), test: /\.jsx$/, loader: 'babel-loader'},
      {
        test: /\.css$/,
          use: [
            'style-loader', // import CSS files as if they were JavaScript
            { // if you need to configure a loader, it needs to be an object
              loader: 'css-loader',
              options: {
                url: false // don't inline images
              }
            }
          ]
      }
    ]
  },
}
