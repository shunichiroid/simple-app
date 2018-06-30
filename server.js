const express = require('express')
const ig = require('instagram-node').instagram()

const app = express()

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(8080)
console.log('Server has started');