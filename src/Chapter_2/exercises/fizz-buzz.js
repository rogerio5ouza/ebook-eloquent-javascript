// Programa FizzBuzz

/* Escreva um programa que use console.log para imprimir todos os números de 1 a 100, com duas exceções:
para números divisíveis por 3, imprima "Fizz" em vez dos números, e para números divisíveis por 5 (e  não 3), imprima "Buzz".
Em seguida, modifique o programa para imprimir "FizzBuzz" para números que são divisíveis por 3 e 5 (e ainda imprima "Fizz" ou "Buzz"
para números divisíveis por apenas um deles). */

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if(n % 5 == 0) output += "Buzz";
    console.log(output || n);
};