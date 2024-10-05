const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Joyce Lima',
        imagem:'https://instagram.frec39-1.fna.fbcdn.net/v/t51.2885-19/442686260_1509749023230668_1077728943362195466_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.frec39-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=oA7oWmQbSe8Q7kNvgGpV5_v&_nc_gid=fcfeacdbcc5843fda4875b33cd6b7a4d&edm=AA5fTDYBAAAA&ccb=7-5&oh=00_AYBDOVu_j1aAYHHv23ByraE3BvkhKWlXqQEvwElyNn5Kww&oe=6703402F&_nc_sid=7edfe2',
        minibio: 'Estudante desenvolvedora'
    })
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)