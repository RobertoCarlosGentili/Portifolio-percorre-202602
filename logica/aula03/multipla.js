//avaliador de entregas


// Para estruturar decisões no código utilizamos a familia is else.
// if=se
// ekse=senao
// else if=senao se
// O if pede uma condição e se ela fot atendida, executa o código que esta entre {}
// Ja o else serve para atender os casos que não completam as condições anteriores
// Se tivermos mais de uma condição, como no exemplo abaixo, é necessário utilizar o else if , que nega o if anterior e propõe uma nova condição
// Por exemplo, se não for nota 5, mas for nota 4, o programa escreve Melhoras! na tela

let nota = 89


if (nota == 5) {
    console.log("AURA!");
}
else if (nota == 4) {
    console.log("Melhoras!");
}
else if (nota == 3) {
    console.log("Estava bem embalado!");
}

else if (nota == 2) {
    console.log("Minha vó é melhor que você!");
}

else if (nota == 1) {
    console.log("Vai passar fome! Desista!!!");
}
else{
    console.log("Insira uma nota valida de 1 a 5!!");
}