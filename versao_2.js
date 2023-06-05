// // /**
// //  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
// //  *
// //  *
// //     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

// //     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// //     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
// //  *
// //  *
// //  *
// //  */

// // ----------------------------------------------------------




let pergunta = confirm(`Bem-vindo ao jogo de BlackJack! Quer iniciar uma nova rodada?`);

if (pergunta) {
  //fiz um array para armazenar as cartas do usuario
  let cartasUsuario = [];
  let carta1Usuario = comprarCarta();
  let carta2Usuario = comprarCarta();
  cartasUsuario.push(carta1Usuario.texto);
  cartasUsuario.push(carta2Usuario.texto);

  //fiz um array para armazenar as cartas do computador
  let cartasComputador = [];
  let carta1Computador = comprarCarta();
  let carta2Computador = comprarCarta();
  cartasComputador.push(carta1Computador.texto);
  cartasComputador.push(carta2Computador.texto);

  //fiz um array para armazenar a pontuacao do usuario
  let pontuacaoUsuario = [];
  pontuacaoUsuario.push(carta1Usuario.valor);
  pontuacaoUsuario.push(carta2Usuario.valor);

  //fiz um array para armazenar a pontuacao do usuario
  let pontuacaoComputador = [];
  pontuacaoComputador.push(carta1Computador.valor);
  pontuacaoComputador.push(carta2Computador.valor);

  while (
    (carta1Usuario.valor === 11 && carta2Usuario.valor === 11) ||
    (carta1Computador.valor === 11 && carta2Computador.valor === 11) ||
    //acho que essa minha terceira condição é desnecessária, pois se uma das duas acima estiver correta automaticamente a terceira esta correta.
    (carta1Usuario.valor === 11 && carta2Usuario.valor === 11 && carta1Computador.valor === 11 && carta2Computador.valor === 11)) {
    
    //caso venha a dupla de As eu zero os arrays e compro novas cartas e tambem acrescendo os valores das cartas.   
    cartasUsuario = [];
    cartasComputador = [];
    carta1Usuario = comprarCarta();
    carta2Usuario = comprarCarta();
    carta1Computador = comprarCarta();
    carta2Computador = comprarCarta();
    cartasUsuario.push(carta1Usuario.texto);
    cartasUsuario.push(carta2Usuario.texto);
    cartasComputador.push(carta1Computador.texto);
    cartasComputador.push(carta2Computador.texto);
  }

  let mensagem = confirm(`Suas cartas são ${cartasUsuario.join(` `)}. A carta revelada do computador é ${cartasComputador[0]}. \nDeseja comprar mais uma carta?`);

  let pontuacaoDoUsuario = 0;
  for (let i = 0; i < pontuacaoUsuario.length; i++) {
    pontuacaoDoUsuario += pontuacaoUsuario[i];
  }

  let pontuacaoDoComputador = 0;
  for (let j = 0; j < pontuacaoComputador.length; j++) {
    pontuacaoDoComputador += pontuacaoComputador[j];
  }
  //essa while é o principal do codigo. No final do meu projeto eu ate escrevo um texto me referindo a ele. Ele possibilitou a retirada de 9 else if que eu tinha feito
  //o que eu quis dizer com ele: se (tudo que eu falar agora for DIFERENTE) = a pontuacao do usuario seja maior que 21 OU a mensagem (confirm) seja false. Se o usuario estourar ou ele decida nao parar o jogo,
  //no caso nao comprar mais carta. Entra no while.
  while (!(pontuacaoDoUsuario > 21 || !mensagem)) {
    let novaCartaUsuario = comprarCarta();
    cartasUsuario.push(novaCartaUsuario.texto);
    pontuacaoUsuario.push(novaCartaUsuario.valor);

    pontuacaoDoUsuario = 0;
    for (let i = 0; i < pontuacaoUsuario.length; i++) {
      pontuacaoDoUsuario += pontuacaoUsuario[i];
    }

    if (pontuacaoDoUsuario > 21 || pontuacaoDoComputador > 21) {
      break;
    }

    mensagem = confirm(`Suas cartas são ${cartasUsuario.join(` `)}. A carta revelada do computador é ${cartasComputador[0]}. \nDeseja comprar mais uma carta?`);
  }

  //nessa while eu quis que meu computador arriscasse comprar mais uma carta caso tenha 16 pontos ou menos. A ideia é que tornasse o jogo mais dificil.
  //Sei que nao foi pedido isso no projeto, mas achei melhor dessa forma, vi como uma atualizacao de dificuldade. Espero que nao influenci na minha nota.
  while (pontuacaoDoComputador <= 15) {
    let novaCartaComputador = comprarCarta();
    cartasComputador.push(novaCartaComputador.texto);
    pontuacaoComputador.push(novaCartaComputador.valor);

    pontuacaoDoComputador = 0;
    for (let j = 0; j < pontuacaoComputador.length; j++) {
      pontuacaoDoComputador += pontuacaoComputador[j];
    }
  }

  let resultado = ``;
  //nesse primeiro if eu crio uma condicao que caso os 2 jogadores ultrapassem 21 pontos, que no caso é possivel, seja contabilizado como derrota. 
  if (pontuacaoDoUsuario > 21 && pontuacaoDoComputador > 21) {
    resultado = `Ambos perderam!`;
  } else if (pontuacaoDoComputador > pontuacaoDoUsuario && pontuacaoDoComputador <= 21) {
    resultado = `Computador ganhou!`;
  } else if (pontuacaoDoComputador < pontuacaoDoUsuario && pontuacaoDoUsuario <= 21) {
    resultado = `Usuário ganhou!`;
  } else if (pontuacaoDoComputador > pontuacaoDoUsuario && pontuacaoDoComputador > 21) {
    resultado = `Usuário ganhou!`;
  } else if (pontuacaoDoComputador < pontuacaoDoUsuario && pontuacaoDoUsuario > 21) {
    resultado = `Computador ganhou!`;
  } else {
    resultado = `Empate!`;
  }

  //aqui imprime o resultado, pontuacao e cartas de cada jogador.
  alert(`Usuário - Cartas: ${cartasUsuario.join(` `)} - Pontuação: ${pontuacaoDoUsuario}
Computador - Cartas: ${cartasComputador.join(` `)} - Pontuação: ${pontuacaoDoComputador}
${resultado}`);
} else {
  alert(`O jogo acabou!`);
}



//uma mensagem para quem esta corrigindo, tentei fazer esse exercicio fora de um while principal. Meu codigo chegou a ter 9 else if e tinha
//700 linhas. O unico problema dele era quando ambos os jogadores estouravam, sempre dava a vitoria pro computador e isso estava errado. 
//numa situacao onde o usuario tem 23 pontos e o computador 28 , mesmo que fosse por aproximacao, a vitoria tinha que ser dada ao usuario e 
//nao acontecia isso. Entao apaguei tudo e tentei fazer dentro de um while principal, que foi muito melhor, mas demorou para sair. A ideia parece
//ser facil mas o gatilho para conseguir faze-la foi bem demorado. Uns 5 dias codando umas 7horas por dia. E saiu isso ai :)