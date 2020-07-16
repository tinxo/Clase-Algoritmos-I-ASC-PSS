/**
 * Ejemplo básico de ámbito de variables
 */

function decisiones(hora) {
    var limite = 2;
    var seguir = true;
    if (hora > limite) {
        let diferencia = hora - limite;
        console.log(`Son más de las 2AM, pasaron ${diferencia} horas.`);
        seguir = false;
    }
    return seguir;
}

// Ted Mosby de HIMYM dice que nada bueno pasa después de las 2AM.
var horaActual = 3; // Serian las 3AM en nuestro ejemplo
if (decisiones(horaActual)) {
    console.log('Se puede seguir un rato más.');
} else {
    console.log('Hora de volver a casa.');
}