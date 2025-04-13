/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
 */
const numero1= parseInt(prompt("escribe un numero"))
const numero2= parseInt(prompt("escribe otro numero"))
const numero3= parseInt(prompt("escribe otro numero"))

if (numero1 > numero2 && numero1 > numero3) {
    document.writeln( "el numero mayor es" + numero1);
    } else if (numero2 > numero3) {
    document.writeln( "el numero mayor es" + numero2);
    } else {
    document.writeln("el numero mayor es" + numero3);
    }