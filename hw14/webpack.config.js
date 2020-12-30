const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { webpack } = require('webpack');

module.exports = {

  entry:"./src/index.js", 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module:{
    rules:[{
      test: /\.m?js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"hw14",
      js:[
        
      ]
    })
  ]
}