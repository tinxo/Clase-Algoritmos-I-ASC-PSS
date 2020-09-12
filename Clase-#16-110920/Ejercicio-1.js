/**
 * Ejercicio 1 en clase
 * Consigna:
 * Hacer una función que reciba una cadena de caracteres y cuente la cantidad de palabras que contiene.
 * La cadena no tiene un símbolo de finalización en particular.
 */

// definición de la función
function contarPalabras(cadena) {
    let i = 0;
    let cantidadPalabras = 0;
    while (i < cadena.length) {
        // recorrido general de la cadena de caracteres
        while (cadena[i] == ' ') {
            // recorrido para saltear los espacios en blanco
            i++; // i = i + 1;
        }
        // cuando termina el while estoy posicionado en un caracter
        while ((cadena[i] != ' ') && (i < cadena.length)) {
            i++;
        }
        cantidadPalabras++;
    }
    // termino el recorrido
    return cantidadPalabras;
}

// desde este punto hacemos la llamada a la función
// esto no se sube al aula cuando trabajamos con un ejercicio de auto-corrección
let cadenaOriginal = 'el viernes que viene hay parcial';
// debería devolver 6
console.log(`La cantidad de palabras en la cadena es: ${contarPalabras(cadenaOriginal)}`);