// endswith()

let cadena1 = 'I aint gonna live forever';

console.log(cadena1.endsWith('ever'));

// includes() -- es case sensitive

let cadena2 = 'I just want to live while Im alive';

console.log(cadena2.includes('live'));

// indexOf()

let cadena3 = 'No dark sarcasm in the classroom';

console.log(cadena3.indexOf('dark'));

// lastIndexOf()

let cadena4 = 'All in all you are just another brick in the wall';

console.log(cadena4.lastIndexOf('all'));

// replace()

let cadena5 = 'Hey you, out there in the cold';

console.log(cadena5.replace('you', 'U'));

// slice() -- ver si no conviene usar substring()

let cadena6 = 'But it was only fantasy';

console.log(cadena6.slice(0,2));

// startsWith()

let cadena7 = 'Hey you with you ear against the wall';

console.log(cadena7.startsWith('Hey'));

// toLowerCase() - toUpperCase()

let cadena8 = 'Ticking away the moments that make up a dull day';

console.log(cadena8.toLowerCase());
console.log(cadena8.toUpperCase());

// trim()

let cadena9 = '     im giving you space    ' ;

console.log(cadena9.trim());