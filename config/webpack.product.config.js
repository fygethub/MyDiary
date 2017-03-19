const {resolve, join} = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

const ROOT_PATH = process.cwd();
//项目根目录
module.exports = {
    devtool: 'hidden-source-map',
    entry: [
        "react-hot-loader/patch",
        //开启React 代码的模块热替换
        "webpack-hot-middleware/client",
        // 为 webpack-dev-server 的环境打包代码
        // 然后连接到指定服务器域名与端口

        "webpack/hot/only-dev-server",
        // 为热替换(HMR)打包好代码
        // only- 意味着只有成功更新运行代码才会执行热替换(HMR)

        resolve(ROOT_PATH, 'src/index.js')

    ],
    output: {
        filename: '[name].[chunkhash].js', //编译后的文件名字
        //output file name

        path: ROOT_PATH + '/build',
        //output file path dir

        publicPath: '/'
        // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
    },

    context: ROOT_PATH,

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            }, {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: true,
                                importLoaders: true,
                                localIndentName: "[name]__[local]___[hash:base64:5]"
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require('precss'),
                                        require("autoprefixer")(),
                                        require('postcss-import')({
                                            addDependencyTo: webpack
                                        })
                                    ];
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('product')}),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/template/index.html',
            inject: 'body',
            hash: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        __dirname: true,
        __filename: true
    }
}

