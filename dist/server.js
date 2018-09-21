'use strict';

require('@babel/polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _product = require('./controllers/product');

var _product2 = _interopRequireDefault(_product);

var _thailand = require('./controllers/thailand');

var _thailand2 = _interopRequireDefault(_thailand);

var _customer = require('./controllers/customer');

var _customer2 = _interopRequireDefault(_customer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').load();


var app = (0, _express2.default)();
var port = process.env.PORT || 8000;

app.use((0, _cors2.default)());

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));

app.use('/product', _product2.default);
app.use('/thailand', _thailand2.default);
app.use('/customer', _customer2.default);

app.listen(port, function () {
  console.log('Starting node.js on port ' + port);
});
//# sourceMappingURL=server.js.map