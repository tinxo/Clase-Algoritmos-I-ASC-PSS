/**
 * Ejercicio 6 TP B - Resolución propuesta
 *
 */

function calificar(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio == 10){
        return 'Excelente';
    } else if (promedio < 10 && promedio >= 8) {
        return 'Muy Bueno';
    } else if (promedio < 8 && promedio >= 6) {
        return 'Bueno';
    } else if (promedio < 6 && promedio >= 4) {
        return 'Regular';
    } else {
        return 'Insuficiente';
    }
}

console.log(calificar(5,7,3));