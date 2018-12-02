var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render("home/index")
})

app.get('/formulario_noticia', function(request, response){
    response.render("admin/form_add_noticia")
})


app.get('/noticias', function(request, response){
    response.render("noticias/noticia")
})

app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000');
});