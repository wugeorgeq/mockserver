'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _user = require('./models/user.js');

var user = _interopRequireWildcard(_user);

var _logger = require('./utils/logger.js');

var logger = _interopRequireWildcard(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


app.use((0, _morgan2.default)('dev'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
  var bootStrappedUsers = user.bootStrappedUsers;
  logger.logResponse(bootStrappedUsers);
  res.send(bootStrappedUsers);
});

app.listen(5678, function () {
  console.log('listening on port 5678!');
});