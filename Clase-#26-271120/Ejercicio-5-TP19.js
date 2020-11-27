function crearRegistro (p_nroLegajo, p_fecha, p_cantHoras) {
    return {
        nroLegajo: p_nroLegajo,
        fecha: p_fecha,
        cantHoras: p_cantHoras
    };
}

let empleados = [];
// Empleado 1
empleados.push(crearRegistro(1, '25/11/20', 2));
empleados.push(crearRegistro(1, '27/11/20', 1));
// Empleado 2
empleados.push(crearRegistro(2, '27/11/20', 3));
// Empleado 4
empleados.push(crearRegistro(4, '23/11/20', 1));
empleados.push(crearRegistro(4, '27/11/20', 2));

//console.log(empleados);

function calcularHsExtra(listado = []) {
    let i = 0;
    // Variable en la que voy a devolver el resultado completo
    let resultado = []; 
    while (i < listado.length) {
        // Controlo el recorrido completo del array
        let unLegajo = listado[i]['nroLegajo'];
        let suma = 0;

        // Se tiene que traer la condición del while "padre"
        // Y esa condición tiene que ir primera para evitar errores
        // Esto se hace por el orden de procesamiento de las condiciones que hace el interprete
        while (i < listado.length && unLegajo == listado[i]['nroLegajo']) {
            // Este bucle procesa todos los registros de hs extra de UN empleado
            suma += listado[i]['cantHoras'];
            //console.log(`Legajo actual : ${listado[i]['nroLegajo']}`);
            i++;
        }
        // Termina de procesar a un empleado
        //console.log(`Nro de legajo: ${unLegajo} -- Cant Hs Extras: ${suma}`);
        
        // Genero un registro auxiliar para el resultado que tengo que devolver
        let registroResultado = {
            nroLegajo: unLegajo,
            sumaHsExtras: suma
        };
        // Cargo este registro auxiliar de resultado en el array de resultados
        resultado.push(registroResultado);
    }
    return resultado; // Devuelvo el resultado completo
}

console.log(calcularHsExtra(empleados));