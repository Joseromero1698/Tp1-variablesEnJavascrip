/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 */
const numero1= parseInt(prompt("escribe un numero"))
const numero2= parseInt(prompt("escribe otro numero"))
if (numero1 > numero2) {
    document.writeln("el numero mayor es" + numero1)
}if (numero1 < numero2) {
    document.writeln("el numero mayor es" + numero2)
}