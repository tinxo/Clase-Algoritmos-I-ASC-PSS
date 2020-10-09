/**
 * Script básico para mostrar estrategias de debug
 * Escenario:
 * Consideremos un array en el que se guardan las distancias recorridas (en Km) 
 * en cada viaje de un taxista de la ciudad de Posadas en una jornada laboral.
 * Se desea calcular el total de cobranzas al final de la jornada considerando 
 * los siguientes aspectos:
 *      La bajada de bandera tiene un costo de $45.00 (1er Km del viaje)
 *      La cuadra (ficha) tiene un costo de $4.50 (0.1 Km)
 */

function calcularCobranzas(viajes, bajada, ficha) {
    let total = 0
    for (let i = 0; i < viajes.length; i++) {
        //console.log(`Km del viaje: ${viajes[i]}`);
        if (viajes[i] <= 1) {
            // Menor que la distancia mínima
            //console.log('Minima');
            total += bajada;
        } else {
            // Cálculo completo
            //console.log('Extra');
            total += bajada;
            restante = viajes[i] - 1;
            //console.log(`Km -1: ${restante}`);
            cantidadFichas = restante / 0.1;
            //console.log(`cantidad fichas: ${cantidadFichas}`);
            total += cantidadFichas * ficha;
        }
        //break;
    }
    return total;
}

let taxi = [2, 1.8, 3.1, 4, 1.3, 0.6, 4.5, 2.4, 2.9];
let bajadaDeBandera = 45.0;
let precioFicha = 4.5;
let resultado = calcularCobranzas(taxi, bajadaDeBandera, precioFicha);
console.log(`Cobranzas de la jornada: ${resultado}`);