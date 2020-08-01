/**
 * Ejercicio desarrollado en clase - Ejercicio 1 TP B
 * Consigna:
 * Hacer una función “farenheit2celsius” que permita convertir 
 * un valor de temperatura expresado en grados Farenheit a grados Celsius.
 * 
 * Por ejemplo: console.log(farenheit2celsius(32));
 * Debe devolver: 0
 */

function farenheit2Celsius(temperatura) {
    return (temperatura - 32) * 5/9;
}

console.log(farenheit2Celsius(32));