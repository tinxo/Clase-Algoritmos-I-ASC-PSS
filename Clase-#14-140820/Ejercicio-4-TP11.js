/**
 * Ejercicio desarrollado en clase - Ejercicio 4 TP 11
 * 
 * Consigna:
 * Hacer una función que dado un string o cadena de caracteres,terminada en punto, 
 * determine la cantidad de diptongos que aparecen.
 */

var cadena = "Llevá el paraguas y la boina porque puede llover.";
var cantidadDiptongos = 0;
var i = 0;
while( cadena[i] != '.' ){
    let c1 = cadena[i].toUpperCase();
    let c2 = cadena[i + 1].toUpperCase();
    console.log('Caracteres a analizar son: ', c1, c2);
    if( c1 == 'A' | c1 == 'E' | c1 == 'I' | c1 == 'O' | c1 == 'U' ){
        if( c2 == 'A' | c2 == 'E' | c2 == 'I' | c2 == 'O' | c2 == 'U' ){
           cantidadDiptongos++; 
        }
    }
    i++;
}
console.log('La cadena analizada es: ', cadena);
console.log('La cantidad de DIPTONGOS es: ', cantidadDiptongos);