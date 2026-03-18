// fazendo o desafio de Logica.
let userName = heroi("Pedro Henrique Castro", " ")
let level;
let victoryBalance = victoriesAndDefeats(100, 23)

// Função pegar primeiro nome do herói
function heroi(nameHeroi, splitchar){
    let splitName = nameHeroi.split(splitchar)[0]
    return splitName
}

// Função calcular saldi de vítorias
function victoriesAndDefeats(victories, defeats){
    let finalRank = victories - defeats
    return finalRank
}

// Vendo Rank final
if (victoryBalance <= 10) {
    rank = "Ferro"
}   else if (victoryBalance <= 20) {
    rank = "Bronze"
}   else if (victoryBalance <= 50) {
    rank = "Prata"
}   else if (victoryBalance <= 80) {
    rank = "Ouro"
}   else if (victoryBalance <= 90) {
    rank = "Diamante"
}   else if (victoryBalance <= 100) {
    rank = "Lendário"
}   else {
    rank = "Imortal"
}

console.log("O Herói tem de saldo de " + victoryBalance + " está no nível de " + rank)
console.log(userName)