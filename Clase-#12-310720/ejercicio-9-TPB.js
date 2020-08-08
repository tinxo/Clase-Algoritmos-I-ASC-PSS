/**
 * Ejercicio 9 TP B - Resolución propuesta
 *
 */

function convertirMB(valor, unidad) {
    if (unidad == 'Mb') {
        return (valor * 8);
    } else if (unidad == 'KB') {
        return (valor * 1000);
    } else if (unidad == 'Kb') {
        return (valor * 1000 * 8);
    } else if (unidad == 'B') {
        return ((valor * 1000) * 1000);
    } else if (unidad == 'b') {
        return ((valor * 1000) * 1000) * 8;
    }
}

console.log(convertirMB(32,'B'));
