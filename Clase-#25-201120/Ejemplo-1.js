/** 
 * Ejemplo desarrollado en clase
 */

// Definición del registro

function crearAlumno(p_nroLegajo, p_nombreCompleto, p_dni, p_fechaNacimiento) {
    return {
        nroLegajo : p_nroLegajo,
        nombreCompleto : p_nombreCompleto,
        dni : p_dni,
        fechaNacimiento : p_fechaNacimiento
    };
}

let alumno1 = crearAlumno('LS00245', 'Cosme Fulanito', '12345678', '14/11/2000');
let alumno2 = crearAlumno('AS90246', 'Bartolomeo Simpson', '23456789', '14/07/1998');
let alumno3 = crearAlumno('AS90246', 'Lisa Simpson', '34567890', '14/05/2002');

// console.log(alumno1);
// console.log(alumno2);
// console.log(alumno3);

let alumnos2021 = [];
alumnos2021.push(alumno1);
alumnos2021.push(alumno2);
alumnos2021.push(alumno3);


console.log('Alumnos para el ciclo 2021');
for (let i = 0; i < alumnos2021.length; i++) {
    console.log(`Alumno: ${alumnos2021[i]['nombreCompleto']}`);    
}