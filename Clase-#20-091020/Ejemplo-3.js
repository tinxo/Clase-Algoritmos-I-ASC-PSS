/**
 * Ejemplo para usar diferentes declaraciones de funciones
 * Escenario:
 * Consideremos un array en el que se guardan las distancias recorridas (en Km) 
 * en cada viaje de un taxista de la ciudad de Posadas en una jornada laboral.
 * Se pide implementar los siguientes métodos:
 * calcularCobranza() --> Obtiene el valor cobrado en todos los viajes realizados
 * calcularSalarioConductor() --> Obtiene el valor a pagar al conductor por la jornada
 * calcularCostos() --> Obtener el importe de los costos asociados a la jornada registrada
 * calcularGanancia() --> Obtener el importe de la ganancia neta de la jornada
*/

function calcularCobranzas(viajes, bajada, ficha) {
    let total = 0
    for (let i = 0; i < viajes.length; i++) {
        if (viajes[i] <= 1) {
            total += bajada;
        } else {
            total += bajada;
            restante = viajes[i] - 1;
            cantidadFichas = restante / 0.1;
            total += cantidadFichas * ficha;
        }
    }
    return total;
}

// Salario del conductor > función anónima
const calcularSalarioConductor = function (cobranza) {
    return cobranza * 0.3;
}

/**
 * Costos = 
 *      consumo de combustible + degradación auto
 *      consumo combustible = 11 lt / 100 km
 *      precio combustible = $62.0
 *      degradación = $1.5 * km
 */

 // Función de tipo flecha para km recorridos
 const kmRecorridos = (viajes) => {
    let total = 0;
    for (let i = 0; i < viajes.length; i++) {
        total += viajes[i];         
    }
    return total;
 }

 function costoCombustible(kms, precioPorLitro) {
    // Si se recorrieron 100 kms
    let km100 = kms / 100; // = 1
    // Consumo del auto / 100km
    let consumo = 11;
    return (km100 * consumo) * precioPorLitro;
 }

 const degracionAuto = function (kms) {
    return kms * 1.5;
 }

 const costoGlobal = (viajes, precioNafta) => {
    let sumaKms = kmRecorridos(viajes); // obtengo total de kms
    let nafta = costoCombustible(sumaKms, precioNafta);
    let desgaste = degracionAuto(sumaKms);
    return nafta + desgaste;
 }

 function calcularGanancia(cobranza, salario, costos) {
    return cobranza - salario - costos;
 }

let taxi = [2, 1.8, 3.1, 4, 1.3, 0.6, 4.5, 2.4, 2.9];
let bajadaDeBandera = 45.0;
let precioFicha = 4.5;
let precioNaftaSuper = 62.0
let valorCobranzas = calcularCobranzas(taxi, bajadaDeBandera, precioFicha);
console.log(`Cobranzas de la jornada: ${valorCobranzas}`);
let valorSalarioConductor = calcularSalarioConductor(valorCobranzas);
console.log(`Pagar al conductor: $ ${valorSalarioConductor}`);
let costosOperativos = costoGlobal(taxi, precioNaftaSuper);
console.log(`Costos operativos de la jornada: $ ${costosOperativos}`);
let valorGanancia = calcularGanancia(valorCobranzas, valorSalarioConductor, costosOperativos);
console.log(`Ganancia neta de la jornada: $ ${valorGanancia}`);