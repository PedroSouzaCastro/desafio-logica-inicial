// Calculadora de Partidas Rankeadas.
let victoryBalance = ranked(100, 23);

function ranked(victories, defeats){
    return victories - defeats
}

let level;

if (victoryBalance < 10) {
    level = "Ferro"
}   else if (victoryBalance <= 20) {
    level = "Bronze"
}   else if (victoryBalance <= 50) {
    level = "Prata"
}   else if (victoryBalance <= 80) {
    level = "Ouro"
}   else if (victoryBalance <= 90) {
    level = "Diamante"
}   else if (victoryBalance <= 100) {
    level = "Lendário"
}   else {
    level = "Imortal"
}

console.log("O Herói tem de saldo de " + victoryBalance + " está no nível de " + level)