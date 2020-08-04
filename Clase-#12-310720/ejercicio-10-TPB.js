function calcularCosto(cantidadLitros, precioLitro) {
    let baseImponible = cantidadLitros * precioLitro;
    let iva = baseImponible * 0.21;
    let iibb = baseImponible * 0.035;
    return baseImponible + iva  + iibb;
}

console.log(calcularCosto(33.5,50.04));