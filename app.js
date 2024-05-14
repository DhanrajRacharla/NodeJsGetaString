const express = require('express')
const app = express()

app.get('/', (request, response) => {
  //console.log("Express JS");
  response.send('Express JS')
})

app.listen(3000, (req, res) => {
  console.log('Running')
})

module.exports = app
