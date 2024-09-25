const db = require('mongoose')

db.Promise = global.Promise

async function conectar(url){
    await db.connect(url, {dbname: 'miapp'})
    .then (() => console.log)
}

module.exports = conectar