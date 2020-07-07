/**
 * Ejercicio #3 de la clase
 * Consigna: hacer un conversor de AR$ a U$S usando funciones
 */

// se definen mediante constantes las cotizaciones oficial y blue
const cotizacionDolarOficial = 70.0;
const cotizacionDolarBlue = 120.0;

// se define una función por cotización que toma como parámetro el monto en pesos a convertir

function pesosToDolaresOficial(monto) {
    return pesos / cotizacionDolarOficial;
}

function pesosToDolaresBlue(monto) {
    return pesos / cotizacionDolarBlue;
}

// se define una variable con el valor de la cantidd de pesos a convertir
let pesos = 14000;

// en este caso los resultados de las funciones se imprimen directo a consola
console.log(`Con AR$ ${pesos} se pueden comprar U$S ${pesosToDolaresOficial(pesos)} a valor oficial.`);
console.log(`Con AR$ ${pesos} se pueden comprar U$S ${pesosToDolaresBlue(pesos)} a valor blue.`);

