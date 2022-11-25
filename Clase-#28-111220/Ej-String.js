/**
 * Realizar una función, llamada parcial, que reciba como parámetro una 
 * cadena de caracteres que representa un párrafo separado en oraciones 
 * delimitadas por un punto (“.”). 
 * Además se reciben otras dos variables de tipo string que contienen una 
 * palabra cada una (A y B). La función deberá modificar la cadena original 
 * reemplazando todas las ocurrencias de la palabra A con la palabra B y deberá 
 * devolver el promedio de cambios realizados por oración.
 * 
 * El código no deberá hacer diferencia entre mayúsculas y minúsculas.
 * Inclusive la última oración finaliza en un punto.
 */

function reemplazar(cadena = '', palabraA = '', palabraB ='') {
    // la funcion que hace el procesamiento en sí
    let idx = 0;
    let reemplazos = 0;
    while (idx < oracion.length) {
        while (oracion[i] == ' ') {
            idx++;
        }
        let unaPalabra = '';
        while (oracion[idx] != ' ' && idx < oracion.length) {
            unaPalabra += oracion[idx];
            idx++;
        }
        if (unaPalabra.toUpperCase() == palabraA.toUpperCase()) {
            reemplazos++;
        }
    }
    return reemplazos;
}

 function parcial (txt = '', paramA = '', paramB = '') {
     // la funcion que se va a llamar desde el aula virtual
     let i = 0;
     let cantOraciones = 0;
     let cantReemplazos = 0;
     while (i < txt.length) {
         let oracion  = '';
         while (txt[i] != '.' && i < txt.length) {
             oracion += txt[i];
             i++;
         }
         cantOraciones++;
         // acá tiene que venir el reemplazo de la palabra
         cantReemplazos += reemplazar(oracion, paramA, paramB);
         i++;
     }
     return (cantReemplazos / cantOraciones);
 }
