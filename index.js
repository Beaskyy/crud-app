const express = require('express');
const app = express();

const server = app.get('/', (req, res) => {
  res.json({
    message: "Hello beasky"
  })
})

server.listen(3000, () => {
  console.log('listening on port 3000...')
})