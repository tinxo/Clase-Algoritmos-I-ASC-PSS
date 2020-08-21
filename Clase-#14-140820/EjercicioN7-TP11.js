//Ejercicio N° 7- TP11 String II
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
