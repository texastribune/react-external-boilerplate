const express = require('express');
const webpack = require('webpack'); // eslint-disable-line
const hotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
const devMiddleware = require('webpack-dev-middleware'); // eslint-disable-line

const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.set('view engine', 'pug');
app.use(express.static('dist'));

app.use(hotMiddleware(compiler));
app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
  res.render('index', {});
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err); // eslint-disable-line
    return false;
  }

  // eslint-disable-next-line
  console.log('Listening at http://localhost:3000');
  return true;
});
