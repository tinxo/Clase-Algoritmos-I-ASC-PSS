/** 
 * Ejercicio 10 - TP 14
 */

let vectA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];// elementos a pasar al vector C
let vectB = [3, 0, 6, 2, 1, 4, 8, 5, 9, 7];// indica la posición en A.
let vectC = [];// vector de resultado


// Inciso A
function VectorTres(vectorA,vectorB){
    let vectorC=[];
    for (let index = 0; index < vectorA.length; index++) {
        if(vectorA[index]<vectorB[index]){
            vectorC.push(vectorB[index]);
        }else{
            vectorC.push(vectorA[index]);
        }
    }
    return vectorC;
}

// Inciso B
function retornarVectorC(A, B, C){
    for(let i = 0; i < A.length; i++){
        C.push(A[B[i]]);
    }
}

function impresion(V){
    for(let i = 0; i < V.length; i++){
    console.log(V[i]);
    }
}

vectC = VectorTres(vectA, vectB)
impresion(vectC);
// Se reinicia el vector C antes del punto B
let vectC = [];
retornarVectorC(vectA, vectB, vectC);
impresion(vectC);