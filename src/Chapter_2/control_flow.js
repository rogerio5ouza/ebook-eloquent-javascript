/*
Controle de Fluxo

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

/*
Execução Condicional

A execução condicional é criada com a palavra-chave IF em JavaScript. Em um caso simples, queremos que um código seja
executado se, e somente se, uma certa condição for mantida. Podemos, por exemplo, querer mostrar o quadrado da entrada
apenas se a entrada for realmente um número:

*/

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN) {
    console.log("Your number is the square root of " +
        theNumber * theNumber);
}

/*
Frequentemente, não temos apenas o  código que executa quando uma condição for True, mas também o código que 
lida com o outro caso (False). Podemos usar a palavra-chave ELSE, junto com IF, para criar dois caminhos de 
execução alternativos separados:
*/

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN) {
    console.log("Your number is the square root of " +
        theNumber * theNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}