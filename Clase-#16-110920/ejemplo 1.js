/**
 * Ejemplo de errores - correcciones 1
 * Se presenta el código corregido y al final del archivo el original
 */

var idx=0;
var coincidencias=0;
var cdor=0;
var frase='astas abanicos auto cables#';
while(frase[idx]!="#"){
    if (frase[idx]=="a"){
        if ( (frase[idx-1]===" ")){
            console.log("no hay nada detras y esta es la letra " + frase[idx+1]);
        }
    }
    idx++;
}

/** 
 * Código original:
 
var idx=0;
var coincidencias=0
var cdor=0
var frase='astas abanicos auto cables#';
while(frase[idx]!="#"){
    if (frase[idx]=="a"){
        if ((frase[idx-1]===null)|| (frase[idx-1]===" ")){
            console.log("no hay nada detras y esta es la letra " ,frase[idx+1])
        }
    idx++
    }
}

 */