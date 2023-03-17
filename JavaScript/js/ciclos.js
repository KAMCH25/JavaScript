/*
let a = 11;

 while (a <= 10) {
    console.log("Hola mundo");
    a++;               //si ejecutamos esto sin colocar valor de ncremeto para a el bucle seria infinito 
}                      // pero si colocamos valor de incremento en a el bucle ternina al cumplir la condicion 
    
    console.log("Fin de ciclo While");
    */ 
 

  /*   do {       // ejecuta le sentencia luego evalua si cumple o no cumple la condicion, aseguramos que se ejecute una vez la sentencia
    console.log("Hola mundo");
    a++;

    } while (a <= 10);
    console.log("Fin de ciclo While"); */

/* 
    let b;

    do {
        b = prompt("ingrese un valor de 1 a 7");   

    } while (b < 1 || b > 7);    //condicionamos dos vesces, sin ingresa un numero en el rango de 1 a 7 fin de ciclo 
                                // de lo contrario el ciclo vuelve apedir un valor hasque que ingrese un valor valido
    
        console.log("Fin de ciclo While"); */


for (let a = 1; a <=10; a++) {
    
    console.log("Hola mundo");
    
}        
console.log("Fin de ciclo for");

 /* Calcular potencia de un Numero  */

let base = prompt("Ingrese la Base");
let potencia = prompt("Ingrese una potencia");  // Ejecutar proyecto por peoyecto 
let resultado = 1;

for (let i = 1 ; i <= potencia ;i++) {
    resultado *= base;
        
}
    console.log(`base es iguaal a ${base} y Potencia es igual a ${potencia} el resultado es iugal a ${resultado}`); 

/* crear arbolito  */


let n = prompt("introdusca un Numero");

for (let l = 1; l <= n; l++) {

    let cadena = '';

    for (let j = 1; j<= l; j++){

        cadena = cadena + '*';
      
    }
    console.log(cadena);

}