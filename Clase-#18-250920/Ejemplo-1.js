/** 
 * Ejemplo desarrollado en clase
 */

let lenguajes = ['Java', 'javascript', 'python', 'PHP', 'sql'];


// Función que implementa la búsqueda (-)
function busquedaLineal(datos, buscar) { 
    //let encontrado = false;
    for (let i = 0; i < datos.length; i++) {
        console.log(`Iteración nro. ${i+1}`);
        if (datos[i] == buscar) {
            return true;
        }
    }
    return false;
}

//['Java', 'javascript', 'PHP', 'python', 'sql'];
function busquedaOrdenada(datos, buscar) {
    for (let i = 0; i < datos.length; i++) {
        console.log(`Iteración nro. ${i+1}`);
        if (datos[i] == buscar) {
            return true;
        } else if (datos[i] > buscar) {
            return false;
        }
    }
    return false;
}

function normalizar(datos) {
    for (let i = 0; i < datos.length; i++) {
        datos[i] = datos[i].toUpperCase();
    }
    return datos;
}

console.log(`La cantidad de elementos del array es: ${lenguajes.length}`);
//console.log(`Original: ${lenguajes}`);
lenguajes = normalizar(lenguajes);
//console.log(`Normalizado: ${lenguajes}`);
lenguajes.sort();
//console.log(`Ordenado: ${lenguajes}`);
if (busquedaOrdenada(lenguajes, 'C')) {
    console.log('Lenguaje encontrado');
} else {
    console.log('Lenguaje no encontrado');
}

/**
 * Array desordenado => 5 iteraciones (caso: no encontrado)
 * Array desordenado => 5 iteraciones (caso: encontrado)
 * Array desordenado => 2 iteraciones (caso: encontrado, anticipando el return)
 * Array desordenado => 5 iteraciones == longitud array (caso: no encontrado, anticipando el return)
 * Array ordenado => 3 iteraciones (caso: no encontrado, observando orden)
 */