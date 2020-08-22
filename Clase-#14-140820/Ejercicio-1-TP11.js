/**
 * Ejercicio desarrollado en clase - Ejercicio 1 TP 11
 * 
 * Consigna:
 * Hacer una función que dado un string o cadena de caracteres, 
 * terminada en punto, genere una nueva cadena con las mismas palabras
 * pero no pueden haber espacios en blanco antes de la primera palabra 
 * y después de la última. Y debe haber un solo espacio en blanco entre palabras.  
 * */

var texto= '   Hola   mundo   .';

var indice= 0;
var nuevoTexto='';

while(texto[indice]!= '.'){
    while(texto[indice]== ' '){
        indice++;
    }
    if(nuevoTexto !='' && texto[indice]!= '.'){
        nuevoTexto=nuevoTexto + ' ';  

    }
    while(texto[indice]!= ' '&& texto[indice]!= '.'){
        nuevoTexto=nuevoTexto + texto[indice];
        indice++;
    }

}
console.log(nuevoTexto);