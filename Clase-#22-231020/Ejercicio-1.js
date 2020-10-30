/**
 * Ejercicio 1 del TP 17
 * Escenario: GP de F1
 * Al finalizar un GP de Fórmula 1 se cuenta con los siguientes datos de los 20 pilotos
 * oficiales del mundial 2020: posición final, número de auto, tiempo de la vuelta más rápida,
 * tiempo más rápido en cada sector de la pista (3 sectores) y cantidad de vueltas realizadas. 
 * Todos los tiempos están expresados en segundos.
 *      Representar los datos de los pilotos en una matriz.
 *      Un fanático a través de la web oficial desea conocer:
 *          La posición final del piloto con la vuelta más rápida general.
 *          El promedio de vueltas realizadas por todos los pilotos.
 *          Las posiciones de aquellos que tuvieron los mejores tiempos por cada sector del circuito.
 */

const vueltaRapida = (matriz) => {
    // Punto (i) -- Concepto aplicado: búsqueda de un menor valor
    let menorTiempo = matriz[0][2]; // Columna 2 = tiempo de vuelta rápida x piloto
    let posicion = matriz[0][0]; // Columna 0 = posición final del piloto
    for (let f = 0; f < matriz.length; f++) {
        if (menorTiempo > matriz[f][2]) {
            menorTiempo = matriz[f][2];
            posicion = matriz[f][0];
        }
    }
    return posicion;
}

function promedioVueltas(matriz) {
    // Punto (ii)
    let promedio = 0;
    for (let f = 0; f < matriz.length; f++) {
        promedio = promedio + matriz[f][6];
    }
    return promedio / matriz.length;
}

function sectorMasRapido(matriz) {
    // Punto (iii) -- Concepto aplicado: búsqueda de un menor valor
    // let menorS1 = matriz[0][3]; // Columna 2 = tiempo de vuelta rápida x piloto
    // let posS1 = matriz[0][0]; // Columna 0 = posición final del piloto
    // let menorS2 = matriz[0][3]; // Columna 2 = tiempo de vuelta rápida x piloto
    // let posS2 = matriz[0][0]; // Columna 0 = posición final del piloto
    // let menorS3 = matriz[0][3]; // Columna 2 = tiempo de vuelta rápida x piloto
    // let posS3 = matriz[0][0]; // Columna 0 = posición final del piloto
    let menores = [matriz[0][3], matriz[0][4], matriz[0][5]];
    let posiciones = [matriz[0][0], matriz[0][0], matriz[0][0]]
    for (let f = 0; f < matriz.length; f++) {
        if (menores[0] > matriz[f][3]) { // SECTOR 1
            menores[0] = matriz[f][3];
            posiciones[0] = matriz[f][0];
        }
        if (menores[1] > matriz[f][4]) { // SECTOR 2
            menores[1] = matriz[f][4];
            posiciones[1] = matriz[f][0];
        }
        if (menores[2] > matriz[f][5]) { // SECTOR 3
            menores[2] = matriz[f][5];
            posiciones[2] = matriz[f][0];
        }
    }
    return posiciones;
}

// Definir la matriz de datos
let gp = new Array(5);
for (let f = 0; f < gp.length; f++) {
    gp[f] = new Array(7);
}

// Cargar los datos
gp[0] = [1, 16, 81.435, 20.0, 31.0, 30.435, 55];
gp[1] = [2, 44, 82.435, 20.5, 31.5, 30.435, 55];
gp[2] = [3, 77, 82.745, 20.8, 31.235, 30.7, 50];
gp[3] = [4, 5, 81.735, 21.0, 30.0, 30.735, 49];
gp[4] = [5, 22, 81.235, 19.8, 31.0, 30.435, 25];

//console.log(gp);
// Invocación al punto 1
console.log(`El piloto con la vuelta mas rápida finalizó en la posición: ${vueltaRapida(gp)}`);
console.log(`El promedio de vueltas de todos los pilotos fue: ${promedioVueltas(gp)}`);
console.log('Se imprimen las posiciones con el menor tiempo por sector de la pista:');
let aux = sectorMasRapido(gp);
for (let i = 0; i < aux.length; i++) {
    console.log(`El piloto con mejor tiempo en el sector ${i+1} terminó en la pos.: ${aux[i]}`);
}