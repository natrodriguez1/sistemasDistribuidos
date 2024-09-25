const express = require('express')
const express = require('body-parser')

const config = require('./config')
const db = require('./db')

var app = express()
db(config.URL)

app.use( body_parser.json() )
app.use( body_parser.urlencoded({extended:false}) )

app.listen(config.PORT)
console.log('la aplicación se encuentra arriba en http://localhost:3000')