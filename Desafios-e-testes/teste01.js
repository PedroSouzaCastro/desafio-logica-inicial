function guerreiro(nome, forca){
    let rank;
    if (forca < 1000) {
        rank = "Ferro"
    } else if (forca < 2000) {
        rank = "Prata"
    } else if (forca < 3000) {
        rank = "Ouro"
    } else if (forca < 4000) {
        rank = "Diamante"
    } else {
        rank = "Obsidian"
    }

    return "O Guerreiro " + nome +  " é rank " + rank + " com " + forca + " de força !"
}

let resultado = guerreiro("Tom Jobim", 3500)


console.log(resultado)
//console.log("O guerreiro do nome " + nome + " e da Força " + forca + " tem o rank : " + rank)