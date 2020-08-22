/**
 * Ejercicio desarrollado en clase - Ejercicio 7 TP 11
 * 
 * Consigna:
 * Escribir un programa que permita ingresar una frase y un caracter 
 * cualquiera. En caso que el caracter exista dentro de esa cadena, 
 * se imprimirá la posición en que se encuentre y se repetirá todo 
 * otra vez (es decir, se ingresará otra cadena y otro caracter a buscar). 
 * El programa termina cuando una búsqueda devuelve cero. Para resolver el 
 * ejercicio, se deberá usar un módulo que reciba ambos datos y devuelva 
 * la posición en que se encuentre el carácter (o cero si no existe).
 */


 function comprobarCaracter(frase, caracter){
	var indice=0;
	var resultado;
	while(frase[indice] != '.'){
		while(frase[indice] == ' '){
			indice++;
		}
		resultado='';
		if(frase[indice] == caracter){
			resultado= 'Se encontro el caracter en la posición '+indice;
			return resultado;
		}
		indice++;

	}
	if(resultado === ''){
		return 0;
	}
}

var valor= comprobarCaracter(prompt('Ingrese la frase'), prompt('Ingrese el caracter') );
while(valor !== 0){
	console.log(valor);
	valor= comprobarCaracter(prompt('Ingrese la frase'), prompt('Ingrese el caracter') );
}
