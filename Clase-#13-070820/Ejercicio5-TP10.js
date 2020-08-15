/*
    Hacer un script que permita contar la cantidad de palabras que tienen más de tres caracteres.
*/
var cadena = 'La mejor catedra es la de algoritmo by Gonzalo.';
function cuantosTienenTres(cadena){
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
        if( palabra.length > 3 ){cantidad++;}
    }
    return cantidad;
}

console.log('La cantidad de palabras con más de 3 caracteres es: ', cuantosTienenTres(cadena));