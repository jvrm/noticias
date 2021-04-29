var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public')); //Coloca os arquivos como se fossem na raiz do app
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(expressValidator());

consign() //O CONSIGN QUANDO É CHAMADO EXECUTA TODAS AS FUNÇÕES, PORTANTO PRECISA BLOQUEAR A CONEXÃO COM O MYSQL PARA NÃO EXECUTAR TODA VEZ QUE A APLICAÇÃO RODAS
    .include('./app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controller')
    .into(app);


module.exports = app;