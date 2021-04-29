module.exports.Noticia = function(application, req, res){
    var connection = application.config.dbConnection(); // INICIALIZA A CONEXÃO COM O BD QUANDO FOR REQUISITADA
    var noticiasModel = new application.app.models.noticiasModel(connection);
    
    console.log(req.query)
    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia,function(error, result){
        res.render("noticias/noticia", {noticia: result});
        
    }); //O padrão do connection.query é <sql>,<function callback>
}

module.exports.getNoticias = function(application, req, res){
    var connection = application.config.dbConnection(); // INICIALIZA A CONEXÃO COM O BD QUANDO FOR REQUISITADA
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticias( function(error, result){ //O padrão do connection.query é <sql>,<function callback>
        res.render("noticias/noticias", {noticias: result}); //Chama a tela noticias/noticias
    });
}