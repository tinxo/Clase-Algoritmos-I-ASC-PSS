/**
 * Ejemplos presentes en la presentación de la clase.
 */ 

 // Recorrido de una cadena

let cadena = 'Una oración de ejemplo.'
let i = 0;
while (i < cadena.length) {
    // Recorrido general de la cadena
    while (cadena[i] == ' ') {
        // Recorrido de los espacios
        i++; 
    }
    // Al inicio de una palabra
    while ((cadena[i] != ' ') && (i < cadena.length)) {
        // Recorrido de los caracteres
        i++;
    }
    // Al final de una palabra
}
// Final del procesamiento

// -------------------------

// Concatenación

let parte1 = 'hola';
let parte2 = 'mundo';
let parte3 = '!';

let sinEspacios = parte1 + parte2 + parte3;
let conEspacios = parte1 + ' ' + parte2 + ' ' + parte3;

console.log(`Resultado sin espacios: ${sinEspacios}`);
console.log(`Resultado con espacios: ${conEspacios}`);


// -------------------------

// Extraer fragmentos

let frase = 'llueve tranquilo, llueve parejo';
let i1 = 0;
let fragmentos = '';
while (i1 < frase.length) {
    while (frase[i1] == ' ') {
        i1++;
    }
    if (frase[i1] == 't') {
        while ((frase[i1] != ' ') && (i1 < frase.length)) {
            fragmentos = fragmentos + frase[i1];
            i1++;
        }
    } else {
        while ((frase[i1] != ' ') && (i1 < frase.length)) {
            i1++;
        }
    }
}
console.log(`Frase original: ${frase}`);
console.log(`Palabra que inicia con 't': ${fragmentos}`);

// -------------------------

// Búsqueda de mayor en una cadena

let texto = 'el tiempo otra vez avanza';
let i2 = 0;
let max = 0;
let palabraMax = '';
while (i2 < texto.length) {
    while (texto[i2] == ' ') {
        i2++;
    }
    let temp = '';
    while ((texto[i2] != ' ') && (i2 < texto.length)) {
        temp += texto[i2];
        i2++;
    }
    if (temp.length > max) {
        palabraMax = temp;
        max = palabraMax.length;
    }
}
console.log(`En la frase: ${texto}`);
console.log(`La palabra más larga es: ${palabraMax}`);
