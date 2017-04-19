console.log("-----",process.env.NODE_ENV,"-----");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./config/webpack.config');
const express = require('express');
const clearConsole = require('react-dev-utils/clearConsole');
const openBrowser = require('react-dev-utils/openBrowser');
const path = require('path');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

const compiler = webpack(config);
const app = express();

// serve static assets normally
//app.use(express.static(__dirname + '/dist'))


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
    contentBase: config.output.path,
    stats: {
        color: true,
    }
}))

app.use(require('webpack-hot-middleware')(compiler));

//将其他路由，全部返回index.html
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname , 'dist','index.html'));
});




app.listen(PORT, function() {
    clearConsole();
    console.log('正常打开'+ PORT +':端口');

});
openBrowser('http://localhost'  + ':' + PORT + '/');