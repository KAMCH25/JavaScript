
let Nombres = ['kevin', 'andres', 'Lina', 'Juan', 'Ana', 'Maria']; 

Nombres[6] = 'Rosa';  // agregamos un nuevo valor en el array en el idice 6 o el ultimo 

Nombres.push('Carlos');  // Agregamos un nuevo valor en el array de esta manera automatiamente se asigna el idice

                                            // los indices incian en 0 
console.log(Nombres);  // recuperamos todos los valores del array 
console.log(Nombres [1]); //recuperamos el valor del indice 1 en este caso 'andres' 

/* Forma para recorrer una array  */

for (let i = 0; i < Nombres.length; i++) {   //(Nombre.length) para conocer la longitud de un array 

    console.log(Nombres[i]); // mostramos  el contenido de un array 
    
}

console.log("Metodo que ForEach");

Nombres.forEach(function(Nombre) {  // recorremo los elementos del array y almacena la informacion en la variable Nombre 
    console.log(Nombre);
});

/* ______________________________________________________________________________________ */
let Array = ['kevin', 'andres', 'Lina', 'Juan', 'Ana', 'Maria', 12, true]; 
/* en un array en javascript podemos al macenar datos de direfentes tipos sin ningun problema */