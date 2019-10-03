const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
// path é um acordo entre o servidor e o navegador para troca de informações sobre a aplicação

const routes = require('./routes');


const app = express();


//Conecção com o banco de dados mongoDB
mongoose.connect('mongodb+srv://pinhao4life:pinhao4life@pinhaoforlife-2ek2j.mongodb.net/empreendedorismo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
// /files buscando as imagens dentro de upload
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')))
app.use(routes);

app.listen(3333);