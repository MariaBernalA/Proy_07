require('colors');

const functions  = require ('./modules/functions.js')//se importa functions

const main = async() =>{

  const numero = -10;
  console.log(functions.interfazSigno(numero));
  
  const caracter = 'a'
  console.log(functions.interfazEncontroCaracter(caracter.toUpperCase()));

  const bebida = 'vino'
  console.log(functions.interfazBusquedaBebida(bebida));

  const medio = 'bicicleta'
  console.log(functions.interfazMedioTransporte(medio));

  const precio = 500; 
  const descuento= 10; 
  const cantidad = 2; 
  console.log(functions.interfazFacturaProducto(cantidad,precio,descuento));

  const menu = 'pescado';
  const recomendacion = (functions.interfazBebidaComida(menu));
  console.log(`"${menu}", ${recomendacion}`);

  const pago = 4000;
  console.log(functions.interfazSalaJuegos(pago));

  const number = 5;
  console.log(functions.interfazContarNumero(number));

  const pares = 'C';
  const repeticones = 3;
  console.log(functions.interfazNumerosPares(pares));

  const tabla = 5; 
  console.log(functions.interfazTablaMultiplicar(tabla));

  const caracteres = 'C';
  const repeticiones = 2;
  console.log(functions.interfazRepetirCaracter(caracteres , repeticiones));

  const base = 6;
  const result = functions.contadorBase(base);
  functions.interfazContadorBase(base);
  console.log(result); // [ '00', '01', '02', '03', '04', '05', '06', '07', '10', '11', ...]

  const clave = ["camila","bernal","avendano"];
  functions.interfazInicioSesion(clave);

  const numb = [2, 4, 1, 3, 8];
  const [menor, mayor, promedio] = functions.minimoMaximo(numb);
  functions.interfazMinimoMaximo(numb);
  console.log("Número menor:", menor);
  console.log("Número mayor:", mayor);
  console.log("Promedio:", promedio);

  const numeros2 = [2, 5, 9, 3, 6, 7];
  const resultado = functions.numerosPares2(numeros2);
  functions.interfazNumerosPares2(numeros2);
  console.log("Cantidad de números pares:", resultado.cantidadPares);
  console.log("Números pares:", resultado.pares);

  

  



};

main();