// --------------------------

// Uso de splice en un array

let vector = [1, 2, 3, 4];  // Vector original
console.log(vector);
vector.splice(1,2);         // Se elimina desde la posición 1 (primer parámetro), dos elementos (el segundo parámetro)
console.log(vector);

// --------------------------

// Copia de array

let vecA = ['a', 'x', 'y', 'c'];
let vecB = vecA;            // Copia la referencia del array

for (let i = 0; i < vecA.length; i++) {
    vecA[i] = vecA[i].toUpperCase();
}

console.log(`Vector A: ${vecA} -- modificado`);
console.log(`Vector B: ${vecB} -- también modificado`);

/** 
 * Cuando igualamos dos variables de tipo array no se genera una copia independiente
 * sino que al copiarse la referencia los cambios en una variable afectan a la otra
 */

// Para poder hacer correctamente una copia

let vecC = vecA.slice();   // De esta manera se copian los valores a una nueva instancia

for (let i = 0; i < vecC.length; i++) {
    vecC[i] = vecC[i].toLowerCase();
}

console.log(`Vector A: ${vecA} -- valores originales sin cambios`);
console.log(`Vector C: ${vecC} -- valores modificados solo en la copia`);


// --------------------------
