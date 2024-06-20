const mongoose = require('mongoose');

let perguntaSchema = new mongoose.Schema({
    texto: { type: String, required: true },
    busca: { type: String, required: true}
})

module.exports = mongoose.model('Pergunta', perguntaSchema)