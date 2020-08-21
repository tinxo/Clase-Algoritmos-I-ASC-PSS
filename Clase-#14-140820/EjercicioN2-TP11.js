//Ejercicio N° 7- TP11 String II
function comprobarCaracter(frase,caracter){
	var indice= 0;
	var resultado;	
	
	while(frase[indice] != '.'){ //Controla el final de la cadena
		while(frase[indice] == ' '){ //Pasa por alto los espacios en blanco
			indice++;
		}
		resultado='';		
		if(frase[indice] == caracter){
			resultado='Se encontró el caracter en la posición '+ indice;
			return resultado;
		}
		indice++;
    }
}
