module.exports = function(application){
    application.get('/noticia', function (req, res){
        application.app.controller.noticia.Noticia(application, req, res)
    });

    application.get('/noticias', function (req, res){
        application.app.controller.noticia.getNoticias(application, req, res);
    });
}