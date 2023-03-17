/* Operador (+) */

let a = 4;
let b = 5;
let c = "6";

let nombre = "Kevin ";
let apellidos = "Martiez";

console.log(a+b);  /* (+) sumamos dos vairables tipo Numero  */
console.log(nombre+apellidos);  /* (+) Concatenamos dos Variables tipo String */
console.log(nombre+b); /* (+) concatenamos dos variables de diferente tipo, cuando JavaScrip identifica una 
                       variable de tipo cadena trasforma la otra variable igalamente a tipo cadena */ 
console.log(parseInt(c)+a);  /* tranformamos el contenido de la variable a entero para poder sumar  */ 
console.log((+c)+a);  /* con esta estrcutura optenemos el mismo resultadoquje con (ParseInt(c) */ 

/* Operadores Aritmeticos  */

console.log("Operadores Aritmeticos");

let n1 = 20;
let n2 = 30;
let n3 = 7; 

console.log(n1 + n2);  /* (+) Suma */
console.log(n1 - n2);  /* (-) Resta */
console.log(n1 * n2);  /* (*) Multiplicacion */
console.log(n1 / n3);  /* (/) Divicion */
console.log(n1 % n3);  /* (%) Residuo de Divicion  */
console.log(n1 ** n3); /* (**) exponenciacion */

/* Operadores de incremento y decremento   */

console.log("Operadores de incremento y decremento ");

n1++ /* ++n1 */
n2-- /* --n2 */

let n4 = ++n3; /* colocamos operadores adelante para que tome el valor antes
             de imprimir de lo contrario solo nos mostrara el valor de n3 sin incremento */

console.log(n1);  /* incrementamos el valor de n1 en una unidad mas 20 a 21  */
console.log(n2);  /* disminuimos  el valor de n2 en una unidad mas 30 a 29  */
console.log(n4);  /*  */

/* Operadores de Asignacion  */

console.log("Operadores de Asignacion ");

let p = 5; 

p += 2; /* simplificamos proceso de suma (+) los mismo que (p = p  + 2;) igual para (-)(*)(/)(%)(**) */

console.log(p);

