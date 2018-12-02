var app = require('./config/server')

var rutesNoticias = require('./app/routes/noticias')
rutesNoticias(app);

var rotaHome = require('./app/routes/home')
rotaHome(app);

var formulario_noticia = require('./app/routes/formulario_noticia')
formulario_noticia(app);

app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000');
});