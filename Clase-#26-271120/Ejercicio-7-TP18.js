/*Se tiene una colección de cuadros de los cuales se conoce el título del cuadro, el
nombre del artista, precio de venta y si actualmente el cuadro está en venta o no. Se
solicita.
● Definir la función para crear estos registros.
● Crear una función para calcular los ingresos a obtener si se venden todos los
cuadros que están disponibles. */

function ColeccionArte(p_Titulo, p_Artista, p_Precio, p_enVenta) {
    return {
        Titulo: p_Titulo,
        Artista: p_Artista,
        Precio: p_Precio,
        enVenta: p_enVenta,
    }
}

let cuadros = [];
cuadros.push(ColeccionArte('Días de verano', 'Teresa Infiesta', 30000, true));
cuadros.push(ColeccionArte('Nostalgia del este', 'Rocío Arias', 28900, false));
cuadros.push(ColeccionArte('Los Noctámbulos', 'Hopper', 19000, true));
cuadros.push(ColeccionArte('El Beso', 'Klimt', 18275, false));

// total esperado = 49000

function IngresosTotales(cuadros) {
    let total = 0;
    for (let i = 0; i < cuadros.length; i++) {
        if (cuadros[i]['enVenta'] == true) {
            total += cuadros[i]['Precio'];
            console.log(total);
        }
    }
    return total;
}
console.log(IngresosTotales(cuadros));