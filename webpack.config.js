const path=require('path');
const Terser=require('terser-webpack-plugin');
const minicss=require('mini-css-extract-plugin');
const {Cleanweb}=require('clean-webpack-plugin'); 

module.exports={
    entry:"./index.js",
    output:{
        filename:"bundle.[contenthash].js",
        path:path.resolve(__dirname,"./src")
    },
    mode:"none",
    module:{
        rules:[
            {
                test:/\.(png|jpg)$/,
                use:['file-loader']
            },
            {
                test:/\.css$/,
                use:[minicss.loader,'css-loader']
            }
        ]
    },
    plugins:[
        new Terser,
        new minicss({filename:'style.[contenthash].css'}),
        new Cleanweb()
    ]
}