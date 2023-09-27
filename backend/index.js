const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')
const app =  express();
const port = 3000;

const jogo = require('./controllers/jogoController.js');

app.use(bodyParser.json());
app.use(cors())
app.use('/jogo', jogo);
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))
