function noticiasModel(connection){ //Cria uma classe e a função prototype adiciona métodos à classe, para adicionar uma variável, pode se usar this._<nome da variavel>
    this._connection = connection;
}

noticiasModel.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias order by data desc', callback);
}

noticiasModel.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticia = '+id_noticia.id_noticia, callback);
}

noticiasModel.prototype.salvarNoticia = function(noticia, callback){
    console.log(noticia);
    this._connection.query('insert into noticias set ?', noticia, callback) //MYSQL POSSUI UMA FUNÇÃO DE RECEBER O JSON E SOBREPOR ONDE POSSUI O PONTO DE INTERROGAÇÃO, PARA ISSO, O NOME DA VARIÁVEL PRECISA TER O MESMO NOME DAS COLUNAS DA TABELA
}

noticiasModel.prototype.get5ultimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}

module.exports = function(){
    return noticiasModel;
}