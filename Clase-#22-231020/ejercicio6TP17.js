//Creación
let matriz= new Array(5);
for (let i = 0; i < matriz.length; i++) {
    matriz[i]=new Array(5);    
}
//Carga
function carga(matriz) {
    matriz[0][0]=50;
    matriz[0][1]=20;
    matriz[0][2]=70;
    matriz[0][3]=50;
    matriz[0][4]=90;
    matriz[1][0]=60;
    matriz[1][1]=10;
    matriz[1][2]=50;
    matriz[1][3]=50;
    matriz[1][4]=50;
    matriz[2][0]=40;
    matriz[2][1]=20;
    matriz[2][2]=60;
    matriz[2][3]=30;
    matriz[2][4]=60;
    matriz[3][0]=50;
    matriz[3][1]=30;
    matriz[3][2]=80;
    matriz[3][3]=60;
    matriz[3][4]=70;
    matriz[4][0]=40;
    matriz[4][1]=10;
    matriz[4][2]=80;
    matriz[4][3]=50;
    matriz[4][4]=60;
    return matriz;
}
console.log(carga(matriz));

//a - Gastos totales
function gastosTotales(matriz) {
    let arrayGastos= [];
    for (let f = 0; f < matriz.length; f++) {
        let auxSuma=0;
        for (let c = 0; c < matriz.length; c++) {
            auxSuma=auxSuma+ parseFloat(matriz[f][c]);            
        }
        arrayGastos.push(auxSuma);        
    }
    return arrayGastos;
}
console.log(gastosTotales(matriz));

//B 
function porcentaje(total,costo) {
    return (costo/total)*100;
}
function porcentajeLogistica(matriz) {
    let arrayTotales=gastosTotales(matriz);
    let mayor=0;
    let lab=0;
    for (let i = 0; i < matriz.length; i++) {
        let auxPorcentaje= porcentaje(arrayTotales[i],matriz[i][4]);
        if(mayor<auxPorcentaje){
            mayor=auxPorcentaje;
            lab=i+1;
        }
    }
    return lab;
}
console.log(porcentajeLogistica(matriz));

function porcentajeLuzAgua(matriz) {
    let arrayTotales=gastosTotales(matriz);
    let mayor=0;
    let lab=0;
    for (let i = 0; i < matriz.length; i++) {
        let auxSuma=matriz[i][0] + matriz[i][1]
        let auxPorcentaje= porcentaje(arrayTotales[i],auxSuma);
        if(mayor<auxPorcentaje){
            mayor=auxPorcentaje;
            lab=i+1;
        }
    }
    return lab;
}
console.log(porcentajeLuzAgua(matriz));
