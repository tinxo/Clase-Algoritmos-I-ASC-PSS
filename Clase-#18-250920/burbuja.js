/** 
 * Código del método de ordenación por burbuja (básico)
 */

function ordenacionBurbuja(valoresOrdenar) {
    let idx, cambio;
    for (let iteraciones=0; iteraciones < (valoresOrdenar.length-1); iteraciones++){
        for (idx = 0; idx < (valoresOrdenar.length - iteraciones - 1); idx++){
            if (valoresOrdenar[idx] > valoresOrdenar[idx + 1]){
                cambio = valoresOrdenar[idx];
                valoresOrdenar[idx] = valoresOrdenar[idx + 1];
                valoresOrdenar[idx + 1] = cambio;
            }
        }
    }
    return valoresOrdenar;
}

let numeros = [10, 5, 3, 9, 8, -1];
console.log(`Original: ${numeros}`);
let ordenados = ordenacionBurbuja(numeros);
console.log(`Ordenado: ${ordenados}`);
