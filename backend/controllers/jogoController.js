const express = require ('expess');
const router = express.Router();
const Jogos = require('../models').Jogo;

//Cadastro de Jogo
router.post('/', async (req, res) => {
    const {descricao} = req.body;
    const {titulo} = req.body;
    const {imagensJogo} = req.body;
    const {desenvolvedoraJogo} = req.body;
    const {dataLancamento} = req.body;
    const newEdit = await Jogos.create ({descricao, titulo, imagensJogo, desenvolvedoraJogo, dataLancamento})
    res.status(200).json({message: 'Cadastrado com sucesso'});
});

module.exports=router;