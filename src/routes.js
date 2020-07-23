const express = require('express')
const routes = express.Router()

const VeiculosController = require('./controllers/VeiculosController')


routes.get('/veiculos', VeiculosController.index)

routes.post('/veiculos', VeiculosController.store)

routes.get('/veiculos/search', VeiculosController.search)

routes.get('/veiculos/:id', VeiculosController.show)

routes.put('/veiculos/:id', VeiculosController.edit)

routes.delete('/veiculos/:id', VeiculosController.delete)



module.exports = routes