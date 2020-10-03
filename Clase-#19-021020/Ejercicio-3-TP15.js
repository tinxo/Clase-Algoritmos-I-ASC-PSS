/**
 * Ejercicio 3 - TP 15
 * Consigna:
 * Suponer que te encuentras como personal de las elecciones presidenciales
 * para la campaña de Tito Florentino con el frente ChoriParaTodos, y cada
 * mesa lleva un registro de las personas que votan allí, para poder automatizar
 * este proceso de búsqueda, cuentan con una lista de votantes en un vector con
 * los nombres, nuestro trabajo es realizar un script que pueda buscar dentro de
 * la colección y decir si se encuentra registrado para votar en esa mesa o no.
 */

let votantes = ["sandra", "javier", "camila", "maximiliano"];

function buscar(personas, nombre){
    if( personas.includes(nombre) ){
        console.log("La persona SI vota aquí.");
    }else{
        console.log("La persona NO vota aquí.");
    }
}
let nombre = prompt("¿cómo se llama la persona?");
buscar(votantes, nombre);