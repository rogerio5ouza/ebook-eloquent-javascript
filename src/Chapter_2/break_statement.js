/* Este programa ilustra a instrução Break. Ele encontra o  primeiro 
número que é maior ou igual a 20 e divisível pror 7: */

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break
    }
}

/*
A instrução Continue é semelhante a Break, pois influencia o progresso de um loop.
Quando Continue é encontrado em um corpo de loop, o controle salta para fora do corpo e continua
com a próxima iteração do loop.
*/