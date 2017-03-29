const {resolve, join} = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const autoprefixer = require('autoprefixer');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ROOT_PATH = process.cwd();
//项目根目录
module.exports = {
    devtool: 'hidden-source-map',
    entry:resolve(ROOT_PATH, 'src/dev.js'),
    output: {
        filename: '[name].[chunkhash].js', //编译后的文件名字
        //output file name

        path: ROOT_PATH + '/build',
        //output file path dir
        publicPath: '/'
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
                            "style-loader",
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap: false,
                                    modules: true,
                                    importLoaders: true,
                                    localIndentName: "[name]__[local]___[hash:base64:5]"
                                }
                            },
                            "postcss-loader",
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true,
                                }
                            }
                    ]
                })
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                exclude: /^node_modules$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg)$/,
                exclude: /^node_modules$/,
                //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '8192',
                            name: 'images/[hash:8].[name].[ext]'
                        }
                    },
                ]
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('product')}),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/template/index.html',
            inject: true,
            hash: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: true, // remove all comments
            },
            compress: {
                warnings: true
            }
        }),
        new LoaderOptionsPlugin({
            options: {
                context: '/',
                postcss: function () {
                    return [autoprefixer];
                }
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

