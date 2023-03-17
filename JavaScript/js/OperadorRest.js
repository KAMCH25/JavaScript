function suma(a, b) {  // definimos que queremos sumas 2 valores
    return a + b;
}

console.log(suma(4,5));

function suma2(a, b, c) {  // definimos que queremos sumar 3 valores 
    return a + b +c ;
}

console.log(suma(4, 5, 5));



/* PERADOR REST utilizado cuando no tenemos definidos los valores que queremos utilizar en una funcion  */
function sumaf(...valores) {  // (...)Operador REST usoado para no estar definiendo los valores que que resmos sumar 
                                // simplemetes el ingresarlos los detecta y los coloca en un array 
    let Resultado = 0;

    valores.forEach(function(valor){   // recorremos el array valores y los guardamos los valores en una varible (valor)
        Resultado += valor;
    });
    return Resultado;
}

console.log(sumaf(1, 3, 4));


