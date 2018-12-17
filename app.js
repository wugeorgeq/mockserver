const express = require('express'), 
app = express(),
morgan = require('morgan');

var user = require('./models/user');

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function (req, res) {
  var bootStrappedUsers = user.bootStrappedUsers;
  console.log(bootStrappedUsers);
  res.send(bootStrappedUsers);
});

app.listen(5678, function () {
   console.log('listening on port 5678!');
});
