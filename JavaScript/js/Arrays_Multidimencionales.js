let Persona1 = ['kevin Martinez', 'Tecnico Sistemas', 2 ]; 
let Persona2 = ['Vicator Arana', 'Programador', 30];  ///
let Persona3 = ['Maria Lopez', 'Contadora', 27];

let Personas = [Persona1, Persona2, Persona3];

console.log(Personas); //Recuperamos informacion del primer array  que esta en el indice 0 

console.log(Personas[0][1]); // Reuperamos informacion del   array  que esta en el indice 0 (personas) y ademas 
                               //mostramos solo la informacion del indice 1 en array (Persona1)

for (let i = 0; i < Personas.length; i++) {
    console.log(Personas[1]);  //mostramos todos los arrays que estan dentro del array personas 
} 


console.log(" para imprimir el contenido de los arrays ")
console.log("__________________________________________")

/* para imprimir el contenido de los arrays  */
for (let i = 0; i < Personas.length; i++) {
    let Persona = Personas[1];  //almacenamos los array en la variable persona 

    console.log(Persona[0]);
    console.log(Persona[1]);
    console.log(Persona[2]);

    console.log("___________________________________________")
}
/* para imprimir el contenido de los arrays de una forma mas simplificada   */
console.log(" para imprimir el contenido de los arrays de una forma mas simplificada  ")
console.log("__________________________________________")
for (let i = 0; i < Personas.length; i++) {
    let Persona = Personas[1];  //almacenamos los array en la variable persona 

    for (let j = 0; j < Persona.length; j++) {
        console.log(Persona[j]);
        
    }
    console.log("___________________________________________")
}



