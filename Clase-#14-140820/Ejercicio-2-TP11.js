/**
 * Ejercicio desarrollado en clase - Ejercicio 2 TP 11
 * 
 * Consigna:
 * Hacer una función que permita contar la cantidad de veces
 * que aparece una palabra dentro de una cadena de caracteres. 
 * La cadena de caracteres, terminada en punto, y la palabra 
 * buscada son ingresadas por el usuario.
 */
function comprobarFrase(frase,palabraIngresada){
	var indice= 0;
	var cantidad = 0;	
	
	while(frase[indice] != '.'){ //Controla el final de la cadena
		while(frase[indice] == ' '){ //Pasa por alto los espacios en blanco
			indice++;
		}
		var palabra='';		
		while (frase[indice] != '.' && frase[indice] != ' '){
			palabra=palabra + frase[indice];
			indice++;
		}
		console.log(palabra);
		if(palabra == palabraIngresada){
			cantidad++;
		}
    }
    return cantidad;
}
var frase=prompt('Ingrese la frase a procesar.');
var palabraIngresada=prompt('Ingrese la palabra a procesar.');
console.log(comprobarFrase(frase, palabraIngresada));
