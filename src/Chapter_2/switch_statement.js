// Essa é uma declaração Switch, herdada das linguagens C e Java, que é usada para avaliar mais de uma condição
// Exemplo:

switch (prompt("Como está o tempo?")) {
    case "chuvoso":
        console.log("Lembre-se de levar um guarda-chuva.");
        break;
    case "ensolarado":
        console.log("Vista roupa leve.");
        break;
    case "nublado":
        console.log("Saia de casa.");
        break;
    default:
        console.log("Tipo de clima desconhecido!");
        break;
}