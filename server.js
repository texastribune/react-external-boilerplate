const path = require('path');
const express = require('express');
const webpack = require('webpack');
const pug = require('pug');

const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.set('view engine', 'pug');
app.use(express.static('dist'));
app.use(require('webpack-hot-middleware')(compiler));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return false;
  }
  console.log('Listening at http://localhost:3000');
});
