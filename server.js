const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! I am studying IT')
})

app.get('/about', (req, res) => {
    res.send(`ITは難しいですか`)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

