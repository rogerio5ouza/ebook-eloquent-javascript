// Chessboard -  Tabuleiro de xadrez

/* Escreva um programa que cria uma string que representa uma grade de 8 x 8, usando caracteres de nova linha para separar as linhas.
Em cada posição da grade há um espaço ou um  caracter "#". Os personagens devem formar um tabuleiro de xadrez. Passar essa string para 
console.log deve mostrar algo assim:

    # # # #
   # # # #
    # # # #
   # # # #
    # # # # 
   # # # #
    # # # #
   # # # # 

Quando você têm um programa que gera este padrão, defina um tamanho de ligação = 8 e mude o programa para que funcione para 
qualquer tamanho, gerando uma grade com a largura e altura fornecidas.
*/

let size = 10;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);