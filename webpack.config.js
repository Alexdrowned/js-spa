const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        home: path.resolve(__dirname,'src/index.js')    
    },
    mode :'development',
    output:{
        path:resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extension: [".js"]
    },
    module: {
        rules: [
            {
                test : /\.js?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            inject: true,
            template: "./src/public/index.html",
            filename : "./index.html"
        }),
        new CopyWebPackPlugin({
            from : "./src/styles/style.css",
            to : ""
        })
    ]
}
