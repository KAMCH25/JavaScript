
let n; 

n = prompt("Ingrese un numero de 1 a 7 ");

console.log(n);

/* if (n == 1){
    console.log("Lunes");
}else if (n == 2){
    console.log("Martes");
}else if (n == 3){
    console.log("Miercoles");
}else if (n == 4){
    console.log("Jueves");    // Para evitar comparar o condicionar cada valor lo podemos realizar     
}else if (n == 5){            // la estructura switch  lo mismo mas simplificado
    console.log("Viernes");
}else if (n == 6){
    console.log("Sabado");
}else if (n == 7){
    console.log("Domingo");
}else {
    console.log("Valor  Erroneo");
} */

switch (n) {
    case '1':
        console.log("Lunes");
        break;

    case '2':
        console.log("Martes");
        break;

    case '3':
        console.log("Miercoles");   // codigo mas ordenado y mas facil de leer
        break;

    case '4':
        console.log("Jueves");
        break;

    case '5':
        console.log("Viernes");
        break;

    case '6':
        console.log("Sabado");
        break;

    case '7':
        console.log("Domingo");
        break;

    default:
        console.log("Valor Erroneo");
        break;
}