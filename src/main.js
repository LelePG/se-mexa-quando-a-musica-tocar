const prompt = require('prompt-sync')();
const cron = require('cron');
const player = require('play-sound')();


function menu() {
        while (1) {
                console.log("Selecione o intervalo:")
                console.log("1) 15 minutos")
                console.log("2) 20 minutos")
                console.log("3) 30 minutos")
                console.log("4) 40 minutos")
                console.log("5) 50 minutos")
                console.log("6) 60 minutos")

                let escolha = Number(prompt(''))

                switch (escolha) {
                        case 1: return 1
                        case 2: return 20
                        case 3: return 30
                        case 4: return 40
                        case 5: return 50
                        case 6: return 59
                        default: console.log("Opção inválida")
                }
        }
}

function erroAoTocar(err) {
        console.log(`O erro ${err} ocorreu.`)
}

function caminhoDaMusica() {
        return "./a.mp3"
}

let minuto = menu()

console.log("Iniciando aplicação!!")

let cronJob = cron.job(`0 */${minuto} * * * *`, function () {
        player.play(caminhoDaMusica(), erroAoTocar);
        //console.info("se mexe ai");
});

cronJob.start();