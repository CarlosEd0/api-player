const express = require ('express');
const router = express.Router();
const Genero = require('../models').Genero;

// Cadastar gênero
router.post('/add', async (req, res) => {
    const {descricao} = req.body;
    const newEdit = await Genero.create({descricao})
    res.status(200).json({message: 'Cadastro com suscesso', newEdit});
}); 

// Buscar todos os gêneros 
router.get('/all', async (req, res) => {
    const generos = await Genero.findAll();
    res.status(200).json(generos);
});

// Fim do Controller Jogador 
module.exports=router;
