var listaDeCompras = []
listaDeCompras[3] = 'Tomates' 
listaDeCompras[1] = 'Lechuga'

//console.log(listaDeCompras)

//Recuperar elemento de un array
var elementoDelArray = listaDeCompras[1]
console.log(elementoDelArray)

//El metodo .length() sirve para saber cuantos elementos tiene nuestro array
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres)

// Datos importantes sobre los arrays
/* Los arreglos o arrays son lo que se conoce como objeto global dentro de Javascript, y que nos
permiten guardar y gestionar información. Esto nos será de gran utilidad cuando queramos
almacenar datos. 

Dentro de los arreglos existen dos conceptos que pueden parecer similares, pero son muy diferentes.

- Por un lado tenemos lo que se conoce como elemento. Los elementos son
aquellos datos que hayamos guardado. 

- Por otro lado, está el concepto de índice. Los índices no representan al dato en sí
mismo, sino la posición en la que se está guardando. Un detalle muy importante
que hay que destacar es que, en los arreglos, siempre se comienza a contabilizar
las posiciones desde el número cero, no el uno. */

//MÉTODOS DE INSERCIÓN

//Método .push 
//El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.

//Método .unshift
//El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

//Método .pop
//El método pop() elimina y devuelve el último elemento de un arreglo.

//Método .shift 
//El método shift() elimina y devuelve el primer elemento de un arreglo.

var colores = ['amarillo', 'azul']
colores.push('rojo')
colores.unshift('verde')
colores.pop()
colores.shift()
console.log(colores)

//MÉTODOS VARIOS

//Método .include
//El método include() sirve para determinar si un arreglo incluye o no un elemento

var pintores = ['Picasso', 'Velasquez', 'Van Gogh', 'Dali']
var incluyeDali = pintores.includes('Monet')
console.log(incluyeDali)

//Método .every
//El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.

var numeros = [15, 6, 8, 9]
var cumpleCondicion = numeros.every((num) => {
    return num > 5
})
console.log(cumpleCondicion)

//Método .split
//El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string,
//dependiendo del parámetro divisor que indiquemos.

var palabra = 'Henri'
var palabrasSeparada = palabra.split('')
palabrasSeparada.pop()
palabrasSeparada.push('y')
//console.log(palabrasSeparada)

//Método .join
//El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.

var palabraArreglada = palabrasSeparada.join('')
console.log(palabraArreglada)

//MÉTODOS DE RECORRIDOS 

//Método .forEach
//El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.

var numeros = [1, 2, 3, 4]
numeros.forEach((num) => console.log(num))

//Método .map
//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que
//este método devuelve un nuevo arreglo los elementos modificados.

var numeros =[1, 2, 3, 4]
var masUno = numeros.map((num) => {return num +1})
console.log(masUno)

//BUCLES O CILOS EN LOS ARRAYS

//Bucle for
//Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y
//separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

//Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia 

var arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//Bucle While
//Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe
//como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

// while (condicion)  sentencia

var arr = []
while (arr.length < 5) {
    arr.push('Breyner')
}
console.log(arr)