/** 
 * Código usado en la presentación de la clase
 */

// Método integrado de ordenacion --> sort()
// Trabaja dejando el array en forma ascendente

let numeros = [10, 5, 3, 9, 8, -1];
console.log(`Original: ${numeros}`);
numeros.sort();
console.log(`Ordenado ASC: ${numeros}`);

// Para obtenerlo rápidamente en forma descendente
numeros.reverse();
console.log(`Ordenado DESC: ${numeros}`);

// -----------------------------------------------

// Búsqueda lineal

let lenguajes = ['Java', 'javascript', 'python', 'PHP', 'sql'];

// Función que implementa la búsqueda (-)
function busquedaLineal(datos, buscar) { 
    let encontrado = false;
    for (let i = 0; i < datos.length; i++) {
        if (datos[i] == buscar) {
            encontrado = true;
        }
    }
    return encontrado;
}

if (busquedaLineal(lenguajes, 'pascal')) {
    console.log('Lenguaje encontrado');
} else {
    console.log('Lenguaje no encontrado');
}

// -----------------------------------------------

// Búsqueda de mayor / menor

let valores = [1.4, 3.6, 2.0, 0.9, 2.4, 0.1]

function obtenerMayor(datos) {
    let mayor = datos[0];
    for (let i = 0; i < datos.length; i++) {
        if (datos[i] > mayor) {
            mayor = datos[i];
        }
    }
    return mayor;
}

console.log(`Valores: ${valores}`);
console.log(`El mayor del listado: ${obttenerMayor(valores)}`);

// -----------------------------------------------

// Arrarys paralelos

let legajos = [148, 154, 175, 231, 245];
let notas = [6, 4, 7, 9, 5];

// Se procesan con un único índice y recorrido
for (let i = 0 ; i < legajos.length ; i++) {
    console.log(`La nota del estudiante con legajo #${legajos[i]} es: ${notas[i]}`);
}
