
var canvas;
var ctx;
var fps = 1;

var canvasX = 500;  //pixels ancho
var canvasY = 500;  //pixels alto
var tileX, tileY;

//Iniciar el tablero
var tablero;
var filas = parseInt(prompt('Introduce las filas'));
var columnas = parseInt(prompt('Introduce las columnas'));

var blanco = '#FFFFFF';
var verde = '#008000';



function creaArray2D(f,c){
    var obj = new Array(f);
    for(y=0; y<f; y++){
        obj[y]= new Array(c);
    }

    return obj;
}


//Objeto Agente o Turmita
var Agente = function(x, y, estado){
    this.x = x;
    this.y = y;
    this.estado = estado;
    this.estadoProx = this.estado; 
    
    this.vecinos = []; //Vecinos del agente

    this.addVecinos = function(){
        var xVecino;
        var yVecino;

        for (i = -1; i < 2; i++) {
            for (j = -1; j < 2; j++) {
                xVecino = (this.x + j + columnas) % columnas;
                yVecino = (this.y + i + filas) % filas;

                // Se descarta la celula actual
                if (i!=0 || j!=0) {
                    this.vecinos.push(tablero[yVecino][xVecino])
                }
            }
        }
    }
}

function inicializaTablero(obj) {
    var estado;

    for (y = 0; y < filas; y++) {
        for (x = 0; x < columnas; x++) {
            estado = Math.floor(Math.random()*2);
            obj[y][x] = new Agente(y, x, estado);
        }
    }

    for (y = 0; y < filas; y++) {
        for (x = 0; x < columnas; x++) {
            obj[y][x].addVecinos();
        }
    }
}

function inicializa(){

    //Asiociamos el canvas
    canvas = Document.getElementById('pantalla');
    ctx = canvas.getContext('2D');

    //Ajustamos el tamaño
    canvas.width = canvasX;
    canvas.height = canvasY;

    //calcular los tamaños de los tiles

    tileX = Math.floor(canvasX/filas);
    tileY = Math.floor(canvasY/columnas);

    //Creamos el tablero
    tablero = creaArray2D(filas, columnas);

    // Lo inicializamos
    inicializaTablero(tablero);

    //Ejecutamos el bucle principal
    setInterval(function(){principal();},1000/fps);
}

function borrarCanvas(){
    canvas.width  = canvas.width;
    canvas.height = canvas.height;
}

function principal(){
    console.log('fotograma');
    borrarCanvas();   
}
