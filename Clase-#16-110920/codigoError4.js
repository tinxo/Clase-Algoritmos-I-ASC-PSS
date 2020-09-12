/**
 * Ejemplo de errores - correcciones 4
 * Se presenta el código corregido y al final del archivo el original
 */

function contarLetraP(cadena){
	//let cadena = 'La primera de Patronato.';
	let i= 0;
	let cantidad=0;
	let palabra= '';
	while(cadena[i] != '.'){
		while(cadena[i] == ' '){
			i++;
		}
		palabra = '';
		while(cadena[i] != ' ' && cadena[i] != '.'){
			palabra = palabra + cadena[i];
			i++;
		}
		console.log(palabra);
		
		if(palabra.length > 0 && palabra[0].toUpperCase()== 'P'){
			cantidad++;
		}
	}
	return cantidad;
}	

console.log(contarLetraP('la papa.'));

/** 
 * Código original:
 
function contarLetraP(texto)
let cadena = 'La primera de Patronato';
let i= 0;
let cantidad=0;
let palabra= '';
	while(cadena[i] != '.'){
		while(cadena[i] == ' '){i++}
		palabra = '';
		while(cadena[i] != ' ' && cadena[i] != '.'){
			palabra = palabra + cadena[i];
			i++;
		}
		
		if(palabra.length > 0 && palabra[0].toUpperCase()== 'P'){
			cantidad++;
		}
	}
	

console.log('La cantidad de palabras que tienen p son: ', cantidad);

 */