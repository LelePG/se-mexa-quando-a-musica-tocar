const player = require("play-sound")();
const fs = require("fs");

const diretorioMusicas = "src/../media"

function caminhoDaMusica() {
    let musicas = fs.readdirSync(diretorioMusicas, { withFileTypes: true })
        .filter(musica => !musica.isDirectory())
        .map(musica => `${diretorioMusicas}/${musica.name}`)
    let indice = Math.trunc(Math.random() * musicas.length)
    return musicas[indice]
}

player.play(caminhoDaMusica(), function (err) {
    if (err) throw err
})



