/*
Controle de fluxo

Qaundo um programa contém mais de uma instrução, as instruções são executadas como se fossem uma história,
de cima para baixo. O programa de exempo abaixo, possui duas intruções.
A primeira pede um número ao usuário, e a segunda, que é executada após a primeira instrução, mostra o quadrado
desse número:
*/

let theNumber = Number(prompt("Pick a number"));
console.log("You number is the square root of " +
    theNumber * theNumber);

/*
A função Number converte um valor em um número. Precisamos dessa conversão porque o resultado do prompt
é um valor de String e queremos um Number. Existem funções semelhantes chamadas String e Boolean que
convertem valores para esses tipos.
*/