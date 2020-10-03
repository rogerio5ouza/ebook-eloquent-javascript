/*
CONVERSÃO AUTOMÁTICA DE TIPOS 

JavaScript faz de tudo para aceitar quase todos os programas que nós fornecemos, até mesmo programas que fazem
coisas estranhas. Isso é perfeitamente demonstrado pelas seguintes expressões:
*/

console.log(8 * null); // 0
console.log("5" - 1); // 4
console.log("5" + 1); // 51
console.log("five" * 2); // NaN
console.log(false == 0); // true

/*
Ao comparar valores do mesmo tipo usando ==, o resultado é fácil de prever: podemos obter True quando os dois valores são
iguais, exceto no caso de NaN. Mas quando os tipos são diferentes, o JavaScript usa um complicado e confuso conjunto
de regras para determinar o que fazer. Na maioria dos casos, ele apenas tenta converter um dos valores para o outro tipo
de valor. No entanto, quando Null ou Undefined ocorre em qualquer lado do operador, ele produz True apenas se ambos os lados
forem um de Null ou Undefined.
*/

console.log(null == undefined); // true
console.log(null == 0); // false


