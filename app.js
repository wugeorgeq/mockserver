// 1
const express = require('express'), 
app = express(),
morgan = require('morgan');

// 2
app.use(morgan('dev'));

// 3
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 4
app.listen(5678, function () {
   console.log('listening on port 5678!');
});

