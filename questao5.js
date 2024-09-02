//String que será invertida
let stringOriginal = "Exemplo de frase"


//Inverte a string
//1. `split("")`: Divide a string em um array de caracteres
//2. `reverse()`: Inverte o array de caracteres
//3. `join("")`: Junta o array de caracteres em uma string 
let stringInvertida = stringOriginal.split("").reverse().join("")

console.log("String Original: " + stringOriginal)
console.log("String Invertida: " + stringInvertida)