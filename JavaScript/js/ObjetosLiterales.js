 let Persona = ['KEVIN', 'ANDRES', 'LINA'];

 console.log(Persona[0]); // Para podre recuperar un de los parametoss del array debemos de contar los idices 
                            //para concer que parametro queremos mostrar perso si temenos muchos indices? para eso 
                        // se utilizan los Objetos literales 

/* Objeto Literal */                            
let Persona2 = {
    name:'kevin',
    apellidos: 'Martinez',
    edad: 23,
}          

console.log(Persona2['name']); // ya no llamamos el valor del indice sino las llaves que hacen como indices 
                               // no conatamos indices solo leemos las llaves 

console.log(Persona2.edad); // si trabajos con objetos los podemos mostrar de esta manera 

 /* almacenar una fucnion */
 
 let Persona3 = {
    name:'kevin',
    apellidos: 'Martinez',
    edad: 23,

    saludar(){ //forma recomendad de definir un metodo
        console.log(`Hola mi nombre es ${this.name}`);
    }

  /*   saludar: function(){  //definmos un metodo dentro de un objeto 
        console.log(`Holal mi Nombre es ${this.name}`)   /// this debuelbe el context donde estamos 
    } */
}   

Persona3.saludar();
