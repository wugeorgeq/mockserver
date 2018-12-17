import express from 'express'
const app = express()
import morgan from 'morgan'

import * as user from './models/user.js'
import * as logger from './utils/logger.js'

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/users', function (req, res) {
  let bootStrappedUsers = user.bootStrappedUsers
  logger.logResponse(bootStrappedUsers)
  res.send(bootStrappedUsers)
})

app.listen(5678, function () {
   console.log('listening on port 5678!')
});
