/**
 * Ejercicio desarrollado en clase - Ejercicio 3 TP B
 * Consigna:
 * Hacer una función “multiplicarNumeroN” que realice la multiplicación 
 * de un numero por si mismo la cantidad de veces establecida por parámetro.
 * 
 * Por ejemplo: console.log(multiplicarNumeroN(numero, cantidadDeVeces));
 * multiplicarNumeroN(2, 3) = (2*2) + (2*2) + (2*2) = 12
 */

function multiplicarNumeroN(numero, cantidadVeces) {
    //return numero * cantidadVeces; -- alternativa incorrecta
    let res = 0;
    for (let i = 0; i < cantidadVeces; i++) {
        res = res + (numero * numero);
    }
    return res; // -- alternativa correcta 1
    //return numero ** cantidadVeces; -- alternativa incorrecta
}

console.log(multiplicarNumeroN(2,3));