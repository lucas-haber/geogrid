var express = require('express');
var router = express.Router();
const Paises = require('../models/paises');

router.post('/cadastrar', async (req, res) => {
    const {
        nome,
        populacao,
        cores_bandeira,
        estrela_na_bandeira,
        continente,
        IDH,
        GPD_per_capita,
        medalhas_olimpicas,
        ilha,
        tamanho,
        sem_mar,
        tamanho_litoral,
        capital_populacao,
        fronteiras,
        uniao_europeia,
        capital_maior,
        jogou,
        hospedou,
        ganhou,
        fronteira_com,
        dirige,
        bomba_nuclear,
        espanhol,
        frances,
        portugues,
        arabe,
        atlantico,
        pacifico,
        indico,
        mediterraneo,
        prefix
    } = req.body;

    let pais = new Paises({
        nome: nome,
        dados: {
            populacao: populacao,
            bandeira: {
                cores_bandeira: cores_bandeira,
                estrela_na_bandeira: estrela_na_bandeira
            },
            continente: continente,
            IDH: IDH,
            GPD_per_capita: GPD_per_capita,
            medalhas_olimpicas: medalhas_olimpicas,
            ilha: ilha,
            tamanho: tamanho,
            sem_mar: sem_mar,
            tamanho_litoral: tamanho_litoral,
            capital_populacao: capital_populacao,
            fronteiras: fronteiras,
            uniao_europeia: uniao_europeia,
            capital_maior: capital_maior,
            copa_fifa: {
                jogou: jogou,
                hospedou: hospedou,
                ganhou: ganhou
            },
            fronteira_com: fronteira_com,
            dirige: dirige,
            bomba_nuclear: bomba_nuclear,
            linguas: {
                espanhol: espanhol,
                frances: frances,
                portugues: portugues,
                arabe: arabe
            },
            litoral_com: {
                atlantico: atlantico,
                pacifico: pacifico,
                indico: indico,
                mediterraneo: mediterraneo
            },
            prefix: prefix
        }
    });

    try {
        await pais.save();
        res.status(200).json(pais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/multicad', async (req, res) => {
    const paises = req.body.map(pais => ({
        nome: pais.nome,
        dados: {
            populacao: pais.populacao,
            bandeira: {
                cores_bandeira: pais.bandeira.cores_bandeira,
                estrela_na_bandeira: pais.bandeira.estrela_na_bandeira
            },
            continente: pais.continente,
            IDH: pais.IDH,
            GPD_per_capita: pais.GPD_per_capita,
            medalhas_olimpicas: pais.medalhas_olimpicas,
            ilha: pais.ilha,
            tamanho: pais.tamanho,
            sem_mar: pais.sem_mar,
            tamanho_litoral: pais.tamanho_litoral,
            capital_populacao: pais.capital_populacao,
            fronteiras: pais.fronteiras,
            uniao_europeia: pais.uniao_europeia,
            capital_maior: pais.capital_maior,
            copa_fifa: {
                jogou: pais.copa_fifa.jogou,
                hospedou: pais.copa_fifa.hospedou,
                ganhou: pais.copa_fifa.ganhou
            },
            fronteira_com: pais.fronteira_com,
            dirige: pais.dirige,
            bomba_nuclear: pais.bomba_nuclear,
            linguas: {
                espanhol: pais.linguas.espanhol,
                frances: pais.linguas.frances,
                portugues: pais.linguas.portugues,
                arabe: pais.linguas.arabe
            },
            litoral_com: {
                atlantico: pais.litoral_com.atlantico,
                pacifico: pais.litoral_com.pacifico,
                indico: pais.litoral_com.indico,
                mediterraneo: pais.litoral_com.mediterraneo
            },
            prefix: pais.prefix
        }
    }));

    try {
        const paisesSalvos = await Paises.insertMany(paises);

        res.status(200).json(paisesSalvos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/listar', async (req, res) => {
    try {
        var paises = await Paises.find().sort({ nome: 1 })
        res.status(200).json(paises)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/deletar/:id', withAuth, async (req, res) => {
    const { id } = req.params
    try {
        let paises = await Paises.findById(id)
        await paises.delete()
        res.json({ message: "País deletado com sucesso!" }).status(204)

    } catch (error) {
        res.status(500).json({ error })
    }
})




module.exports = router;