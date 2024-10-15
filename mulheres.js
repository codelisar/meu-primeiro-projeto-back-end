const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Lalisa Manobal',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/20240314_Lisa_Manoban_07.jpg/640px-20240314_Lisa_Manoban_07.jpg',
        minibio: 'Idol de kpop tailandesa'
    },
    {
        nome: 'Jennie Kim',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg/1200px-Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg',
        minibio: 'Idol de kpop coreana'
    },
    {
        nome: 'Roseanne Park',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Blackpink_Ros%C3%A9_Rimowa_1.jpg/640px-Blackpink_Ros%C3%A9_Rimowa_1.jpg',
        minibio: 'Idol de kpop neozelandesa'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)