/** 
 * Código usado en la presentación del tema
 */

// Definición de un registro con valores fijos

let unProducto = {
    sku : 'AAM3500FC',
    descripcion : 'Aire Acondicionado',
    cantidad : 20,
    precioUnitario : 40000.10,
    pctGanancia : 30.5
};

console.log(unProducto);

// Definición de una función para generar registros

function crearProducto(p_sku, p_descripcion, p_cantidad, p_precioUnitario, p_pctGanancia) {
    return {
        sku : p_sku,
        descripcion : p_descripcion,
        cantidad : p_cantidad,
        precioUnitario : p_precioUnitario,
        pctGanancia : p_pctGanancia
    };
}

let producto1 = crearProducto('TCMG9P', 'Telefono celular', 30, 30000, 40);
let producto2 = crearProducto('TAIPAD8', 'Tablet', 10, 80000, 50);

console.log(producto1);
console.log(producto2);

// Acceso a los campos de un registro
let producto3 = crearProducto('TVLHD40', 'TV40pHD', 30, 30000, 30);

console.log(`Identificador del producto: ${producto3['sku']}`);
console.log(`Precio unitario: ${producto3['precioUnitario']}`);
console.log(`Cantidad disponible: ${producto3['cantidad']}`);

producto3['cantidad'] += 10;

console.log(`Cantidad disponible: ${producto3['cantidad']}`);

// Definición de una colección para almacenar los registros

let productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);

console.log(`Cantidad de productos: ${productos.length}`);
let primerProducto = productos[0];
console.log(`Un registro completo: ${primerProducto['sku']}`);
console.log(`Un campo de un registro: ${productos[1]['descripcion']}`);
