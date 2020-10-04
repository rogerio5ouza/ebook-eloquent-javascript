/*
BINDINGS

Como um programa mantém um estado interno? Como ele se lembra das coisas? 
Para capturar e manter valores, o JavaScript fornece algo chamado de vinculação (Binding) ou variável:
*/

let caught = 5 * 5;

/*
A instrução anterior cria um vínculo chamado 'capturado(caught)' e usa-o para capturar o número que é produzido
multiplicando 5 por 5. 
Depois que uma vinculação(binding) for definida, seu nome pode ser usado como uma expressão. O valor de tal expressão é
o valor que a vinculação contém atualmente. Exemplo:
*/

let ten = 10;
console.log(ten * ten); // 100

/*
Quando um vínculo aponta para um valor, isso não significa que ele está vinculado a esse valor para sempre.
O operador = pode ser usado a qualquer momento nas associações existentes para desconectá-las de seu valor
atual e fazer com que apontem para um novo valor:
*/

let mood = "light";
console.log(mood); // light

mood = "dark";
console.log(mood); // dark

/*
Vejamos outro exemplo.
Para lembrar a quantidade de dólares que Luigi lhe deve, você cria uma ligação. E então, 
quando ele devolve $ 35, você dá a esta ligação um novo valor:
*/

let luigiDebt = 140;
luigiDebt = luigiDebt - 35;
console.log(luigiDebt); // 105

/* 
Quando definimos uma vinculação sem atribuir um valor a ela, o tentáculo não têm nada para agarrar, então termina no ar.
Se solicitarmos o valor de um vínculo vazio, obteremos o valor não definido. Uma instrução simples pode definir vários vínculos.
As definições devem ser separadas por vírgulas:
*/

let one = 1, two = 2;
console.log(one + two); // 3

// As palavras VAR e CONST também podem ser usadas para criar associações, de maneira semelhante a LET:

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name); // Hello Ayda
