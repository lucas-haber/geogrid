const mongoose = require('mongoose');

let rankSchema = new mongoose.Schema({
    numero: { type: Number, required: true },
    total: {type: Number, required: true},
    posicao: {
        type: [Number],
        required: true
    }
})

module.exports = mongoose.model('Rank', rankSchema)