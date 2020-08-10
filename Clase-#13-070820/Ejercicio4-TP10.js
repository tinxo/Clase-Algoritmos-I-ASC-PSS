/**
 * Ejercicio desarrollado en clase - Ejercicio 3 TP 10
 * Consigna:
 * Hacer un script que permita leer una secuencia de caracteres terminada 
 * en “punto” e informe la cantidad de palabras que tiene.
 */

var cadena = 'Aquí va una frase más larga de lo habitual.';

var indice = 0;
var cantidad = 0;
while( cadena[indice] != '.' ){
    // pasamos por alto los espacios en blanco
    while( cadena[indice] == ' ' ){indice++;}
    // pasamos por alto los carcateres distintos de un espacio en blanco
    while( cadena[indice] != ' ' && cadena[indice] != '.' ){indice++;}
    cantidad++;
}
console.log('La cantidad de palabras es: ', cantidad);