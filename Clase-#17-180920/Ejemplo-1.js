/**
 * Tomar un array con el consumo de energia de una 
 * vivienda (kwh) para el último año (12 meses)
 * Se quiere obtener el promedio de gasto registrado.
 * Considerar un precio promedio por kwh y determinar
 * los costos mensuales estimados y el promedio anual
 */

let consumos = [350, 320, 200, 180, 190, 210, 300, 240, 254, 199, 211, 212];
let promedio = 0;
for (let i = 0; i < consumos.length; i++) {
    //console.log(`Posición: ${i} - Contenido del vector: ${consumos[i]}`);
    promedio = promedio + consumos[i];
}
promedio = promedio / 12;
console.log(`El promedio anual de consumo es de: ${promedio} Kw/H.`);

let costo = 4.28;
for (let i = 0; i < consumos.length; i++) {
    console.log(`En el mes: ${i+1} el precio a pagar fue: $${consumos[i] * costo}`);
}
console.log(`El promedio anual del costo es: $${promedio*costo}.`);
