var express = require('express');
var router = express.Router();
const Pergunta = require('../models/perguntas');
const Paises = require('../models/paises');


router.post('/cadastrar', async (req, res) => {
    const { texto, busca } = req.body;
    let pergunta = new Pergunta({
        texto: texto,
        busca: busca
    })
    try {
        await pergunta.save();
        res.status(200).json(pergunta)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})


router.get('/listar', async (req, res) => {
    try {
        var pergunta = await Pergunta.find().sort({ _id: 1 })
        res.status(200).json(pergunta)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/buscarPais', async (req, res) => {
    const { busca } = req.query
    try {
        let listPaises = []
        let paises = await Paises.find(busca).sort({ nome: 1 })
        paises.map((pais) => {
            listPaises.push(pais.nome)
        })
        var resposta = {
            total: paises.lenght,
            lista: listPaises
        }
        res.status(200).json(resposta)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/buscarDuas', async (req, res) => {
    const { busca1, busca2 } = req.query
    try {
        let query = []
        query.push(busca1)
        query.push(busca2)
        let listPaises = []
        let paises = await Paises.find({ $and: query }).sort({ nome: 1 })
        paises.map((pais) => {
            listPaises.push(pais.nome)
        })
        var resposta = {
            total: paises.lenght,
            lista: listPaises
        }
        res.status(200).json(resposta)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/deletar/:id', async (req, res) => {
    const { id } = req.params
    try {
        let pergunta = await Pergunta.findById(id)
        await pergunta.delete()
        res.json({ message: "Pergunta deletada com sucesso!" }).status(204)
    } catch (error) {
        res.status(500).json({ error })
    }
})




module.exports = router;