/** 
 * Métodos alternativos de declaración de funciones
 */

 // Forma clásica

function suma(valorA, valorB) {
    return valorA + valorB;
}

// Invocación mediante el nombre de la función
console.log(suma(10, 5));

// ----------------------------------------------

// Expresiones de funciones (usualmente anónimas)

const sumatoria = function (valorA, valorB) {
    return valorA + valorB;
}

// Invocación mediante nombre de la constante
console.log(sumatoria(10, 5));

// ----------------------------------------------

// Funciones de tipo flecha

const areaRectangulo = (base, altura) => {
    return base * altura;
}

// Invocación mediante el nombre de la constante
console.log(areaRectangulo(10, 5));