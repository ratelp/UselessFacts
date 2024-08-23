const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const { router } = require('./routes')

const app = express();
const PORTA = 8000;

//config handlebars
app.set('views', path.join(__dirname, 'views')) // Especificação do diretório das views
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'})) // Define o arquivo de layout principal
app.set('view engine', 'handlebars') // Definir o handlebars como template engine

// Possibilita o uso de arquivos estáticos na pasta assets
app.use(express.static("src/assets"))

//habilita as rotas executadas em routes
app.use('/', router);

app.listen(PORTA, ()=> {
    console.log("Rodando na porta " + PORTA)
})