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

// -------------------------------------------



console.log(`Boas-vindas ao jogo BlackJack!`);

let pergunta = confirm(`Quer iniciar uma nova rodada?`)

function projetoBlackJack(){

if(pergunta === true){       //Poderia colocar apenas if(pergunta){} ----> há uma condição de true ou false pois é um booleano. 
   // cada jogador precisa sortear duas cartas, entao usaremos o metodo ->  comprarCarta()
   // método para sortear carta

    const cartaJogador1 = comprarCarta()
    const cartaJogador2 = comprarCarta()
    const cartaMaquina1 = comprarCarta()
    const cartaMaquina2 = comprarCarta()

   // símbolo da carta = .texto == `cartas`   //   valor da carta = .valor == `pontuacao`

   // "Usuário - cartas: Q♣️ 10♣️ - pontuação 20"   //   "Computador - cartas: Q♣️ 10♣️ - pontuação 20"
   
    console.log(`Usuário - cartas: ${cartaJogador1.texto} ${cartaJogador2.texto} - pontuação: ${cartaJogador1.valor + cartaJogador2.valor}`)
    console.log(`Computador - cartas: ${cartaMaquina1.texto} ${cartaMaquina2.texto} - pontuação: ${cartaMaquina1.valor + cartaMaquina2.valor}`)

   // para finalizar faremos um if  //  "Empate!" ou "O usuário ganhou!" ou "O computador ganhou!"
   // criei 2 variavel para armazenar as contas.

   let pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor
   let pontuacaoMaquina = cartaMaquina1.valor + cartaMaquina2.valor

   if(pontuacaoJogador === pontuacaoMaquina){
      console.log(`Empate!`)
   } else if (pontuacaoJogador > pontuacaoMaquina){
      console.log(`O usuário ganhou!`)
   } else{
      console.log(`O computador ganhou!`)
   }
   
}else{
   console.log(`O jogo acabou!`)
}

}
projetoBlackJack()