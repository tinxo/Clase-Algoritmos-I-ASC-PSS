/** 
 * Ejemplo de ámbito de variables un poco más complejo haciendo un mix de funciones y estructuras de control
 */

// Una función para trabajar con los ámbitos, si, no tiene parámetros
function revisar(limiteIteraciones) {
    for (let iterador; iterador < limiteIteraciones; iterador++) {
        console.log(`Valor del iterador ${iterador}`);
    }
    console.log(`Valor final del iterador (undefined ya que la variable no existe): ${iterador}`);
    if (valor == 100) {
        valor = valor + 100; // una variable global podría cambiarse en cualquier función
        limiteIteraciones -= valor;
    }
    return limiteIteraciones;
}

// variable condicion > global al script aún siendo definida con let
let condicion = true;

if (condicion) {
    // variable valor > global al script por haber sido definida mediante var
    var valor = 100;
    console.log(` Variable valor dentro del bloque verdadero del if: ${valor}`);
} else {
    console.log(` Variable valor dentro del bloque falso de if (no existe): ${valor}`);
}

if (valor > 0) {
    const temporal = revisar(5);
    console.log(`Valor de la constante temporal dentro del if: ${temporal}`);
}
console.log(`Valor de la variable valor después de la ejecución: ${valor}`);
console.log(`Valor de la constante temporal fuera del if: ${temporal}`);