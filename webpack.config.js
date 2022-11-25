const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/assets/js/index.js'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/assets/dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: '../css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            },
            
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
            
        ],
       
    }
}
