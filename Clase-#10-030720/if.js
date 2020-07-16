/**
 * Ejemplo de uso de la estructura If + Else
 */

let temperatura = 31;

if (temperatura < 15) {
    console.log('Hace frío!');
}
else {
    if (temperatura > 15 && temperatura < 30) {
        console.log('Tiempo templado.');
    } else {
        console.log('Hace calor!');
    }
}