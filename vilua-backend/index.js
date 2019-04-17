const express = require('express')
const app = express()

let info = [
  {
    id: 0,
    text: 'Vilua on Viherlaakson lukion alumniyhdistys.'
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Täällä on tyhjää<h2>')
})

app.get('/info', (request, response) => {
  response.json(info)
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)