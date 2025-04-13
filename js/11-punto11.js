/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
 */
const numero1= parseInt(prompt("escribe un numero"))
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0 ){
} if (numero1 % 2===0){
    document.writeln(numero1 + "Es divisible en 2")
}
else if (numero1 % 3===0){
    document.writeln(numero1 + "Es divisible en 3")
}
else if (numero1 % 5===0){
    document.writeln(numero1 + "Es divisible en 5")
}
else if (numero1 % 7===0){
    document.writeln(numero1 + "Es divisible en 7")
}
else {
    document.writeln(numero1 + "no es divisible en 2, 3, 5 ni 7")
}