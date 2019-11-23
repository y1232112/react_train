const path = require('path');
const webpack = require('webpack');

module.exports = function(env,argv) {
  const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
  const isEnvProduction = argv.mode === 'production';

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
    entry: [
                'react-hot-loader/patch',
               './src/index.js', ],
    output: {
      filename:'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/react-train',
    },
    

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test:/\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ]
        },
    ]
    },
    devServer:{
      hot:true,
      contentBase: path.resolve(__dirname, 'dist'),
      
    },
    plugins:[
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
};