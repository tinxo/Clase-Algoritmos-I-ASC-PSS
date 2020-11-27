/**
 * Ejercicio 4 - item (c) del TP 17
 */

// Definición de la función del item C
function itemC(mat) {
    let resultado = Array(3);
    for (let sucursal = 0; sucursal < mat.length; sucursal++) { //filas
        let mayor = mat[sucursal][0];
        let pos = 0;
        for (let pan = 0; pan < mat[0].length; pan++) { //columnas
            if (mat[sucursal][pan] > mayor) {
                mayor = mat[sucursal][pan];
                pos = pan;
            }
        }
        resultado[sucursal] = pos;
    }
    return resultado;
}

 // Generación y carga de la matriz
let matriz = new Array(5);
matriz[0] = [100, 50, 20];
matriz[1] = [90, 110, 25];
matriz[2] = [95, 78, 27];
matriz[3] = [120, 54, 65];
matriz[4] = [86, 87, 140];

// Invocación a la función del item-C
console.log(itemC(matriz));

// Carga de la matriz de ventas
let matriz2 = new Array(5);
matriz2[0] = [110, 120, 40];
matriz2[1] = [78, 90, 85];
matriz2[2] = [69, 121, 35];
matriz2[3] = [100, 44, 25];
matriz2[4] = [98, 67, 99];

// Llamada a la función
console.log(itemC(matriz2));