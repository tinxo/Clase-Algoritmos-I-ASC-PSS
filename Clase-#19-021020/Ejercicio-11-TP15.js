/**
 * Ejercicio 3 - TP 11
 * Consigna:
 * Nos encontramos con el desafío de incorporar una pequeña mejora
 * al sistema de quinielas de la provincia No Pego Una S.E. , y
 * como primera demo de implementación de un sistema informatizado,
 * nos proponemos un script que permita almacenar en un vector
 * de 4 posiciones los números de los bolilleros.
 */

let numeros = [];
let etiquetas = ["unidad", "decena", "centena", "millar"];

function cargar(numeros){
    let p;
    for(let i = 0; i < 4; i++){
        numeros.push(prompt("Ingrese el bolillero para " + etiquetas[i]));
    }
}

function impresion(numeros){
    for(let i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
    }
}

cargar(numeros);
impresion(numeros);