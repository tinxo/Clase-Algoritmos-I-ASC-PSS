/**
 * Código usado en la presentación del tema.
 */

// Declaración de matrices

let matriz = new Array(5);  // Estructura para filas
for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3);  // Estructura para columnas
}

console.log(`Cantidad de filas de la matriz: ${matriz.length}`);
console.log(`Cantidad de columnas de la matriz: ${matriz[0].length}`);
console.log(`Vista de la matriz: ${matriz}`);

// ---------------------------------

// Recorrido por filas

for (let f = 0; f < matriz.length; f++) {
    // Se deja -fija- la fila
    for (let c = 0; c < matriz[f].length; c++) {
        // Se procesan las columnas

        matriz[f][c];

    }
}

// ---------------------------------

// Recorrido por columnas

for (let c = 0; c < matriz[0].length; c++) {
    // Se deja -fija- la columna
    for (let f = 0; f < matriz.length; f++) {
        // Se procesan las filas
        
        matriz[f][c];

    }
}

// ---------------------------------

// Suma por un escalar

let escalar = 1;
let matrizA = new Array(5);
for (let i = 0; i < matrizA.length; i++) {
    matrizA[i] = new Array(3);
    for (let x = 0; x < matrizA[i].length; x++) {
        matrizA[i][x] = 0;
    }
}

// Suma
for (let f = 0; f < matrizA.length; f++) {
    for (let c = 0; c < matrizA[f].length; c++) {
        matrizA[f][c] = matrizA[f][c] + escalar;
    }
}

// Impresión
for (let f = 0; f < matrizA.length; f++) {
    for (let c = 0; c < matrizA[f].length; c++) {
        console.log(`Elemento de la posición [${f}, ${c}] = ${matrizA[f][c]} `);
    }
}

// ---------------------------------

// Suma de matrices

let matrizB = new Array(5);
for (let i = 0; i < matrizB.length; i++) {
    matrizB[i] = new Array(3);
    for (let x = 0; x < matrizB[i].length; x++) {
        matrizB[i][x] = 3;
    }
}

let resultado = new Array(5);
for (let i = 0; i < resultado.length; i++) {
    resultado[i] = new Array(3);
    for (let x = 0; x < resultado[i].length; x++) {
        resultado[i][x] = 0;
    }
}

// Suma de las matrices
for (let f = 0; f < matrizA.length; f++) {
    for (let c = 0; c < matrizA[f].length; c++) {
        resultado[f][c] = matrizA[f][c] + matrizB[f][c];
    }
}

// Impresión
for (let f = 0; f < resultado.length; f++) {
    for (let c = 0; c < resultado[f].length; c++) {
        console.log(`Elemento de la posición [${f}, ${c}] = ${resultado[f][c]} `);
    }
}