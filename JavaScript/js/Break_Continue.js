for (let i = 0; i < 100; i++) {
   
    let nombre = prompt("Ingrese su nombre");

    if (nombre == ""){
        continue;                      // al momento de ingresar un nombre dejamos casilla vacia no se inprime continua con el sigueiente nombre  
    }

    
    if (nombre == 'exit'){
        break;                      // al momento de ingresar un nombre ingrasamos exit terminamos el ciclo 
    }

    console.log(nombre);
}

console.log("fin de programa");