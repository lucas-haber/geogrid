const mongoose = require('mongoose');

let raridadeSchema = new mongoose.Schema({
    numero: { type: Number, required: true },
    caixa1: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    },
    caixa2: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    },
    caixa3: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    },
    caixa4: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    },
    caixa5: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    },
    caixa6: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    },
    caixa7: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    },
    caixa8: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    },
    caixa9: {
        total: { type: Number, required: true },
        paises: [
            {
                pais: { type: String, required: true },
                numeros: { type: Number, required: true },
            }
        ]
    }
})

module.exports = mongoose.model('Raridade', raridadeSchema)