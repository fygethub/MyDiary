const {resolve, join} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const autoprefixer = require('autoprefixer');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ROOT_PATH = process.cwd();
//项目根目录
module.exports = {
    devtool: 'inline-source-map',
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
        filename: '[name].js', //编译后的文件名字
        //output file name

        path: ROOT_PATH + '/dist',
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
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                      'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader',

                ]
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
            /*{
                test: /\.css$/,
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
                                postcss: [autoprefixer({browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8']})]
                            }
                        }
                    ]
                })
            }*/
        ]
    },


    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),

        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR)

        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
        new ExtractTextPlugin('[name].css'),

        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/template/index.html',
            inject: 'body',
            hash: true,
        }),
        new LoaderOptionsPlugin({
            options: {
                context: '/',
                postcss: function () {
                    return [autoprefixer({browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8']})];
                }
            }
        })
    ],

    resolve: {
        alias: {
            source: join(ROOT_PATH, '/src/source'),
            style: join(ROOT_PATH, 'src/style'),
            images: join(ROOT_PATH, 'src/images'),
            pureRender: join(ROOT_PATH, 'src/decorator/pureRender.js'),
            renderLog: join(ROOT_PATH, 'src/decorator/renderLog.js'),
        }
    }
}

