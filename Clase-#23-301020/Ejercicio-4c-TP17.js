/**
 * Ejercicio 4 - item (c) del TP 17
 */

// Definición de la función del item C
function itemC(mat) {
    for (let sucursal = 0; sucursal < mat.length; sucursal++) { //filas
        let mayor = mat[sucursal][0];
        let pos = 0;
        for (let pan = 0; pan < mat[0].length; pan++) { //columnas
            if (mat[sucursal][pan] > mayor) {
                mayor = mat[sucursal][pan];
                pos = pan;
            }
        }
        console.log(`En la sucursal ${sucursal+1} el tipo de pan más vendido es el nro. ${pos+1}`);
    }
}

 // Generación y carga de la matriz
let matriz = new Array(5);
matriz[0] = [100, 50, 20];
matriz[1] = [90, 110, 25];
matriz[2] = [95, 78, 27];
matriz[3] = [120, 54, 65];
matriz[4] = [86, 87, 140];

// Invocación a la función del item-C
itemC(matriz);