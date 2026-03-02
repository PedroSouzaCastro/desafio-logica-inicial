let nomeHeroi = "Tom Jobim"
// Adicionando o nome do Héroi.

for (xpHeroi = 0; xpHeroi < 5000; xpHeroi++) {
    xpHeroi += 300
}
console.log ("O nível do Héroi é " + xpHeroi + " Xp")
// Usando Laços de Repetições, para definir o Rank final do Héroi. 

if (xpHeroi < 1000) {
    let rank = "Ferro"
    console.log("Se XP for menor do que 1.000 = " + rank)
} else if (xpHeroi < 2000) {
    rank = "Bronze"
    console.log("Se XP for entre 1.001 e 2.000 = " + rank)
} else if (xpHeroi < 5000) {
    rank = "Prata"
    console.log("Se XP for entre 2.001 e 5000 = " + rank)
} else if (xpHeroi < 7000) {
    rank = "Ouro"
    console.log("Se XP for entre 5.001 e 7.000 = " + rank)
} else if (xpHeroi < 8000) {
    rank = "Platina"
    console.log("Se XP for entre 7.001 e 8.000 = " + rank)
} else if (xpHeroi < 9000) {
    rank = "Ascendente"
    console.log("Se XP for entre 8.001 e 9.000 = " + rank)
} else if (xpHeroi < 10000) {
    rank = "Imortal"
    console.log("Se XP for entre 9.001 e 10.000 = " + rank)
} else {
    rank = "Radiante"
    console.log("Se XP for maior ou igual a 10.001 = " + rank)
}
//Estrutura de Decisão para definir o nivel/Rank do Héroi


console.log("O Herói de nome " + nomeHeroi + " está no nível " + rank)
// Mensagem final.