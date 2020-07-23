const knex = require('../database/connection')

module.exports = {
    async index(req, res){
        try {
            const response = await knex.from('automoveis').select('*')
            return res.status(200).send({response})
            if(response == null){
                return res.status(404).send({mensagem: 'Nenhum veiculo encontrado!'})
            }
        } catch (error) {
            return res.status(500).send({mensagem: 'Problema interno', erro: error})
        }
    },
    async store(req, res){
        const {veiculo, marca, ano, descricao} = req.body
        if(veiculo == null){
            return res.status(400).send({mensagem: "Dados vazios"})
        }

        const dados = {
            veiculo,
            marca,
            ano, 
            descricao,
            vendido: false
        }

        try {
            const response = await knex.insert(dados).into('automoveis')
            if(!response){
               return res.status(501).send({mensagem: "Falha ao salvar!"})
            }
            return res.status(201).send({mensagem: "Veiculo cadastrado!"})
        } catch (error) {
            return res.status(500).send({mensagem: "Falha interna", error})
        }
    },
    async show(req, res){
        const {id} = req.params

        try {
            const response = await knex.from('automoveis').select('*').where('id', id)
            if(response == ''){
                return res.status(404).send({mensagem: "Esse carro não se encontra mais aqui!"})
            }
            return res.status(200).send({dados: response})
            
        } catch (error) {
            return res.status(500).send({mensagem: "Falha interna", error})
        }
    },

    async edit(req, res){
        const {id} = req.params
        const {veiculo, marca, ano, descricao, vendido} = req.body
        if(!veiculo){
            return res.status(400).send({mensagem: 'Dados vazios!'})
        }
        const dados = {
            veiculo,
            marca,
            ano, 
            descricao,
            vendido
        }

        try {
            const response = await knex('automoveis').where('id', id).update(dados)
            if(response != 1){
                return res.status(404).send({mensagem: 'Não foi possivel editar!'})
            }
            return res.status(200).send({mensagem: 'Veiculo atualizado!'})
        } catch (error) {
            return res.status(500).send({mensagem: 'Falha interna!', error})
        }
    },
    async delete(req, res){
        const {id} = req.params

        try {
            const response = await knex('automoveis').where('id', id).del()
            if(response != 1){
                return res.status(400).send({mensagem: 'Não foi possível excluir esse veiculo'})
            }
            return res.status(200).send({mensagem: 'Deletado!'})
        } catch (error) {
            return res.status(500).send({mensagem: 'Falha interna', error})
        }
    },
    async search(req, res){
        const {marca} = req.query

        try {
            const response = await knex('automoveis').where('marca', 'like', `%${marca}%`)
            
            if(response == ''){
                return res.status(404).send({mensagem: 'Não encontrado!'})
            }

            return res.status(200).send({dados:response})
        } catch (error) {
            return res.status(501).send({mensagem: 'Falha interna', error})
        }
    }
}