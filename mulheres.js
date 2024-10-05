const express = require("express")
const router = express.Router()

const app = express()
const porta = 3335

const mulheres = [
    {
        nome: 'Joyce Lima',
        imagem: 'https://instagram.frec39-1.fna.fbcdn.net/v/t51.2885-19/442686260_1509749023230668_1077728943362195466_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.frec39-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=oA7oWmQbSe8Q7kNvgGpV5_v&_nc_gid=ea0d50a582ca4a3d82e989d7a598228a&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYA3IXM80ggLkHKk75E5TG5cEEJ2Ac663AhTksesH-3jqQ&oe=6703786F&_nc_sid=7a9f4b',
        minibio: 'Estudante desenvolvedora'
    },
    {
        nome: 'Simaria Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
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