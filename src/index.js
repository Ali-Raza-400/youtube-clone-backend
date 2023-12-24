
const express = require('express')
const app = express()
const port = 3000

app.get('/api/cars', (req, res) => {
    let cars = [
        {
          "color": "purple",
          "type": "minivan",
          "registration": new Date('2017-01-03'),
          "capacity": 7
        },
        {
          "color": "red",
          "type": "station wagon",
          "registration": new Date('2018-03-03'),
          "capacity": 5
        },]
  res.send({cars})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})