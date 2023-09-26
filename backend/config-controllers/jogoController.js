const express = require ('expess');
const router = express.Router();
const Jogos = require('../models').Jogos;

router.post('/', async (req, res) => {
    const {descricao} = req.body;
    const newEdit = await Jogos.create ({descricao})
    res.status(200).json({message: 'Cadastrado com sucesso'});
});