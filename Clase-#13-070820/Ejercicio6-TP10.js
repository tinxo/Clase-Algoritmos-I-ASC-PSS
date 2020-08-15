/*
    Hacer un programa que permita contar la cantidad de palabras que comienzan con “P” de una cadena de caracteres.
*/
var cadena = 'Me gusta comer papas fritas :).';

var indice = 0;
var cantidad = 0;
var palabra;
while( cadena[indice] != '.' ){
    // pasamos por alto los espacios en blanco
    while( cadena[indice] == ' ' ){indice++;}
    // pasamos por alto los carcateres distintos de un espacio en blanco
    palabra = '';
    while( cadena[indice] != ' ' && cadena[indice] != '.' ){
        palabra = palabra + cadena[indice];
        indice++;
    }
    console.log('La palabra procesada es: ', palabra);
    if( palabra.length > 0 && ( palabra[0] == 'P' || palabra[0] == 'p' ) ){cantidad++;}
}
console.log('La cantidad de palabras que comienzan con P es: ', cantidad);