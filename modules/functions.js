const functions = {};

console.clear();

const signo = (numero) => {//Funcion flecha llamada signo con un parametro llamado numero y es constante
  if (numero >=  0) {//Se verifica que el numero ingresado sea mayor o igual a cero con un estructura condicional if
    return 'positivo'//Si la condicion se cumple se ejecuta el bloque if dando devuelta una cadena texto diciendo positivo 
  }else{//El bloque else se ejecutara si la condicion de arriba no se cumple
    return 'negativo'//Si la condicion se cumple se ejecuta el bloque if dando devuelta una cadena texto diciendo negativo
  }

};


const interfazSigno = (numero) => {
    console.log(':::::::::::::::::::::::::::::::'.bgMagenta);
    console.log('::::    Funcion signo  ::::::::'.bgMagenta);
    console.log(':::::::::::::::::::::::::::::::'.bgMagenta);
    console.log(`::`.bgMagenta + `  el numero ${numero} es ` +
                  functions.signo(numero)+ `::`.bgMagenta);
    console.log(':::::::::::::::::::::::::::::::'.bgMagenta);
    return ' ';

}


const encontroCaracter = (caracter) => { //Funcion flecha llamada encontroCaracter con un parametro llamado caracter y es contante
  const datos = ['A', 'B', 'C', 'D','E'];//El tipo de dato o caracter que se da es string y se declara utilizando un array
  if (datos.includes(caracter)) {//utilizo una estructura condicional if para ver si caracter se encuentra en datos//se utiliza includes para verificar si el valor del caracter se encuentra en el array datos
    return 'se encuentra' //Si el valor caracter se encuentra en datos se retorna la cadena de texto se encuentra
  }else{//Si el caracter no se encuentra en datos se ejecuta el else
    return 'no se encuentra' //Si el caracter no se encuentra en datos se retorna la cadena de texto no se encuentra
  }

}


const interfazEncontroCaracter = (caracter) => {
    console.log(':::::::::::::::::::::::::::::::::::::'.bgBlue);
    console.log(':::   Funcion encontro caracter ::::'.bgBlue);
    console.log(':::::::::::::::::::::::::::::::::::::'.bgBlue);
    console.log(`::    el caracter  ${caracter.toUpperCase()} ` + 
                  functions.encontroCaracter(caracter.toUpperCase()) + 
                  ` ::`.bgBlue);
    console.log(':::::::::::::::::::::::::::::::::::::'.bgBlue);
    return ' ';
}


const busquedaBebida = (bebida) =>{//Funcion flecha llamada busquedaBebida con un parametro llamado bebida y es constante
  const datosb = ['vino','cerveza','gaseosa','agua'];//El tipo de dato o caracter que se da es string y se declara utilizando un array llamado datosb//se utiliza includes para verificar si el valor del caracter se encuentra en el array datosb
  if (datosb.includes(bebida)) {// utilizo una estructura condicional if para verificar si bebida se encuentra en el arreglo datosb
    return 'llevarselo al cliente'//Si el valor se encuentra en datosb se retorna una cadena de texto llevarselo al cliente
  }else{//Si no se encuentra el valor en datosb se ejecutara el else
    return 'enviar a la tienda'//si el valor no se encuentra en datosb se ejecuta la cadena de texto enviar a la tienda
  }

}


const interfazBusquedaBebida = (bebida) =>{
    console.log(':::::::::::::::::::::::::::::::::::::::::::'.bgGreen);
    console.log('::: Funcion busqueda de bebida ::::::::::::'.bgGreen);
    console.log(':::::::::::::::::::::::::::::::::::::::::::'.bgGreen);
    console.log(`::`.bgGreen + `la bebida ${bebida} `+ functions.busquedaBebida(bebida) + `::`.bgGreen);
    console.log(':::::::::::::::::::::::::::::::::::::::::::'.bgGreen);
    return ' ';
}


const medioTransporte = (medio) =>{//funcion flecha llamada medioTransporte con unos parametros asignados y es constante
    const datosc = ['avión','flota','carro',' bicicleta']//Se crea un array llamado datosc que contiene algunos medios de transporte
      if (datosc.includes(medio)) {//Se utiliza includes para verificar si el medio proporcionado está presente en el array datosc
      return 'requiere dinero para el pasaje'//Si el medio está en el array, la función devuelve requiere dinero para el pasaje
    }else{
      return 'requiere ropa apropiada'//Si el medio no está en el array, la función devuelve requiere ropa apropiada
    }
  
}



const interfazMedioTransporte = (medio) =>{
    console.log('::::::::::::::::::::::::::::::::::::::::::::'.bgRed);
    console.log(':::::::: Funcion medio transporte ::::::::::'.bgRed);
    console.log('::::::::::::::::::::::::::::::::::::::::::::'.bgRed);
    console.log(`::`.bgRed + ` el medio ${medio} `+ functions.medioTransporte(medio) + `:::`.bgRed);
    console.log('::::::::::::::::::::::::::::::::::::::::::::'.bgRed);
    return ' ';
  
}


const facturaProducto =(cantidad,precio,porcentajeDescuento) => {//funcion flecha llamada facturaproducto con unos parametros asignados y es contante
  if (precio <= 0 || porcentajeDescuento < 0 || porcentajeDescuento > 100 || cantidad <= 0) {/* abro una estructura condicional if para verificar
   ciertas condiciones antes de realizar cálculos.
   Las condiciones que verifican son si el precio es menor o igual a cero, si el porcentaje de descuento es menor que cero,
  si el porcentaje de descuento es mayor que 100 y si la cantidad es menor o igual a cero.*/
    throw new Error("no es válido.");/*Si con alguna de las condiciones anteriores no se a cumplido, se lanza un throw new Error() con el mensaje "no es válido". 
    Esto indica que se han proporcionado valores inválidos y no se puede calcular el precio con descuento.*/
}

//Se calcula el descuenta 
const precioAntesDescuento = precio * cantidad;
const descuento = (precioAntesDescuento * porcentajeDescuento) / 100;
const precioConDescuento = precioAntesDescuento - descuento;

return precioConDescuento;//se retorna el valor preciocondescuento que es el precio del producto despues de aplicar el decuento
}


const interfazFacturaProducto = (cantidad,precio,descuento) =>{
  console.log('::::::::::::::::::::::::::::::::::'.bgMagenta);
  console.log('::: Funcion factura producto :::::'.bgMagenta);
  console.log('::::::::::::::::::::::::::::::::::'.bgMagenta);
  console.log(`::`.bgMagenta + ` el descuento es ${cantidad,precio,descuento} % y el precio es `+ functions.facturaProducto(cantidad,precio,descuento) + `:::`.bgMagenta);
  console.log('::::::::::::::::::::::::::::::::::'.bgMagenta);
  return ' ';
}


const bebidaComida = (menu) => {//funcion flecha llamada bebidaComida con unos parametros asignados y es constante
  const menuLowerCase = menu.toLowerCase();//Se utiliza el método toLowerCase() para convertir el contenido de la variable menu a minúsculas y se almacena en la variable menuLowerCase

    if (menuLowerCase === "carne") {//Se realiza una serie de condiciones if-else para determinar la bebida recomendada según el contenido de menuLowerCase.
        return " y recomiendo vino tinto.";
    } else if (menuLowerCase === 'pescado') {
        return " y recomiendo vino blanco.";
    } else if (menuLowerCase === "verdura") {
        return " y recomiendo agua.";
    } else {
        return " y recomiendo agua.";//La función retorna una cadena de texto indicando la bebida recomendada según el tipo de comida proporcionado.
    }
}


const interfazBebidaComida = (menu) =>{
  console.log(':::::::::::::::::::::::::::::::::::::'.bgBlue);
  console.log('::: Funcion bebida comida :::::::::::'.bgBlue);
  console.log(':::::::::::::::::::::::::::::::::::::'.bgBlue);
  console.log(`:: el menu es ${menu}`+ functions.bebidaComida(menu) + `::`.bgBlue);
  console.log(':::::::::::::::::::::::::::::::::::::'.bgBlue);
  return ' ';
}  


const salaJuegos = (pago) =>{//funcion flecha llamada salaJuegos con unos parametros asignados y es constante
  if (pago >= 4000) {//Se realiza una serie de condiciones if-else para determinar el juego según el dinero que tenga
    return 'puedes jugar con Consolas, Juegos en xbox.';
} else if (pago >= 6000) {
    return 'puedes jugar con Consolas, Juegos en xbox y Xbox One';
} else if (pago >= 2000) {
    return 'puedes jugar con Consolas .';
} else if (pago >= 3000) {
    return 'puedes jugar con Consolas y nintendo.';
} else {
    return 'necesitas mas plata para jugar.';//La función retorna una cadena de texto indicando que necesita mas plata para jugar
}
}


const interfazSalaJuegos = (pago) =>{
  console.log('::::::::::::::::::::::::::::::::'.bgRed);
  console.log('::: Funcion sala de juegos :::::'.bgRed);
  console.log('::::::::::::::::::::::::::::::::'.bgRed);
  console.log(`::`.bgRed + ` Pagas  ${pago}`+ functions.salaJuegos(pago) + `::`.bgRed);
  console.log('::::::::::::::::::::::::::::::::'.bgRed);
  return ' ';
}  


const contarNumero = (number) => {//funcion flecha llamada contarNumero con unos parametros asignados y es constante
  if (number <- 0) {//Se verifica si el valor de number es menor que 0.
    return 'enteros positivos';
  }
  for (let i = 1; i <= number ; i++) {//Se utiliza for para iterar desde 1 hasta number.
    console.log(i);//i imprime el número en la consola.
  }
  return ' ';
}


const interfazContarNumero = (number) =>{
  console.log(':::::::::::::::::::::::::::::'.bgCyan);
  console.log('::: Funcion contar numero :::'.bgCyan);
  console.log(':::::::::::::::::::::::::::::'.bgCyan);
  console.log(':::::::::::::::::::::::::::::'.bgCyan);
  console.log(`::`.bgCyan  + ` ${number} `+ functions.contarNumero(number) + `::`.bgCyan);
  console.log(':::::::::::::::::::::::::::::'.bgCyan);
  return ' ';
}


const numerosPares = (pares) => {//funcion flecha llamada numerosPares con unos parametros asignados y es constante
  if (pares < 1) {//Se verifica si el valor de pares es menor que 1.
    return 'numeros pares incluidos'
  }
  for (let i = 2; i <= pares; i += 2) {//Se utiliza un bucle for para iterar desde 2 hasta el valor de pares
    //La variable i se incrementa de 2 en 2 en cada iteración
    console.log(i);
  }
}


const interfazNumerosPares = (pares) =>{
  console.log(':::::::::::::::::::::::::::::::::::'.bgMagenta);
  console.log(':::  Funcion numeros pares  :::::::'.bgMagenta);
  console.log(':::::::::::::::::::::::::::::::::::'.bgMagenta);
  console.log(`::`.bgMagenta  + ` el numero ${pares} `  + `::`.bgMagenta);
  console.log(':::::::::::::::::::::::::::::::::::'.bgMagenta);
  return ' ';
}


const tablaMultiplicar = (tabla) => {
  const multiplicaciones = [];//Se declara un arreglo vacío llamado multiplicaciones para almacenar las multiplicaciones.
  for (let i = 1; i <= 10; i ++) {//Se utiliza un bucle for para iterar desde i = 1 hasta i = 10
    const resultados = tabla *  i;//se calcula el resultado de la multiplicación de tabla por i y se almacena en la variable resultado en cada iteracion
    multiplicaciones.push(`${tabla} * ${i} = ${resultados}`);//Se crea una cadena de texto y se agrega el arreglo multiplicaciones
  }
  return multiplicaciones;
}


const interfazTablaMultiplicar = (tabla) =>{
  console.log('::::::::::::::::::::::::::::::::'.bgYellow);
  console.log('::  Funcion tabla de multiplicar  ::'.bgYellow);
  console.log('::::::::::::::::::::::::::::::::'.bgYellow);
  console.log(`la tabla ${tabla} `.bgYellow);
  const resultado = functions.tablaMultiplicar(tabla);
  for (let element of resultado){
    console.log('::'.bgYellow + element + '::'.bgYellow );
  }
  
  console.log('::::::::::::::::::::::::::::::::'.bgYellow);
  return ' ';
}


const repetirCaracter = (caracteres , repeticiones) => {
  if (repeticiones < 0) {//Se verifica si el valor de repeticiones es menor que 0
    return 'el numero va a ser mayor que 0';//Si es así, la función devuelve un mensaje indicando que el número debe ser mayor que 0
  }
  let resultado ="";//Se declara una variable resultado esta se utilizará para acumular el resultado de la repetición
  for (let i = 0; i < repeticiones; i++) {//Se utiliza un bucle for para iterar desde i = 0 hasta i = repeticiones - 1
           resultado += caracteres; //En cada iteración, se concatena el valor de caracteres a la variable resultado

    }
    return resultado;
    }


const interfazRepetirCaracter = (caracteres , repeticiones) =>{
  console.log(':::::::::::::::::::::::::::::::::::'.bgCyan);
  console.log(':::  Funcion repetir caracter  :::'.bgCyan);
  console.log(':::::::::::::::::::::::::::::::::::'.bgCyan);
  console.log(`:::  caracter ${caracteres , repeticiones} ` + functions.repetirCaracter(caracteres , repeticiones) + `:::`.bgCyan);
  console.log(':::::::::::::::::::::::::::::::::::'.bgCyan);
  return ' ';
}


const contadorBase = (base) => {
    const numbers = [];
    for (let i = 0; i < base; i++) {//utilizo este for for para iterar desde 0 y lo ejecuta mientras i sea menor que base
      for (let j = 0; j < base; j++) {//utilizo este for para iterar desde 0 hasta base - 1
        numbers.push(i.toString() + j.toString());//se unen los valores de i y j convertidos a cadenas de texto, y el resultado se agrega al arreglo numbers.
      }
    }
    return numbers;
  }  



const interfazContadorBase = (base) =>{
  console.log(':::::::::::::::::::::::::::::::'.bgGreen);
  console.log(':::  Funcion contador  ::::::::'.bgGreen);
  console.log(':::::::::::::::::::::::::::::::'.bgGreen);
  console.log(`:::  la base es ${base} ` + `:::`.bgGreen);
  console.log(':::::::::::::::::::::::::::::::'.bgGreen);
  return ' ';
}

const inicioSesion = (clave) => {
    const claves =["camila","bernal","avendano"];//Se crea un array claves que contiene las claves válidas
    let intentos= 3;//Esta variable llevará la cuenta de los intentos restantes
  
    for (let intento=0; intento <3; intento++) {//Se utiliza un bucle for para realizar hasta 3 intentos de inicio de sesión.
      if (claves.includes(clave[intento])) {//Se verifica si la clave ingresada en el intento actual (clave[intento]) está incluida en el array de claves válidas
          console.log("Entrada concedida");
          return '';
      }else{
      intentos = intento +1;//Si la clave no es válida, se actualiza la variable intentos
      console.log(`intento ${intentos} denegado. te quedan ${3 - intentos} intentos.`)//se imprime un mensaje informando del intento denegado y la cantidad de intentos restantes
    }
  } 
    if (intentos === 3) {//se verifica si se han realizado 3 intentos fallidos. 
      console.log(`Intruso.Alerta!`);
    }
  };
  
  const interfazInicioSesion = (clave) =>{
    console.log('::::::::::::::::::::::::::::::'.bgBlue);
    console.log(':::  Funcion inicio sesion :::'.bgBlue);
    console.log('::::::::::::::::::::::::::::::'.bgBlue);
    console.log(`::: ${clave}` + ` ${inicioSesion(clave)}:::`.bgBlue);
    console.log('::::::::::::::::::::::::::::::'.bgBlue);
    return ' ';
  }

const minimoMaximo = (numb) =>{
    let numeroMenor = numb[0];
    let numeroMayor = numb[0];
    let suma = 0;
    //Se inicializan tres variables: numeroMenor y numeroMayor con el primer elemento del array numb, y suma se inicializa en 0.
    for (let i = 0; i < numb.length; i++) {//Se utiliza un bucle for para iterar sobre cada elemento del array numb
      if (numb[i] < numeroMenor) {//Si el elemento actual es menor que numeroMenor, actualiza numeroMenor con el valor actual
        numeroMenor = numb[i];
      }
      if (numb[i] > numeroMayor) {//Si el elemento actual es mayor que numeroMayor, actualiza numeroMayor con el valor actual
        numeroMayor = numb[i];
      }
      suma += numb[i];//Se suma cada elemento al total almacenado en suma
    }
    const promedio = suma / numb.length;//Calcula el promedio dividiendo la suma total entre la cantidad de elementos en el array
    return [numeroMenor, numeroMayor, promedio];
  }

  const interfazMinimoMaximo = (numb) =>{
    console.log('::::::::::::::::::::::::::::::'.bgRed);
    console.log(':::  Funcion minimo maximo  ::'.bgRed);
    console.log('::::::::::::::::::::::::::::::'.bgRed);
    console.log(`:::: ${numb}  `  +     `::::::::::::::`.bgRed);
    console.log('::::::::::::::::::::::::::::::'.bgRed);
    return ' ';
  }
  

const numerosPares2 = (numeros2) =>{
    let pares = [];//array que se utiliza para almacenar los números pares encontrados
    
    for (let i = 0; i < numeros2.length; i++) {//Se utiliza un bucle for para recorrer cada elemento del array numeros2
      if (numeros2[i] % 2 === 0) {//se verifica si el número en la posición actual (numeros2[i]) es par.
        pares.push(numeros2[i]);
      }
    }
    
    const cantidadPares = pares.length;//Se calcula la cantidad de números pares encontrados en el array pares
    
    return { cantidadPares, pares };
  }


const interfazNumerosPares2 = (numeros2) =>{
  console.log('::::::::::::::::::::::::::::::::'.bgBlue);
  console.log(':::  Funcion numeros pares2  :::'.bgBlue);
  console.log('::::::::::::::::::::::::::::::::'.bgBlue);
  console.log(`::: estos son los numeros  ${numeros2}  ` + `:::`.bgBlue);
  console.log(':::::::::::::::::::::::::::::::::'.bgBlue);
  return ' ';
}





functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontroCaracter = encontroCaracter;
functions.interfazEncontroCaracter = interfazEncontroCaracter;
functions.busquedaBebida = busquedaBebida;
functions.interfazBusquedaBebida = interfazBusquedaBebida;
functions.medioTransporte = medioTransporte;
functions.contarNumero = contarNumero;
functions.interfazContarNumero = interfazContarNumero;
functions.interfazMedioTransporte = interfazMedioTransporte;
functions.facturaProducto = facturaProducto;
functions.interfazFacturaProducto = interfazFacturaProducto;
functions.bebidaComida = bebidaComida;
functions.interfazBebidaComida = interfazBebidaComida;
functions.salaJuegos = salaJuegos;
functions.interfazSalaJuegos = interfazSalaJuegos;
functions.numerosPares = numerosPares;
functions.interfazNumerosPares = interfazNumerosPares;
functions.tablaMultiplicar = tablaMultiplicar;
functions.interfazTablaMultiplicar = interfazTablaMultiplicar;
functions.repetirCaracter = repetirCaracter;
functions.interfazRepetirCaracter = interfazRepetirCaracter;
functions.contadorBase = contadorBase;
functions.interfazContadorBase = interfazContadorBase;
functions.inicioSesion = inicioSesion;
functions.interfazInicioSesion = interfazInicioSesion;
functions.minimoMaximo = minimoMaximo;
functions.interfazMinimoMaximo = interfazMinimoMaximo;
functions.numerosPares2 = numerosPares2;
functions.interfazNumerosPares2 = interfazNumerosPares2;



module.exports = functions;