const prompt = require("prompt-sync")();
const player = require("play-sound")();
const fs = require("fs");
const notifier = require("node-notifier");


const diretorioMusicas = "src/../media"

function menu() {
        while (1) {
                console.log("Selecione o intervalo:")
                console.log("1) 15 minutos")
                console.log("2) 20 minutos")
                console.log("3) 30 minutos")
                console.log("4) 40 minutos")
                console.log("5) 50 minutos")
                console.log("6) 1 hora")
                console.log("7) 1 hora e 15 minutos")
                console.log("8) 1 hora e 30 minutos")
                console.log("9) 2 horas")
                console.log("10) 2 horas e 30 minutos")

                let escolha = Number(prompt(""))

                switch (escolha) {
                        case 1: return 1
                        case 2: return 20
                        case 3: return 30
                        case 4: return 40
                        case 5: return 50
                        case 6: return 60
                        case 7: return 75
                        case 8: return 90
                        case 9: return 120
                        case 10: return 150
                        default: console.log("Opção inválida")
                }
        }
}

function notificar() {
        notifier.notify({
                title: "HORA DE SE MEXER!!!",
                message: "SE MEXE AI PESSOINHA!!"
              });
        console.log("Está na hora de se mexer!!")
}

function caminhoDaMusica() {
        let musicas = fs.readdirSync(diretorioMusicas, { withFileTypes: true })
                .filter(musica => !musica.isDirectory())
                .map(musica => `${diretorioMusicas}/${musica.name}`)
        let indice = Math.trunc(Math.random() * musicas.length)
        notificar()
        return musicas[indice]
}

let intervalo = menu()

console.log("Iniciando aplicação!!")

setInterval(() => {
        player.play(caminhoDaMusica(), function(err){
                if (err) throw err
              })
        }, intervalo * 60 * 1000)



