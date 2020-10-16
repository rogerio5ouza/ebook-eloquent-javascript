/* Como esse padrão é tão comum, JavaScript e linguagens semelhantes 
fornecem uma forma um pouco mais curta e abrangente, o loop For. */

// Programa que imprime números pares.

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

// Este exemplo calcula 2 elevado a décima potência, usando For ao invés do While:

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}

console.log(result);