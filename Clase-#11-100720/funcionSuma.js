/**
 * Ejemplo de uso de funciones y lo que pasa una vez que se ejecuta la instrucción return
 */

// Se define la función
function suma(a, b) {
    console.log('Mensaje dentro de la función');
    console.log(`El resultado de la suma va a ser: ${a + b}`);
    return a + b;
    // linea originalmente agregada para mostrar un punto, se pasa a comentar
    // console.log('Mensaje después del return de la función');
}

let numA = 5;
let numB = 10;

// Se llama o invoca 
let resultado = suma(numA, numB);
console.log('Mensaje fuera de la función');
console.log(`El valor que devolvió la función es: ${resultado}`);
