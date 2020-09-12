/**
 * Ejemplo de errores - correcciones 2
 * Se presenta el código corregido y al final del archivo el original
 */

function palabraLargaA(cadena) {
    let indice = 0;
    let max = 0;
    let palabraMax = '';
    //let palabraA = '';
    while (cadena[indice] != '.') {
        while (cadena[indice] == ' ') {
            indice++;
        }
        let palabraA = '';
        if (cadena[indice] == 'a' || cadena[indice] == 'A') {
            while ((cadena[indice] != ' ') && (cadena[indice] != '.')) {
                palabraA += cadena[indice];
                indice++;
                
            }
            if (palabraA.length > max) {
                palabraMax = palabraA;
                max = palabraMax.length;
            }
        }else{
            while ((cadena[indice] != ' ') && (cadena[indice] != '.')) {                
                indice++;
            }
        }
    }
    return palabraMax  
}
console.log(palabraLargaA('asta  ala amancio caesar.'));


/** 
 * Código original:
 
function palabraLargaA(cadena) {
    let indice = 0;
    let max = 0;
    let palabraMax = '';
    let palabraA = '';
    while (cadena[indice] != '.') {
        while (cadena[indice] == ' ') {
            indice++;
        }
        let palabraA = '';
        if (cadena[indice] == 'a' || cadena[indice] == 'A') {
            while ((cadena[indice] != ' ') && (cadena[indice] != '.')) {
                palabraA += cadena[indice];
                indice++;
                if (palabraA.length > max) {
                    palabraMax = palabraA;
                    max = palabraMax.length;
                }
            }
        }
    }
    return palabraMax  
}
console.log(palabraLargaA('asta ala amancio.'));

 */