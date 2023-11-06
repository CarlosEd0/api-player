const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')
const app =  express();
const port = 3000;

const jogo = require('./controllers/jogoController.js');
const jogador = require('./controllers/jogadorController.js');
const genero = require('./controllers/generoController.js');

app.use(bodyParser.json());
app.use(cors())
app.use('/jogo', jogo);
app.use('/jogador', jogador);
app.use('/genero', genero);

app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))
