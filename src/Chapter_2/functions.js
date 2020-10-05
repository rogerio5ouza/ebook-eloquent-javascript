/*
prompt()

A função prompt() não é muito usada na programação web moderna, pricipalmente porque não temos controle
sobre sua aparência do diálogo resultante, mas pode ser útil em programas de exemplos e experimentos:
*/

prompt("Enter password");

/*
console.log()

A maioria dos sistemas JavaScript(incluindo navegadores e Node.js) fornecem uma função console.log que grava
seus argumentos em algum dispositivo de saída de texto. No navegador, a saída chega ao console JavaScript. Esta
parte da interface do navegador fica oculta por padrão, mas a maioria dos navegadores a abre
quando pressionamos F12.
*/

console.log();

/*
Valores de retorno

Mostrar uma caixa de diálogo ou escrever texto na tela é um efeito colateral. Muitas funções são úteis devido aos 
efeitos colaterais que produzem. As funções também podem produzir valores e, nesse caso, não precisam ter um efeito
colateral para serem úteis. Por exemplo, a função Math.max pega qualquer quantidade de argumentos numéricos e retorna
o maior:
*/

console.log(Math.max(2, 4)); // 4

// A função Math.min pega qualquer quantidade de argumentos numéricos e retorna o menor:

console.log(Math.min(2, 4) + 100); // 102