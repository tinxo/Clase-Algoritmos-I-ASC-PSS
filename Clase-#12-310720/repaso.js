// Definición de variables

// Ejemplo 1 - Declaración con let

let letras = 'ABC';

let numero = 10; 

let estado;

// Ejemplo 2 - Declaración con const y var

const porcentaje = 21;

var cantidadPaginas = 400;


// ------------------------------------------

// Estructuras de control > If

let unNumero = 10;

if (unNumero <= 10) {
    console.log('Valor menor o igual a 10');
} else {
    console.log('Valor mayor a 10');
}

// Estructuras de control > While

let inicio = 0;
const final = 10;

console.log(`Valor inicial ${inicio}`);

while (inicio < final) {
    inicio++;
}

console.log(`Valor final ${inicio}`);

// Estructuras de control > For

const limite = 10;

for (let iterador = 0; iterador < limite; iterador++) {
    console.log(`Valor intermedio ${iterador}`);
}


// ------------------------------------------

// Funciones

// declaración de la función con sus parámetros
function suma(a,b) {
    return a + b;
}

// valores para los argumentos
let numA = 5;
let numB = 10;

// invocación o llamada a la función
let resultado = suma(numA,numB);
console.log(`Resultado de la suma: ${resultado}`);


// ------------------------------------------

// Funciones y ámbito de variables

function calificar(nota){
    let aprobado = 6;
    if (nota >= aprobado) {
        return true;
    } else {
        return false;
    }
}

var nombre = 'Arya';
let resultado = calificar(7);
if (resultado) {
    console.log(`Alumno/a: ${nombre} - Aprobado.`);
} else {
    console.log(`Alumno/a: ${nombre} - Desaprobado.`);
}