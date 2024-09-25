const express = require('express')
const express = require('body-parser')

var app = express()
app.use( body_parser.json() )
app.use( body_parser.urlencoded({extended:false}) )

app.listen(3000)
console.log('la aplicación se encuentra arriba en http://localhost:3000')