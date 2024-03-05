const path = require("path");


module.exports = {
    mode: "production",
    entry:{
        main: "./src/js/plugins/main.js",
    },

    output:{
        clean: true,
        filename:"[name].js",
        path: path.resolve(__dirname, "js/plugins"),
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    {
                      loader: "sass-loader",
                      options: {
                        sourceMap: true,
                      },
                    },
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ]
    }
}