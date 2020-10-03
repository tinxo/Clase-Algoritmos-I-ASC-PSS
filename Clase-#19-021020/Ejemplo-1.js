let letras = ['A', 'B', 'F', 'X', 'Y', 'Z'];

// Verifico si existe una letra

if (letras.includes('A',1)) {
    console.log('Existe');
    let indice = letras.indexOf('A',1);
    console.log(`El elemento buscado está en la posición: ${indice}`);
} else {
    console.log('No existe');
    let indice = letras.indexOf('@');
    console.log(`El elemento buscado está en la posición: ${indice}`);
}

let email = 'martinrey@fceqyn.unam.edu.ar';
let emailSeparado = email.split('@');
console.log(emailSeparado);
let dominio = emailSeparado[1];
console.log(dominio);
let baseDominio = dominio.split('.',2)
console.log(baseDominio);