/** 
 * Ejercicio 2 en clase
 * Consigna:
 * En una función devuelva la cantidad de oraciones (se identifican porque
 *  finalizan en un punto, la cadena puede tener más de una) que tengan más de cinco (5) palabras.
 * En una segunda función se debe devolver una nueva cadena con todas las
 *  palabras que tengan 3 (tres) letras, separando cada palabra con un espacio en blanco.
 */

// Función #1 -- contar oraciones

// txt = 'La mesa blanca. En el laboratorio de la facultad. Con los cables.'
// resultado esperado = 1

function oraciones(texto) {
    let i = 0;
    let cantidadPalabras = 0;
    let cantidadOraciones5 = 0; // hace referencia a las oraciones con +5 palabras
    while (i < texto.length) {
        // recorrido general de la cadena
        while (texto[i] != '.') {
            // recorrido de una oración
            while (texto[i] == ' ') {
                // recorrido para saltear los espacios en blanco
                i++;
            }
            // cuando termina el while estoy posicionado en un caracter
            while ((texto[i] != ' ') && (texto[i] != '.')) {
                i++;
            }
            cantidadPalabras++;
        }
        // terminado el recorrido de una oración
        if (cantidadPalabras > 5) {
            cantidadOraciones5++;
        }
        cantidadPalabras = 0;
        i++;
    }
    return cantidadOraciones5;
}

// Función #2 - palabras 3 caracteres
function palabras3Letras(cadena) {
    let i = 0;
    let palabrasConTresCaracteres = '';
    while (i < cadena.length) {
        while (cadena[i] == ' ') {
            // recorrido para saltear los espacios en blanco
            i++;
        }
        let unaPalabra = '';
        // cuando termina el while estoy posicionado en un caracter
        while ((cadena[i] != ' ') && (i < cadena.length)) {
            unaPalabra = unaPalabra + cadena[i];
            i++;
        }
        if (unaPalabra.length == 3) {
            // cumple la condición
            palabrasConTresCaracteres = palabrasConTresCaracteres + unaPalabra + ' ';
        }
    }
    return palabrasConTresCaracteres;
}

// hacemos la llamada a la función
let txt = 'Las mesas blanca. En el laboratorio de la fac. Con los cables.'
console.log(`La cantidad de oraciones con  +5 palabras es: ${oraciones(txt)}`);
console.log(`Palabras con tres caracteres encontradas = ${palabras3Letras(txt)}`);