const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/dev/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Asegúrate de que el publicPath esté configurado
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        // Añade esta regla para manejar imágenes y otros archivos estáticos
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // Para que Webpack gestione las imágenes
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Cambiar 'src/dev' a 'public'
    },
    compress: true,
    port: 3011,
    historyApiFallback: true, // Para manejar el enrutamiento en aplicaciones SPA
  },
};
