const express = require('express')
const routes = express.Router()

const VeiculosController = require('./controllers/VeiculosController')

routes.get('/',(req, res)=>{
    res.render('veiculos/index')
})

routes.get('/veiculos', VeiculosController.index)

routes.post('/veiculos', VeiculosController.store)

routes.get('/veiculos/:id', VeiculosController.show)

routes.put('/veiculos/:id', VeiculosController.edit)

routes.delete('/veiculos/:id', VeiculosController.delete)

routes.get('/veiculos/search/:marca', VeiculosController.search)


module.exports = routes