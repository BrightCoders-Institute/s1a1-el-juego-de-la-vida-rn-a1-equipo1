
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
