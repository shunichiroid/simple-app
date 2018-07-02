const express = require('express')
const ig = require('instagram-node').instagram()
const app = express()

require('dotenv').config();

app.use(express.static(__dirname + '/public'))
ig.use({
    access_token: process.env.INSTAGRAM_TOKEN
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    ig.user_self_media_recent((err, medias, pagination, remaining, limit) => {
        res.render('pages/index', { grams: medias })
    })

})

app.listen(8080)
console.log('Server has started');