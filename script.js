console.log('Hola mundito, ¿qué tal?')

// Ejercicio 1 - Variables //
var number = 4; 
console.log(number);

// Ejercicio 2 - Variables //
var name = 'Mireia';
console.log(name)

// Ejercicio 3 - Variables //
var boolean = true;
console.log(boolean)

// Ejercicio 4 - Variables Operaciones //
var plus = number + 3;
console.log(plus)

var minum = number - 3;
console.log(minum)

var multiply = number * 5;
console.log(multiply)

var division = number / 2;
console.log(division)

// Ejercicio 5 - Variables Concatenar //
var phrase = name + ' es muy guapa';
console.log(phrase)

// Ejercicio 6 - Funcion texto //
function saludar(name) {
    var mensaje = 'Hola ' + name;
    console.log(mensaje);
    document.write(name);
}
saludar('Mireia')

// Ejercicio 7 //
function myPlus(n1, n2) {
    return n1 + n2;
}

// Ejercicio 8 - Funciones numeros par - impar //
let result = myPlus(4, 3);
console.log(result)

function par(myNumber) {
    if (myNumber % 2 == 0){
        console.log('This number ' + myNumber + 'is an even number.');
        document.write('this number ' + myNumber + 'is an even number.');
    } else {
        console.log('This number ' + myNumber + 'is an odd number.');
        document.write('This number ' + myNumber + 'is an odd number.');
    }
}
par(4);

// Ejercicio 8 - Objetos //
let coche = {
    ruedas: 4,
    puertas: 2,
    volante: 1,
    asientos: 2,
    maletero: 1,
    marca: "lamborgini",
    caracteristicas: {
        color: "White",
        puertas: 5,
        year: 2007,
    }
}

// Ejercicio 9 - Función con objeto //
function automovil() {
    console.log(coche.puertas);
}
automovil()


// Ejercicio 10 -  Función con objeto //
function automovil() {
    console.log(coche.marca);
}
automovil()

// Ejercicio 11 -  Función con objeto //
function colorCarro() {
    return carro.caracteristicas.color;
}
console.log(coche.caracteristicas.color)

// Ejercicio 11 -  Arrays //
var numeros = [91, 82, 73, 64, 55, 46, 37, 28, 19];
console.log(numeros);
document.write(numeros);

// Ejercicio 12 -  Funcion de Arrays //
function iterador(numeros) {
    for (var i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }
  }


