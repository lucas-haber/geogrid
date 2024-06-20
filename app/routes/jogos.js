var express = require('express');
var router = express.Router();
const Jogos = require('./models/jogos');
const Pergunta = require('./models/pergunta');
const Paises = require('./models/paises');
const Respostas = require('./models/respostas');



router.post('/cadastrar', async (req, res) => {
    const { numero, linhas, colunas } = req.body;

    try {
        // Buscar perguntas das linhas
        const perguntasLinhas = await Pergunta.find({
            texto: { $in: linhas.map(linha => linha.pergunta) }
        });

        // Buscar perguntas das colunas
        const perguntasColunas = await Pergunta.find({
            texto: { $in: colunas.map(coluna => coluna.pergunta) }
        });

        // Mapear as perguntas para facilitar a busca de 'busca' posteriormente
        const mapPerguntas = {};
        perguntasLinhas.concat(perguntasColunas).forEach(pergunta => {
            mapPerguntas[pergunta.texto] = pergunta.busca;
        });

        // Função para buscar os países com base nas buscas
        const buscarPaises = async (busca1, busca2) => {
            const paises = await Paises.find({ $and: [{ busca: busca1 }, { busca: busca2 }] }).sort({ nome: 1 });
            return paises.map(pais => pais.nome);
        };

        // Gerar as combinações de perguntas e buscar os países
        const respostas = {};
        for (let i = 0; i < linhas.length; i++) {
            for (let j = 0; j < colunas.length; j++) {
                const busca1 = mapPerguntas[linhas[i].pergunta];
                const busca2 = mapPerguntas[colunas[j].pergunta];
                const caixa = `caixa${i * colunas.length + j + 1}`;
                respostas[caixa] = await buscarPaises(busca1, busca2);
            }
        }

        // Criar o novo jogo
        const novoJogo = new Jogos({
            numero: numero,
            linhas: linhas,
            colunas: colunas
        });

        // Salvar o novo jogo
        await novoJogo.save();

        // Criar o novo conjunto de respostas
        const novasRespostas = new Respostas({
            numero: numero,
            ...respostas
        });

        // Salvar as novas respostas
        await novasRespostas.save();

        res.status(200).json({ jogo: novoJogo, respostas: novasRespostas });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/listar', async (req, res) => {
    try {
        let jogos = await Jogos.find().sort({ numero: -1 })
        res.status(200).json(jogos)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})


router.get('/jogo/:numero', async (req, res) => {
    try {
        const { numero } = req.params;
        let jogos = await Jogos.find({ numero: numero });
        res.status(200).json(jogos)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/deletar/:id', async (req, res) => {
    const { id } = req.params
    try {
        let jogos = await Jogos.findById(id)
        await jogos.delete()
        res.json({ message: "Jogo deletado com sucesso!" }).status(204)
    } catch (error) {
        res.status(500).json({ error })
    }
})

module.exports = router;