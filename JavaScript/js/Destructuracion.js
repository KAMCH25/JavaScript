let Persona = {
    Nombre: 'Kevin',
    Apellido: 'Martinez',
    Email: 'kamch.25.11.2000@gmail.com',
    Edad: 22,
}

console.log(`Hola mi Nombre es ${Persona.Nombre}`);
console.log(`Hola mi Apellido es ${Persona.Apellido}`);  
console.log(`Hola mi Correo es ${Persona.Email}`);
console.log(`Hola mi Edad es ${Persona.Edad}`);

/* Destructuracion  */
let Persona2 = {
    Nombre: 'Kevin',
    Apellido: 'Martinez',
    Email: 'kamch.25.11.2000@gmail.com',
    Edad: 22,
}

let {Nombre, Apellido, Email, Edad} = Persona2;  // nobre de variables coincidir con las propiedades del objeto

console.log(`Hola mi Nombre es ${Nombre}`);
console.log(`Hola mi Apellido es ${Apellido}`);
console.log(`Hola mi Correo es ${Email}`);
console.log(`Hola mi Edad es ${Edad}`);

/* Destructuracion  pero lllamando de otra forma a las variables  */
let Persona3 = {
    Nombre2: 'Kevin',
    Apellido2: 'Martinez',
    Email2: 'kamch.25.11.2000@gmail.com',
    Edad2: 22,
}

let {Nombre2: NAME, Apellido2: Ape, Email2: Correo, Edad2:Años} = Persona3;  //(:) luego nombre de la variable donde quiero almacenar

console.log(`Hola mi Nombre es ${NAME}`);
console.log(`Hola mi Apellido es ${Ape}`);
console.log(`Hola mi Correo es ${Correo}`);
console.log(`Hola mi Edad es ${Años}`);


/* Destructuracion   */

let Persona4 = {
    Nombre4: 'Kevin',
    Apellido4: 'Martinez',
    Email4: 'kamch.25.11.2000@gmail.com',
    Edad4: 22,
    Direccion:{
        pais: 'Peru',
        Ciudad: 'Lima',
    }
}

let {Nombre4, Apellido4, Email4, Edad4, Direccion:{pais, Ciudad}} = Persona4;  // nobre de variables coincidir con las propiedades del objeto
/* let{pais, Ciudad} = Direccion;  podriamos usar esto pero no porque ya destructuramos arriba */   

console.log(`Hola mi Nombre es ${Nombre4}`);
console.log(`Hola mi Apellido es ${Apellido4}`);
console.log(`Hola mi Correo es ${Email4}`);
console.log(`Hola mi Edad es ${Edad4}`);
/* console.log(`Hola mi Pais es ${Direccion.pais}`)  no las utilizamos estas porque restructuramos Direccion 
console.log(`Hola mi Ciudad es ${Direccion.Ciudad}`) */
console.log(`Hola mi Pais es ${pais}`)
console.log(`Hola mi Ciudad es ${Ciudad}`)

/* Tambien podemso Destructurar Arrays  */

let frutas =['Manzana', 'Pera', 'Uva', 'Sandia', 'Melon'];

let [Fruta1, Fruta2, Fruta3, Fruta4, Fruta5]= frutas; //con los arrfay podemos colocar cualquier tipo de nombre a nuestra variables 
/* let [,Fruta4];  para recuperar un solo valor */

console.log(`Fruta 1 ${Fruta1}`);
console.log(`Fruta 2 ${Fruta2}`);
console.log(`Fruta 3 ${Fruta3}`);
console.log(`Fruta 4 ${Fruta4}`);
console.log(`Fruta 5 ${Fruta5}`);

 