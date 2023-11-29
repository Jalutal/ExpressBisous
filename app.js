const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const mockCoworkings = require('./mock-coworking')
const coworkings = require('./mock-coworking')

app.use(express.json())

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/api/coworkings', (req, res) => {
    // Afficher la phrase : Il y a ... coworkings dans la liste. 
    res.send(`Il y a ${mockCoworkings.length} coworkings dans la liste.`)
})

app.get('/api/coworkings/:id', (req, res) => {
    let result = mockCoworkings.find(el => el.id === parseInt(req.params.id))

    if (!result) {
        result = `Aucun élément ne correspond à l'id n°${req.params.id}`
    }
    res.send(result)
})

app.post('/api/coworkings', (req, res) => {
    const newArray = co.map(function(currentValue, index, array) {
        
      });
    res.send(`Post ok`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})