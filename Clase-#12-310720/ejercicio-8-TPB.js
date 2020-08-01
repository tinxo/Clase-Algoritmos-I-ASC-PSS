/**
 * Ejercicio desarrollado en clase - Ejercicio 8 TP B
 * Consigna:
 * Realizar una función que calcule el Índice de masa corporal (IMC) 
 * tomando como parámetros los valores de peso y altura de una persona.
 * 
 * Por ejemplo: console.log(calcularIMC(peso,altura));
 */

 function calcularIMC(peso,altura){
     return peso / altura ** 2;
 }

 console.log(calcularIMC(62,1.60));