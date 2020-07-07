/**
 * Ejemplo de uso de la estructura For
 */

// Repetir algo 5 veces, un mensaje por ejemplo

for (let iterador = 0; iterador <= 5; iterador++) {
    console.log(`El valor de la variable dentro del for: ${iterador}`);
}

// esta línea genera un error porque la variable "iterador" no existe fuera del for
console.log(`El valor de la variable dentro del for: ${iterador}`); 