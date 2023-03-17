function saludar(){
    console.log("Hola Mundo");
    console.log("Mi Nombre  es Kevin");
}

saludar();

function Factorial(){

    let resultado= 1;

    for (let i = 1; i <= 7; i++) {  //factorial 7
        
        resultado *=i;
        
    }
    return resultado;  // retornamos valor
   /*  console.log(resultado); */
}

let res = Factorial();
console.log(res);
/* Factorial(); */

/* funcion dando el valor que queremos  */
function FactorialR(n){  /*(n = 10)  damos valor desde aca  abajo en (let RESP )podemos cambiar valor o dejar el asignado  */

    let resultado= 1;

    for (let i = 1; i <= n; i++) {  //factorial del numero que ingrasamos 
        
        resultado *=i;
        
    }
    return resultado;  
}

let RESP = FactorialR(3);  // () podemos ingresal el valor que la damos a la variable (n)
console.log(RESP);


/* las variables que se defina dentro de una funcion  solo sirve para la funcion no podemos accesdere a la 
varible desde afuera de la funcion, si definimos una variable por fuera de una fucnion la podemos utilidar 
desde dentro de caulquier funcion 

si definimos una varible deigual  fuera de una funcion tanto como adentro la funcion tamo el valor de la varible 
dentro no afecta en nada la variable con el mismo nombre de manera global*/

let n1 = 5;
let n2 = 10;
let n3 = 5;

function reemplazarNo(n1){ //nos esta pasando el valor del  numero mas no esta pasando la variable como tal
    n1 = 7; // no editamos la variable global n1 solo internamente el valor  
}

reemplazarNo(a);
console.log(a);


let numeros =[1, 2, 3];

function reemplazar(numeros){ ///en este casa pasamos un referencia 
    numeros [0] = 10;   /// reemplazamos el Numero en el indice (0) de un array modificamos el array
}

reemplazar(numeros);
console.log(numeros);

