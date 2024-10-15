const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Lalisa Manobal',
        imagem: 'https://midias.em.com.br/_midias/jpg/2024/07/10/lisa_sme_rca_jpg_1024x576-38814927.jpg',
        minibio: 'Lalisa Manobal é uma rapper, cantora e dançarina tailandesa.'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)