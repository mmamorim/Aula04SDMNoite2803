
let util = require("./uteis");
let dados = require("./dados");

console.log("dados: ",dados);

console.log("🚀🚀🚀 Iniciando meu servidor 🚀🚀🚀");

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/bandas', (req, res) => {
    console.log("Alguem acessou a rota /bandas");
    console.log(req.params);
    res.json(dados.bandas);
})

app.post('/banda', (req, res) => {
    console.log("Alguem acessou POST na rota /banda com os parametros: ",req.body);
    let id = req.body.id;
    let nome = req.body.nome;
    dados.bandas[id] = { id, nome };
    res.json(dados.bandas[id]);
})

app.listen(port, () => {
    console.log(`😀😀 Servidor iniciado...escutando na porta ${port}`)
})