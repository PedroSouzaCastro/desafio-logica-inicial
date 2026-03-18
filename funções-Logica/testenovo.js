// function mais if

let nome = "Pedro"
let cpf = "604.434.363-63"
let idade = 18

function main (){
    buscandoDados()
    validandoDados()
    enviandoDados()
}


function buscandoDados(){
    console.log("Buscando dados dos clientes")
}   

function validandoDados(){
    console.log("Validando Dados do cliente")
    if (cpf == "604.434.363-63"){
        console.log("CPF do cliente encontrado")
    } else {
        console.log("CPF não identificado")
    }

    if (idade >= 18){
        console.log("Cliente Maior de idade")
    } else {
        console.log("Cliente menor de idade")
    }
}

function enviandoDados(){
    console.log("Enviando dados")
}

main()