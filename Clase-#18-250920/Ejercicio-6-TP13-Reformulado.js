/**
 * Ejercicio 6 - TP 13 - Código ajustado en Clase #18
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
    console.log("Resultado del procesamiento:");
    console.log("PROMEDIO: ", calcularPromedio());
    console.log("CALIFICACIÓN MÁS ALTA: ", getMaximo());
    console.log("CALIFICACIÓN MÁS BAJA: ", getMinimo());
    console.log("CANTIDAD DE APROBADOS: ", cantidadAprobados());
    console.log("CANTIDAD DE DESAPROBADOS: ", cantidadDesaprobados());
    console.log("Fin del procesamiento de datos...");
}

function calcularPromedio(){
    let total = 0;
    let i;
    for(i = 0; i < calificaciones.length; i++){
        total = total + calificaciones[i];
    }
    return total / calificaciones.length;
}

function getMinimo(){
    let minimo = 11;
    let i;
    for(i = 0; i < calificaciones.length; i++){
        if( calificaciones[i] < minimo){minimo = calificaciones[i];}
    }
    return minimo;
}

function getMaximo(){
    let maximo = -1;
    let i;
    for(i = 0; i < calificaciones.length; i++){
        if( calificaciones[i] > maximo){maximo = calificaciones[i];}
    }
    return maximo;
}

function cantidadAprobados(){
    let cant_aprobados = 0;
    let i;
    for(i = 0; i < calificaciones.length; i++){
        if( calificaciones[i] >= 6 ){cant_aprobados++;}
    }
    return cant_aprobados;
}

function cantidadDesaprobados(){
    let cant_desaprobados = 0;
    let i;
    for(i = 0; i < calificaciones.length; i++){
        if( calificaciones[i] < 6 ){cant_desaprobados++;}
    }
    return cant_desaprobados;
}