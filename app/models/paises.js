const mongoose = require('mongoose');

let paisesSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    dados: {
        populacao: { type: Number, required: true },
        bandeira: {
            cores_bandeira: { type: String, required: true },
            estrela_na_bandeira: { type: Boolean, required: true },
        },
        continente: { type: String, required: true },
        IDH: { type: Number, required: true },
        GPD_per_capita: { type: Number, required: true },
        medalhas_olimpicas: { type: Number, required: true },
        ilha: { type: Boolean, required: true },
        tamanho: { type: Number, required: true },
        sem_mar: { type: Boolean, required: true },
        tamanho_litoral: { type: Number, required: true },
        capital_populacao: { type: Number, required: true },
        fronteiras: { type: Number, required: true },
        uniao_europeia: { type: Boolean, required: true },
        capital_maior: { type: Boolean, required: true },
        copa_fifa: {
            jogou: { type: Boolean, required: true },
            hospedou: { type: Boolean, required: true },
            ganhou: { type: Boolean, required: true },
        },
        fronteira_com: { type: String, required: true },
        dirige: { type: String, required: true },
        bomba_nuclear: { type: Boolean, required: true },
        linguas: {
            espanhol: { type: Boolean, required: true },
            frances: { type: Boolean, required: true },
            portugues: { type: Boolean, required: true },
            arabe: { type: Boolean, required: true },
        },
        litoral_com: {
            atlantico: { type: Boolean, required: true },
            pacifico: { type: Boolean, required: true },
            indico: { type: Boolean, required: true },
            mediterraneo: { type: Boolean, required: true },
        },
        prefix: { type: String, required: true }
    }
})

module.exports = mongoose.model('Paises', paisesSchema)