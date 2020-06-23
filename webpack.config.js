const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



//Configuracion del WEBPACK
module.exports = {
    //JS
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module: {
        //CSS
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    //HTML
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};