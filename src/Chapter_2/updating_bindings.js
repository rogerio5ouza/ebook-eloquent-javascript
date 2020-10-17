// Atualiza o valor de uma variável(Binding)

let counter = 0;

counter = counter + 1;

// Atualiza o valor de uma variável de uma forma mais elegante em JavaScript

counter += 2;
console.log(counter);

// Para counter += 1 e counter -= 1, existem equivalentes ainda mais curtos

counter++ 
counter--

// Exemplo com For

for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}