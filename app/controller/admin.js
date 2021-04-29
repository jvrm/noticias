module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", {validacao : {}, noticia: {}})
}

module.exports.noticias_salvar = function (application, req, res){
        var noticia = req.body;
        console.log("Entrou");

        req.assert('titulo','Titulo é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve ter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('data','Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Noticia é obrigatória').notEmpty();

        var erros = req.validationErrors();

        if (erros){
            res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
            return;
        }
            
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        })

}