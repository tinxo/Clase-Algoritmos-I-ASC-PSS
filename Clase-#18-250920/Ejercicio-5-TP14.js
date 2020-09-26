/**
 * Ejercicio 6 - TP 13 - Código ajustado en Clase #18
 * Consigna:
 * Tiffany, la vecina del barrio, sabe que eres informático,
 * y te pidió colaboración para desarrollar un script que le
 * permita ordenar un vector con el registro del monto de ventas
 * durante el mes de Febrero y lo imprima de manera descendente.
*/

let elementos = [
    13.152,
    9.652,
    8.526,
    20.874,
    8.652,
    10.256,
    7.652,
    9.136,
    5.145,
    4.751]

// odenación por burbuja
function ordenacionBurbuja(valoresOrdenar) {
    let idx, cambio;
    for (let iteraciones=0; iteraciones < (valoresOrdenar.length-1); iteraciones++){
        for (idx = 0; idx < (valoresOrdenar.length - iteraciones - 1); idx++){
            if (valoresOrdenar[idx] > valoresOrdenar[idx + 1]){
                cambio = valoresOrdenar[idx];                 valoresOrdenar[idx] = valoresOrdenar[idx + 1];
                valoresOrdenar[idx + 1] = cambio;
            }    
        }
    }
    return valoresOrdenar;
}

function mostrarTodos(vector){
    console.log("Impresión inicio...");
    for(let i = 0; i < vector.length; i++){
        console.log(i+1,")" ,vector[i]);
    }
    console.log("Impresión fin...");
}

console.log("Vamos a ordenar...");
mostrarTodos(elementos);
ordenacionBurbuja(elementos);
console.log("Valores ordenados:");
mostrarTodos(elementos);