/**
 * Código usado en la presentación de la clase
 */

// Agregar elementos

let calles = ['Belgrano', 'Alvear', 'Gral. Paz'];

// Se desea agregar una al final
calles.push('Las Heras');
console.log(`Array con un elemento nuevo al final: ${calles}`);

// Se desea agregar una al inicio
calles.unshift('9 de Julio');
console.log(`Array con un elemento nuevo al inicio: ${calles}`);

// --------------------------------------

// Eliminar elementos

let numeros = [0, 1, 2, 3, 4, 5];

// Se desea eliminar el último valor
let eliminado = numeros.pop();
console.log(`Se eliminó: ${eliminado} del vector: ${numeros}`);

// Se desea eliminar el primer valor
eliminado = numeros.shift();
console.log(`Se eliminó: ${eliminado} del vector: ${numeros}`);

// --------------------------------------

// Agregar y quitar en una sola operación

let lista = ['A', 'B', 'F', 'X', 'Y', 'Z'];

// Se desea agregar un elemento
console.log(`Secuencia original: ${lista}`);
lista.splice(2,0,'C');
console.log(`Agregando un elemento en posición 2: ${lista}`);

// Se desean agregar dos (o más) elementos
lista.splice(3, 0, 'D', 'E');
console.log(`Agregando dos elementos desde posición 3: ${lista}`);

// Se desea eliminar elementos
lista.splice(6,2);
console.log(`Eliminando 2 elementos desde posición 6: ${lista}`);

// Se desea eliminar y agregar elementos
lista.splice(6,1,'G');
console.log(`Reemplazando un elemento en la posición 6: ${lista}`);

// --------------------------------------

// Recortar un subconjunto del array

let elementos = [5, 6, 7, 8];

// Se desea obtener el subrango [6, 7]
console.log(`Listado original: ${elementos}`);
let res1 = elementos.slice(1, 3);
console.log(`Subconjunto obtenido: ${res1}`);
console.log(`Original sin cambios: ${elementos}`);

// Se desea obtener desde posición 2
let res2 = elementos.slice(2);
console.log(`Subconjunto obtenido: ${res2}`);

// Usando índices negativos inicia desde el final
let res3 = elementos.slice(-3);
console.log(`Subconjunto obtenido: ${res3}`);

// Usando índices negativos inicia desde el final
let res4 = elementos.slice(-3, -1);
console.log(`Subconjunto obtenido: ${res4}`);

// --------------------------------------

// Verificar si un elemento existe y obtener su índice

let letras = ['A', 'B', 'F', 'X', 'Y', 'Z'];

// Verifico si existe una letra con includes()

if (letras.includes('A')) {
    // Una vez que se sabe que existe se obtiene el índice
    let indice = letras.indexOf('A');
    console.log(`El elemento buscado está en la posición: ${indice}`);
}

if (!letras.includes('A', 1)) {
    // Una vez que se sabe que existe se obtiene el índice
    let indice = letras.indexOf('A',1);
    console.log(`El elemento buscado está en la posición: ${indice}`);
}

// --------------------------------------

// Concatenación de arrays

let house = ['Greg', 'Allison', 'James', 'Lisa'];
let friends = ['Ross', 'Monica', 'Chandler', 'Phoebe'];
let himym = ['Ted', 'Barney', 'Marshall', 'Lily'];

// Se usa concat para unir ambos en un nuevo array

let union = house.concat(friends);
console.log(`Array combinando 2: ${union}`);

let todos = house.concat(friends, himym);
console.log(`Array combinando 3: ${todos}`);

// --------------------------------------

// Obtener un array desde un string

let cadena = 'Algoritmos 1 - TP 15 - Tema: Array III';
let partes = cadena.split(' - ');

for (let i = 0; i < partes.length; i++) {
    console.log(`Valor en posición ${i}: ${partes[i]}`);
}