/* Este programa ilustra a instrução Break. Ele encontra o  primeiro 
número que é maior ou igual a 20 e divisível pror 7: */

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break
    }
}