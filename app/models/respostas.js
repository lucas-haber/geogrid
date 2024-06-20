const mongoose = require('mongoose');

let respostasSchema = new mongoose.Schema({
    numero: { type: Number, required: true },
    caixa1: {
        type: [String],
        required: true
    },
    caixa2: {
        type: [String],
        required: true
    },
    caixa3: {
        type: [String],
        required: true
    },
    caixa4: {
        type: [String],
        required: true
    },
    caixa5: {
        type: [String],
        required: true
    },
    caixa6: {
        type: [String],
        required: true
    },
    caixa7: {
        type: [String],
        required: true
    },
    caixa8: {
        type: [String],
        required: true
    },
    caixa9: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('Respostas', respostasSchema)