/**
 * Fragmentos de código utilizado en la presentación teórica del tema
 */

// Caso de inicio -> clientes y saldos de cuentas

let cliente1 = 200.50;
let cliente2 = 4535.97;
let cliente3 = 940.0023;

// Qué pasa si tenemos que agregar un nuevo cliente?

// ------------------------

// Definición de un array
// [let | const] <variable> = [<elemento>, <elemento>];

let clientes = [200.50, 4535.97, 940.0023];

let mascotas = ['Leo', 'Lana', 'Milo'];

let mixto = [15, '20', false, 3.01, 'datos..'];
// a esto nos referimos con datos heterogéneos

// ------------------------

/** 
 * Para acceder a un elemento se usa el nombre
 * de la variable y entre corchetes la posición
 * a la que se quiere acceder
 */

let precios = [76.9, 104.42, 152.99];

console.log(`Valor en posición 1 = ${precios[1]}`);

let pos = 0; // Se tiene que usar un número entero
console.log(`Valor en posición ${pos} = ${precios[pos]}`);

// También puede ser una expresión
console.log(`Valor en posición (4 - 2) = ${precios[4 - 2]}`);

// ------------------------

// Diferencias entre const y let en la declaración

let coleccion1 = ['a', 'b', 'c'];
const coleccion2 = ['x', 'y', 'z'];

// Ambos permiten modificación (son mutables)
coleccion1[0] = coleccion1[0].toUpperCase();
coleccion2[0] = coleccion2[0].toUpperCase();

coleccion1 = 'ahora es solo texto';
coleccion2 = 747; // Genera un TypeError
// Los definidos vía const no pueden mutar a nivel variable

// ------------------------

// Para agregar / sacar un elemento

// Método --> push() agrega al final
let original = ['A', 'B', 'C'];
original.push('D');
console.log(`Contenido: ${original}`);

// Método --> pop() extrae del final
let extraido = original.pop();
console.log(`Contenido: ${original}`);
console.log(`Eliminado: ${extraido}`);

// ------------------------

// Recorrido de un array

let notas = [7, 6, 4, 9, 6, 3, 8, 7];
for (let i = 0; i < notas.length; i++) {
    console.log(`En la posición ${i} está el valor: ${notas[i]}`);
}

// Qué pasa al acceder a una posición fuera del límite?
console.log(`En la posición 10? ${notas[10]}`);