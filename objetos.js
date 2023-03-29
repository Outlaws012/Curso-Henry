//Objetos
//Los objetos también son una estructura en la que se puede guardar todo tipo de información.

var deportes = {
    conBalon: ['Futbol', 'Basket', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking']
}

var persona = {
    nombre: 'Breyner', 
    edad: 19, 
    estudios: {
        esProgramador: true}
}

persona.nombre = 'Evanz'
persona.edad = 20

var autos = {}
autos.marcas = ['Porshe', 'BMW', 'Ferrari']
//delete autos.marcas
console.log(autos)

var misFunciones = {saludar: function (){
    console.log('Hola') 
    }
}
misFunciones.saludar()

//Dot-Notation y Bracket-Notation

//DOT NOTATION
//Se le llama DOT NOTACION porque se utiliza un punto para acceder a las propiedades
var atuendos = { 
    manos: ['Guantes', 'Anillos'], 
    pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

//Métodos de objetos

//El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si
//este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.

//El método Object.keys() devuelve todas las propiedades de un objeto guardadas
//en orden dentro de un arreglo.

var libro = { 
    autor: 'Borges',
    genero: 'Policial',
    año: 1990
}
var tienePropiedad = libro.hasOwnProperty('autor')
//console.log(tienePropiedad)

var todaLasPropiedades = Object.keys(libro)
console.log(todaLasPropiedades)