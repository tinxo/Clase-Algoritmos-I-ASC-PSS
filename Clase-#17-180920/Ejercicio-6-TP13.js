/**
 * Ejercicio 6 - TP 13 - Realizado en clase
 * Consigna:
 * Realizar un script que incluya dos funciones. 
 * Función "ingresarDatos": permite cargar en un array las 
 * notas de los 15 exámenes finales de  los alumnos que cursaron
 * la cátedra “Introducción a la Informática” durante el 1er
 * cuatrimestre de 2020.
 * 
 * Función “procesarNotas": recibe el array y deberá procesar
 * las notas para informar: el  promedio, la nota más baja,
 * la nota más alta y las cantidades de aprobados y desaprobados
 * (considerar que se aprueba con 6). 
 */

var calificaciones = [];
const LIMITE = 5;
function ingresarDatos(){
    let i = 0;
    console.log("Inicio de la carga de datos...");
    for(i=0; i < LIMITE; i++){
        calificaciones.push(parseInt(prompt("Ingrese el dato # " + (i + 1))));
    }
    console.log("Fin de la carga de datos...");
}

function procesarNotas(){
    console.log("Inicio del procesamiento de datos...");
    let promedio = 0;/* promedio de las calificaciones */ let total = 0;/* suma total de las calificaciones */
    let minimo = 11;/* ¿Por qué así? */ let maximo = -1;/* ¿Por qué así? */
    let cant_aprobados = 0; let cant_desaprobados = 0;
    let i;

    for(i = 0; i < calificaciones.length; i++){
        total = total + calificaciones[i];
        // ¿Cuál es el mínimo y el máximo?
        if( calificaciones[i] < minimo){minimo = calificaciones[i];}
        if( calificaciones[i] > maximo){maximo = calificaciones[i];}
        // ¿Cuántos aprobados y desaprobados hay?
        if( calificaciones[i] >= 6 ){cant_aprobados++;}else{cant_desaprobados++;}
    }
    promedio = total / calificaciones.length;
    console.log("Resultado del procesamiento:");
    console.log("PROMEDIO: ", promedio);
    console.log("CALIFICACIÓN MÁS ALTA: ", maximo);
    console.log("CALIFICACIÓN MÁS BAJA: ", minimo);
    console.log("CANTIDAD DE APROBADOS: ", cant_aprobados);
    console.log("CANTIDAD DE DESAPROBADOS: ", cant_desaprobados);
    console.log("Fin del procesamiento de datos...");
}