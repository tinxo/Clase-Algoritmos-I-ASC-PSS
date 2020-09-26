/** 
 * Código del método de ordenación por selección
 */

function ordenacionSeleccion(valoresOrdenar) {
    let minimo = 0;
    let iteraciones, idx, cambio;
    for(iteraciones = 0; iteraciones < (valoresOrdenar.length-1); iteraciones++){
        minimo = iteraciones;
        for(idx = iteraciones + 1; idx < (valoresOrdenar.length-1); idx++){
            if (valoresOrdenar[minimo] > valoresOrdenar[idx]) {
                minimo = idx; 
            }
        }
        cambio = valoresOrdenar[minimo];
        valoresOrdenar[minimo] = valoresOrdenar[iteraciones];
        valoresOrdenar[iteraciones] = cambio; 
    }
    return valoresOrdenar;
}

let numeros = [10, 5, 3, 9, 8, -1];
console.log(`Original: ${numeros}`);
let ordenados = ordenacionSeleccion(numeros);
console.log(`Ordenado: ${ordenados}`);