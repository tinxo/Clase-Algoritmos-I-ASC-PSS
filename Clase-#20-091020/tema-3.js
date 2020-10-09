/**
 * Ejemplo de uso de parámetros por valor y por referencia
 */

function cambiar(valor) {
    valor = valor + 1;
    return valor;
}

function cambiarVector(vector) {
    let eliminado = vector.pop();
    return eliminado;
}

// Definimos dos variables
let numero = 10;
console.log(`Valor original de número: ${numero}`);
let coleccion = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
console.log(`Valores originales de la colección: ${coleccion}`);

// Llamamos a las funciones
let resultadoF1 = cambiar(numero);
console.log(`Valor primitivo: ${numero}`);

let resultadoF2 = cambiarVector(coleccion);
console.log(`Valor tipo objeto: ${coleccion}`);