const express = require ('express');
const router = express.Router();
const Jogador = require('../models').Jogador;

router.post('/', async (req, res) => {
    const {nome} = req.body;
    const {email} = req.body;
    const {data_de_registro} = req.body;
    const newEdit = await Categoria.create({nome, email, data_de_registro})
    res.status(200).json({message: 'Cadastro com suscesso'});
});    
module.exports=router;
