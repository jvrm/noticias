module.exports = function(application){
    application.get('/formulario', function (req, res){
        application.app.controller.admin.formulario_inclusao_noticia(application, req, res);
    })

    application.post('/noticias/salvar', function (req, res){
        application.app.controller.admin.noticias_salvar(application, req, res);
    })
}