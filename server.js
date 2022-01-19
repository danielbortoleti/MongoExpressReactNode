//Primeiro passo inicializar os pacotes
const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path');
const mongoose = require('mongoose')
const routes = require('./src/routes')
// Lembrar de instalar eles no terminal, com npm ... 

const app = express()
const port = process.env.PORT || 5000

// Conexao com o banco de dados

mongoose.connect('mongodb://localhost:27017/appfullstack', 
 function(error){
    if(error){
        console.log(error);
    } else{
        console.log('MongoDB connected');
    }
})


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

// Inicializando o servidor

app.listen(port,function(){
    console.log(`Server running on port: ${port}`)
})

//OBS: Qualquer atualizacao no codigo, para ser vista no lado do cliente precisamos derrubar e subir
// o servidor dnv - O que n eh necessario usando o pacote nodemon -D. Apos alterar o arquivo do package.json





