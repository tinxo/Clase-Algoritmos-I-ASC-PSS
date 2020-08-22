/**
 * Ejemplos presentes en la presentación de la clase.
 */

// Métodos: toLowerCase() - toUpperCase()

let cadena0 = 'no estoy GRITANDO!';

console.log(cadena0.toUpperCase());
// Imprime la cadena 'NO ESTOY GRITANDO!'

console.log(cadena0.toLowerCase());
// Imprime la cadena 'no estoy gritando!'

console.log(cadena0);
// Imprime la cadena 'no estoy GRITANDO!'

// -----------------------------------------

// Método: trim()

let cadena1 = '     Esto tiene espacios    ' ;

console.log(`-${cadena1.trim()}-`);
// Imprime la cadena sin espacios 
// como referencia se usan "-"
console.log(`-${cadena1}-`);
// Imprime la cadena sin cambios 

// -----------------------------------------

// Método: includes()

let cadena2 = 'I just want to live while Im alive';

console.log(`Contiene? ${cadena2.includes('live')}`);
// Imprime true

console.log(`Contiene? ${cadena2.includes('Live')}`);
// Imprime false

console.log(`Contiene? ${cadena2.includes('want', 20)}`);
// Imprime false

// -----------------------------------------

// Métodos: indexOf() - lastIndexOf()

let cadena3 = 'No dark sarcasm in the classroom';

console.log(`Posición de 'k': ${cadena3.indexOf('k')}`);
// Imprime el valor 6

console.log(`Posición de 'K': ${cadena3.indexOf('K')}`);
// Imprime el valor -1

console.log(`Posición de 'dark': ${cadena3.indexOf('dark')}`);
// Imprime el valor 3

let cadena4 = 'All in all you are just another brick in the wall';

console.log(`Última ocurrencia de 'all': ${cadena4.lastIndexOf('all')}`);
// Imprime el valor 46

// -----------------------------------------

// Método: replace()

let cadena5 = 'Hey you, out there in the cold';

console.log(`Resultado cambio: ${cadena5.replace('you', 'U')}`);
// Imprime Hey U, out there in the cold

console.log(`Resultado cambio: ${cadena5}`);
// Imprime Hey you, out there in the cold

// -----------------------------------------

// Método: slice() 

let cadena6 = 'But it was only fantasy';

console.log(`Resultado: ${cadena6.slice(0,3)}`);
// Imprime But

console.log(`Resultado: ${cadena6.slice(7)}`);
// Imprime was only fantasy

console.log(`Resultado: ${cadena6.slice(0,-7)}`);
// Imprime But it was only 

// -----------------------------------------

// Métodos: startsWith() - endswith()

let cadena7 = 'I play my part and you play your game';

console.log(`Inicia con? ${cadena7.startsWith('Me')}`);
// Imprime false

console.log(`Inicia con? ${cadena7.startsWith('play', 2)}`);
// Imprime true

console.log(`Termina con? ${cadena7.endsWith('game')}`);
// Imprime true

console.log(`Termina con? ${cadena7.endsWith('play', 10)}`);
// Imprime false