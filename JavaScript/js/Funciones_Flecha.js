 function Nombre() {
    console.log("Victor");   // forma normal de definir funciones 
}

 // forma flecha  de definir funciones 

const Nombre2 = () => {
    console.log("andres martinez desde la funcion flecha");
}

Nombre();   // mostramos el contenido de la funtion normal
Nombre2();  // mostramos el contenido de la funtion flecha

/* funcion que retorna valor  */

const Nombre3 = () => {

    return 'KEVIN'     /// forma larga para retornar un valor 
    
}

let valor = Nombre3();
console.log(valor);
 
//////////////////////////////////////////////////////////////

const Nombre4 = () => 'Kevin' + ' Martinez';  // forma simplificada de retornar un valor 

let valor2 = Nombre4();
console.log(valor2);

