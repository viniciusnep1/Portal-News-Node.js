var express = require('express');
var app = express();
app.get('/', function(request, response){
    response.send("<html><body>Funcionando</body></html>")
})
app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000');
});