/**
 * Ejemplos usados en la presentación del Tema #2
 */

// Método filter

let edades = [14, 20, 23, 17, 18, 15, 21, 17];

function verificarMayorEdad(valor) {
    return valor >= 18;
}

mayores = edades.filter(verificarMayorEdad);

console.log(`Array original: ${edades}`);
// Array original: 14,20,23,17,18,15,21,17

console.log(`Nuevo array filtrado: ${mayores}`);
// Nuevo array filtrado: 20,23,18,21

// ----------------------------------------------

// Método forEach

let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

function imprimir(elemento) {
    console.log(`Elemento: ${elemento}`);
}

dias.forEach(imprimir);

/** Imprime:
Elemento: lunes
Elemento: martes
Elemento: miercoles
Elemento: jueves
Elemento: viernes
 */

dias.forEach((item, indice, vector) => {
    vector[indice] = item.toUpperCase()
});
console.log(dias);
// [ 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES' 