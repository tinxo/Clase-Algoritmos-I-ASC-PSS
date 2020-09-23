
function inverso(){
    
    for (let index = 0; index < 10 ; index++) {
        vector.push(prompt('Ingrese el valor'));        
    }
/*
    for (let index = 9; index >=0 ; index--) {
        console.log(vector[index]);        
    }*/

    for (let index = 0; index < 10 ; index++) {
        console.log(vector.pop()); 
            
    }
    
}
var vector=[];
inverso();
console.log(vector);
