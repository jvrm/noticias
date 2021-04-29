var mysql = require('mysql');
// PARA EVITAR QUE A CONEXÃO COM O MYSQL SEJA FEITA QUANDO A APLICAÇÃO RODAR POR CAUSA DO CONSIGN, FOI NECESSÁRIO
// COLOCAR OS CÓDIGOS DENTRO DE UMA VARIÁVEL E EXPORTÁ-LA COMO FUNÇÃO, DESSA MANEIRA QUANDO O CONSIGN DER O AUTOLOAD, NÃO IRÁ
// EXECUTAR A CONEXÃO COM O BANCO, APENAS QUANDO ELA FOR REQUISITADA

var connMySql = function (){
    console.log("Conexão com o bd foi estabelecida")
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function () {
   return connMySql;
}
        