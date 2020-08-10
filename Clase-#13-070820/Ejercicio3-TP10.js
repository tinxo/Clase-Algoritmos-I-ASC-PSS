/**
 * Ejercicio desarrollado en clase - Ejercicio 3 TP 10
 * Consigna:
 * Escriba un script que lea una secuencia de caracteres terminada 
 * en “punto” e informe la cantidad de letras 'v' leídas seguidas por una 'a'.
 */

var cadena = 'Una Vaca vestida de blanco.';

var indice = 0;
var cantidad = 0;
while( cadena[indice] != '.' ){
    if( cadena[indice] == 'V' || cadena[indice] == 'v' ){
        if( cadena[indice + 1] == 'A' || cadena[indice + 1] == 'a' ){
            // esta forma de estructurarlo se puede reducir usando un conector lógico AND
            cantidad++;
        }
    }
    indice++;
}
console.log('La cantidad de caracteres V seguidos por un caracter A es: ', cantidad);