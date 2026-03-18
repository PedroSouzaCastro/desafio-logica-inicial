let playerName = "Tom Jobim"
let treinosPlayer = 0

for (powerPlayer = 0; powerPlayer < 6000; powerPlayer++) {
    powerPlayer += 250
    treinosPlayer += 1
}

console.log("O " + playerName + " treinou por " + treinosPlayer + " vezes")

if (powerPlayer < 1000) {
    rank = "Aprendiz"
} else if (powerPlayer < 2999) {
    rank = "Soldado"
} else if (powerPlayer < 4999) {
    rank = "Cavaleiro"
} else if (powerPlayer < 6999) {
    rank = "Campeão"
} else {
    rank = "Lenda"
}

console.log("O Guerreiro " + playerName + " possui " + powerPlayer + " pontos de força, e é da classe " + rank)