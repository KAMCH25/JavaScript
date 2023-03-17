/* Operador Spread  funciona de forma contraria al Opredor Rest
miestras que el el Operador Rest genera un Array a partir de una lista de valorse 
el Operador Spread genera un lista apartir  de un Array */

let menor = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9); // analiza los numeos que le estamos pasando y verifica 
           // cual es el menor de ellos  y la variable menor almacena el numero menor 

console.log(menor);  


let valores1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let menor1 = Math.min(valores1); // presenta error NaN porque valores no es de tipo numerico 

console.log(menor1);  

/* utilizamos Operado Spread */

let valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let menor2 = Math.min(...valores2); //(...) Operador Spread  para que  pueda leer el contenido de array valores 
                                //(...)Transforma un array en una lista de elementeos 

console.log(menor2);

/* Como distiguimos El Opresdor Rest del Operador Spresad
Operador Rest se utiliza adelante de una fucnio mientras que 
Operador spread se utiliza adelante de un Array  */

/*  otra forma de Utilzar el Operador Spread */

let a = [1, 2, 3];

let b = [4, 5, 6];

let c = [...a, ...b];  //(...)Utilizamos operador Spread para crear un tercer Array con los 2 antes creados 
                    // unimos los dos primeros array y creamos un tercero 

console.log(c);                    

