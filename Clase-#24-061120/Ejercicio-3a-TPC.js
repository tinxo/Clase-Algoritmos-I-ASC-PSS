// Generar la matriz de datos
let stock = new Array(4);
stock[0] = ['arroz', 10, 15];
stock[1] = ['azucar', 5, 8];
stock[2] = ['yerba', 15, 9];
stock[3] = ['agua', 10, 7];

// Función para Item A
function itemA(matriz) {
    for (let fila = 0; fila < matriz.length; fila++) {
        if (matriz[fila][2] <= matriz[fila][1]) {
            console.log(`El producto ${matriz[fila][0]} necesita reponerse.`);
        } else {
            console.log(`El producto ${matriz[fila][0]} tiene stock suficiente.`);
        }
    }
}

itemA(stock);