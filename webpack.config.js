const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let htmlPageNames = ['dashboard'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `./src/public/views/dashboard/${name}.html`),
      filename: `${name}.html`, 
      chunks: [`${name}`],
    })
  });

//----------------------RULES---------------------------------//
const JSrules = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            ['@babel/preset-env'
        ]
    ]
    }
}
const CSS = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}

const IMG = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'img/[name][ext]'
    },
}

//------------------------CONFIG---------------------------------//
module.exports = {
    mode: 'development',
    entry: {
        index: './src/public/scripts/index.js',
        login: './src/public/scripts/login.js',
        signup: './src/public/scripts/signup.js',
        dashboard: './src/public/scripts/dashboard.js',
        index_cliente: './src/public/scripts/cliente/index.js',
    },
    output:{
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/public/views/index.html'),
            chunks: ['index'],
            minify: false, 
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: path.resolve(__dirname, './src/public/views/login.html'),
            chunks: ['login'],
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            template: path.resolve(__dirname, './src/public/views/signup.html'),
            chunks: ['signup'],
        }),
        new HtmlWebpackPlugin({
            filename: 'index_cliente.html',
            template: path.resolve(__dirname, './src/public/views/cliente/index.html'),
            chunks: ['index_cliente'],
        })
        
    ].concat(multipleHtmlPlugins),

    module: {
        rules:[
            JSrules, CSS, IMG
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }

}