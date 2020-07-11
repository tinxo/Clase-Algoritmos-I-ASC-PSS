/**
 * Ejemplo de uso de dos funciones con parámetros de igual nombre
 */

function suma(a, b) {
    console.log(`Operadores en la función suma. A = ${a} y B = ${b}`);
    return a + b;
}

function resta(a, b) {
    console.log(`Operadores en la función resta. A = ${a} y B = ${b}`);
    return a - b;
}

let numA = 5;
let numB = 10;

// Se llama o invoca 
let resultado = suma(numA, numB);
console.log(`El valor que devolvió la función suma es: ${resultado}`);
numB = numA;
numA = resultado;
resultado = resta(numA, numB);
console.log(`El valor que devolvió la función resta es: ${resultado}`);