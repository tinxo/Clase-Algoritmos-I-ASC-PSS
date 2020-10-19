/**
 * Ejemplo desarrollado en clase
 */

 // Declaración de una matriz 
let datos = new Array(5); // Filas = 5
for (let i = 0; i < datos.length; i++) {
    datos[i] = new Array(3); // Columnas = 3
}

// Matriz datos orden 5x3

for (let f = 0; f < datos.length; f++) {
    for (let c = 0; c < datos[0].length; c++) {
        datos[f][c] = 5;
    }
}

let valor = 2;
for (let c = 0; c < datos[0].length; c++) {
    for (let f = 0; f < datos.length; f++) {
        datos[f][c] = datos[f][c] * valor;
    }
}

//console.log(`Contenido de la matriz: ${datos}`);
console.log(datos);