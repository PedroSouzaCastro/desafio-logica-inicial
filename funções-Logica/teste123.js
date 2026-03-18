let nomeCliente = pegarPrimeiroNome("Pedro Henrique de Souza Castro", " ")
console.log("Seja bem Vindo ao Forza Horizon " + nomeCliente)

nomeCliente = pegarPrimeiroNome("Rnz-Delas", "-")
console.log("Seja bem Vindo ao Forza Horizon " + nomeCliente)

function pegarPrimeiroNome (nome, splitchar){
    let cortarNome = nome.split(splitchar)[0]
    return cortarNome
}
// A função pegar primeiro nome - (Nome que colocar, cortar diante dos espaços do nome)
// Let cortar o nome recebe, nome.split (que significa pegar o nome e dividir em arrays), com splitchar de acordo com os espaços entre os nomes. O número 0 para pegar o primeiro nome
//retorna para o valor. Guardando o valor
