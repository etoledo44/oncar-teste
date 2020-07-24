require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

app.set('view engine', 'ejs')
app.use(cors())

app.use(express.static('../public'))

app.use(express.json())

app.use(routes)

const PORT = 3333
app.listen(PORT, ()=>{
    console.log(`Aplicação rodando na porta: ${PORT}`)
})