const express = require ('express');
const router = express.Router();
const Jogos = require('../models').Jogo;

//Cadastro de Jogo
router.post('/add', async (req, res) => {
    const {descricao} = req.body;
    const {titulo} = req.body;
    const {imagensJogo} = req.body;
    const {desenvolvedoraJogo} = req.body;
    const {dataLancamento} = req.body;
    const newEdit = await Jogos.create ({descricao, titulo, imagensJogo, desenvolvedoraJogo, dataLancamento});
    res.status(200).json({message: 'Cadastrado com sucesso', newEdit});
});

// Buscar todos os jogos 
router.get('/all', async (req, res) => {
    const jogos = await Jogos.findAll();
    res.status(200).json(jogos);
});

//Altera Jogo por ID (PUT)
router.put('/:id', async (req, res) => {
    const {descricao} = req.body;
    const {titulo} = req.body;
    const {imagensJogo} = req.body;
    const {desenvolvedoraJogo} = req.body;
    const {dataLancamento} = req.body;

    await Jogos.update(
        { descricao, titulo, imagensJogo, desenvolvedoraJogo, dataLancamento},
        {
            where: {id:req.params.id},
        }
        
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
});

router.delete('/:id', async (req, res) =>{
    await Jogos.destroy({
        where:{
            id: req.params.id,
        },
    });
    res.status(200).json({message: 'Excluído com sucesso'})
});

module.exports=router;