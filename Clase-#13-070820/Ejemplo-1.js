/**
 * Ejemplo básico desarrollado en clase - Acceso a elementos de la cadena y recorrido con marcador de final.
 */

let unTexto = 'hola mundo!';

let idx = 0; // variable para marcar la posición de la cadena
let cantidad = 0;
//console.log(unTexto[idx]);

while (unTexto[idx] != '!') {
    cantidad++;
    idx++;
}
console.log(`La cantidad de caracteres de la cadena es: ${cantidad}`);