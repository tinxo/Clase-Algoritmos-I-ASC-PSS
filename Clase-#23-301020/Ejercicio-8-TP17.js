/**
 * Ejercicio 8 - TP 17
 */

// Funciones - consignas
function itemA(mat = [], monto = 1000.0) {
    let produccion = [];
    for (let sucursal = 0; sucursal < mat.length; sucursal++) {
        produccion.push(mat[sucursal][0] + mat[sucursal][1]);
    }
    let max = produccion[0];
    let pos = 0;
    for (let sucursal = 1; sucursal < produccion.length; sucursal++) {
        if (produccion[sucursal] > max) {
            max = produccion[sucursal];
            pos = sucursal;
        }
    }
    console.log(`La sucursal con más ventas de los talles S y M es la #${pos+1}`);
}

const itemB = (mat, monto) => {
    let vecProduccion = [];
    for (let f = 0; f < mat.length; f++) {
        vecProduccion[f] = mat[f][2] + mat[f][3] + mat[f][4];
    }
    //console.log(vecProduccion);
    let max = [vecProduccion[0], 0];
    let pos = [0, 0];
    for (let i = 0; i < vecProduccion.length; i++) {
        if (vecProduccion[i] > max[0]) {
            max[1] = max[0];
            pos[1] = pos[0];
            max[0] = vecProduccion[i];
            pos[0] = i;
        } else if (vecProduccion[i] > max[1]) {
            max[1] = vecProduccion[i];
            pos[1] = i;
        }
    }
    console.log(max);
    console.log(pos);
    console.log(`El valor a repartir es de $ ${monto}`);
    let total = max[0] + max[1];
    let inversionP1 = (max[0] / total) * monto;
    let inversionP2 = (max[1] / total) * monto;
    console.log(`La sucursal con mayor producción fue la nro ${pos[0]} y recibe $ ${inversionP1}`);
    console.log(`La sucursal con la 2da mayor producción fue la nro ${pos[1]} y recibe $ ${inversionP2}`);
}


// Generación de la matriz

let matriz = new Array(4);
matriz[0] = [1000, 1250, 890, 760, 1100];
matriz[1] = [800, 1050, 1000, 850, 1000];
matriz[2] = [900, 900, 1200, 700, 1000];
matriz[3] = [1300, 1200, 500, 600, 500];


// Invocación de funciones
itemA(matriz, 1000);
//itemB(matriz, 1000);