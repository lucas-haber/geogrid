const mongoose = require('mongoose');

let jogosSchema = new mongoose.Schema({
    numero: { type: Number, required: true },
    linhas: [
        {
            pergunta: { type: String, required: true }
        }
    ],
    colunas: [
        {
            pergunta: { type: String, required: true }
        }
    ],
    
})

module.exports = mongoose.model('Jogos', jogosSchema)