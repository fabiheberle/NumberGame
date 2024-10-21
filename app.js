// Surge um pop-up de alerta com a mensagem.
alert("Bem-vindo ao jogo do Número Secreto");

// Variáveis utilizadas dentro do jogo.
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// Aparece as informações no console da página (a mensagem e o número secreto).
console.log("Bem vindo ao jogo, verique o número secreto aqui:");
console.log(numeroSecreto);

// Looping do jogo. Enquanto o chute não for igual ao número secreto o jogo continua rodando.
while (chute != numeroSecreto) {
    chute = prompt(`Escreva um número de 1 à ${numeroMaximo}:`);
    if (numeroSecreto == chute) {
        break; // Interrompe o looping.
    } // Se o chute for igual ao número secreto.
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++; //Soma o número de tentativas (tentativas = tentativas + 1 = tentativas++).
    } // Se o chute não for igual ao número secreto.
}

// Operador ternário para condição if/else: 
// if (tentativas > 1) {
//     alert(`Parabéns! Você acertou o número secreto! (${numeroSecreto}) Com ${tentativas} tentativas.`);
// } else {
//     alert(`Parabéns! Você acertou o número secreto! (${numeroSecreto}) Com ${tentativas} tentativa.`);
// }
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

// Surge um pop-up com a mensagem final do jogo, após o acerto do número secreto.
alert(`Parabéns! Você acertou o número secreto! (${numeroSecreto}) Com ${tentativas} ${palavraTentativa}`);