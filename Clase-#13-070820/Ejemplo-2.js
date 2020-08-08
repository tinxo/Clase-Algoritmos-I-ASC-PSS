/**
 * Ejemplo básico desarrollado en clase - Recorrido con procesamiento básico y uso de la propiedad length.
 */

//let unaCancion = 'Wish You Were Here';

//console.log(unaCancion.length);

let unTexto = 'seny, pit i collons a';
let ocurrencias = 0;
for (let idx = 0; idx < unTexto.length; idx++) {
    if (unTexto[idx] == 'a') {
        //contar la ocurrencia
        ocurrencias++;
    }
}

console.log(`La cantidad de ocurrencias de la letra a es: ${ocurrencias}`);