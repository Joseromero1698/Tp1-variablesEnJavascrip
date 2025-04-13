/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
 */
const numero1= parseInt(prompt("escribe un numero"))
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0 ){
    document.writeln(numero1 + "Es divisible")
}
else{
    document.writeln(numero1 + "No es divisible")
}