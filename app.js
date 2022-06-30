const express = require('express');
const req = require('express/lib/request');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    //res.send('el profe chistian es cool')
    res.send('hola, envia un /numero/numero para ver resultados: ')
})


app.get('/:Number/:Number2', (req, res) => {
    var min = req.params.Number
    var max = req.params.Number2
    result = Math.random() * (max - min) + min
    res.send('resultado: ' + result)
})

app.listen(8080, function() {
    console.log('La Aplicación está funcionando en el puerto 3000');
});