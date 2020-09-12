/**
 * Ejemplo de errores - correcciones 3
 * Se presenta el código corregido y al final del archivo el original
 */

function cantPalabras(cadena) {
	var indice =0;
	var cadenaFinal = '';
	while(cadena[indice] != '#'){
		while(cadena[indice] == ' '){
			indice++;
		}
		if(cadena[indice] == 'A' || cadena[indice] == 'a'){
			var temporal = '';
			while(cadena[indice] != ' ' && cadena[indice] != '#'){
				temporal += cadena[indice];
				indice++;
			}
			if(cadena[indice-1] == 's'){
				if(temporal.length > 4) {
					cadenaFinal += temporal + '-';
					indice++;
				}
			}
		} else {
			while(cadena[indice] != ' ' && cadena[indice] != '#'){
				indice++;
			}
		}
		
	}
	return cadenaFinal;
}
console.log(cantPalabras('alfajores Alabardas alfa cebolla zapallo alas #'));

/** 
 * Código original:
 
function cantPalabras(cadena) {
	var indice =0;
	var cadenaFinal = '';
	while(cadena[indice] != '#'){
		while(cadena[indice] == ' '){
			indice++;
		}
		var temporal = '';
		if(cadena[indice] == 'A' || cadena[indice] == 'a'){
			while(cadena[indice] != ' ' && cadena[indice] != '#'){
				temporal += cadena[indice];
				indice++;
			}
		}
		if(cadena[indice-1] == 's'){
			if(temporal.length > 4) {
				cadenaFinal += temporal + '-';
				indice++;
			}
		}
	}
	return cadenaFinal;
}
console.log(cantPalabras('alfajores Alabardas alfa cebolla zapallo alas #'));

 */