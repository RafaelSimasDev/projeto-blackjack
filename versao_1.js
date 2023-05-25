/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de BlackJack!")

let confirmacao = confirm("Quer iniciar uma nova rodada?")

if(confirmacao){
   

   // const carta = comprarCarta();
   // // Método que sorteia uma carta. Por exemplo, o rei de ouros 
   
   // console.log(carta.texto) 
   // // imprime o texto da carta. Nesse caso: "K♦️" 
   
   // console.log(carta.valor) 
   // // imprime o valor da carta (um número). Nesse caso: 10)

   let usuarioPrimeiraCompra = comprarCarta()
   let usuarioSegundaCompra = comprarCarta()

   let maquinaPrimeiraCompra = comprarCarta()
   let maquinaSegundaCompra = comprarCarta()

   let pontuacaoUsuario = usuarioPrimeiraCompra.valor + usuarioSegundaCompra.valor
   let pontuacaoMaquina = maquinaPrimeiraCompra.valor + maquinaSegundaCompra.valor

   let valorUsuario = usuarioPrimeiraCompra.texto+` `+usuarioSegundaCompra.texto
   let valorMaquina = maquinaPrimeiraCompra.texto+` `+maquinaSegundaCompra.texto

   console.log(`Usuário - cartas: ${valorUsuario} - pontuação: ${pontuacaoUsuario} `)
   console.log(`Computador - cartas: ${valorMaquina} - pontuação: ${pontuacaoMaquina}`)      

   if(pontuacaoUsuario > pontuacaoMaquina){
      console.log(`O usuário ganhou!`)
   } else if(pontuacaoMaquina > pontuacaoUsuario){
      console.log(`O computador ganhou!`)
   } else{
      console.log(`Empate!`)
   }









}else{
   console.log("O jogo acabou")
}

