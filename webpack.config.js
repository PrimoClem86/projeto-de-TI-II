const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './assets/js/main.js',
    abastecimento: './assets/js/abastecimento.js',
    cadastro: './assets/js/cadastro.js',
    chegada: './assets/js/chegada.js',
    entrega: './assets/js/entrega.js',
    estatistica: './assets/js/estatistica.js',
    login: './assets/js/login.js',
    veiculos: './assets/js/veiculos.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './pages/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './pages/login.html',
      filename: 'login.html',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      template: './pages/cadastro.html',
      filename: 'cadastro.html',
      chunks: ['cadastro']
    }),
    new HtmlWebpackPlugin({
      template: './pages/abastecimento.html',
      filename: 'abastecimento.html',
      chunks: ['abastecimento']
    }),
    new HtmlWebpackPlugin({
      template: './pages/chegada.html',
      filename: 'chegada.html',
      chunks: ['chegada']
    }),
    new HtmlWebpackPlugin({
      template: './pages/entrega.html',
      filename: 'entrega.html',
      chunks: ['entrega']
    }),
    new HtmlWebpackPlugin({
      template: './pages/estatistica.html',
      filename: 'estatistica.html',
      chunks: ['estatistica']
    }),
    new HtmlWebpackPlugin({
      template: './pages/veiculos.html',
      filename: 'veiculos.html',
      chunks: ['veiculos']
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
