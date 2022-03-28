
let util = require("./uteis");

console.log("🚀🚀🚀 Iniciando meu servidor 🚀🚀🚀");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/teste', (req, res) => {
  res.send('Você acessou a rota /teste')
})

app.listen(port, () => {
  console.log(`😀😀 Servidor iniciado...escutando na porta ${port}`)
})