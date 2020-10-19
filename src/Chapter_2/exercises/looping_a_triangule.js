// Looping A Triangle

/* Escreva um loop que faça sete chamadas para console.log para gerar o seguinte triângulo:

# 
## 
###
####
#####
######
#######
*/

for (let linha = '#'; linha.length < 8; linha += "#") {
    console.log(linha);
}