/**
 * Ejemplo desarrollado en clase sobre los temas de la teoría
 * 
 * Consigna: Hacer una función que reciba una cadena de caracteres y un valor numérico. 
 * Como resultado de su ejecución se deberá obtener una nueva cadena que contenga 
 * las palabras cuya longitud sea menor a ese valor (separadas unas de otras por un 
 * espacio en blanco al menos).
 */

function extraerN(cadena, valorN) {
    let i = 0;
    let resultado = '';
    while (i < cadena.length) {
        while (cadena[i] == ' ') {
            i++;
        }
        let temp = '';
        while ((cadena[i] != ' ') && (i < cadena.length)) {
            temp = temp + cadena[i];
            i++;
        }
        // ya tenemos en temp la palabra que se ha procesado
        if (temp.length < valorN) {
            resultado += temp + ' - ';
        }
    }
    return resultado;
}

let texto = 'ya nada nos asusta';
let valorLimiteN = 4;
console.log(extraerN(texto,valorLimiteN));