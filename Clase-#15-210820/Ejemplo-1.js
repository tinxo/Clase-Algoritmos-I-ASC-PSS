let cadena0 = 'hola mundo, hola, hola, la casa'; 

let mayus = cadena0.toUpperCase();

// quiero saber si en la cadena a procesar existe la secuencia "la"

console.log(`Contiene la secuencia 'la'? ${mayus.includes('LA')}`);
console.log(`En qué posición se encuentra 'la'? ${mayus.indexOf(' LA ')}`);
let recorte = mayus.slice(24,26);
console.log(`Imprimimos el recorte: ${recorte}`);

