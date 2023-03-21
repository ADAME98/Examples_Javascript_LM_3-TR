"use strict";
// no hay error
let message = "hola";
message = 123456;

let n = 123;
n = 12.345;

let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;

alert(str);


alert( "no es un número" / 2 ); // NaN, tal división es errónea

let nameprueba = "John";

// incrustar una variable
alert( `Hola, ${nameprueba}` ); // Hola, John!

// incrustar una expresión
alert( `el resultado es ${1 + 2}` ); //el resultado es 3


let age = 100;

// cambiando el valor a undefined
age = undefined;

alert(age); // "undefined"