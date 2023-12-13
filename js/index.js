let canvas;
let ctx;
const fps = 1;

const canvasX = 500; // pixels ancho
const canvasY = 500; // pixels alto
let tileX;
let tileY;

// Iniciar el tablero
let tablero;
const filas = parseInt(prompt('Introduce las filas'));
const columnas = parseInt(prompt('Introduce las columnas'));

const blanco = '#FFFFFF';
const verde = '#008000';

// expected @param tag for parameter num1 but found num instead
// missing @param tag for parameter num2
// missing return type
/**
 * Add two numbers.
 * @param {number} f The first number.
 * @param {number} c The first number.
 * @returns obj The sum of the two numbers.
 */
function creaArray2D(f,c) {
  const obj = new Array(f);
  for (let y=0; y<f; y++) {
    obj[y] = new Array(c).fill(0);
  }
  
  return obj;
}

// Objeto Agente o Turmita
const Agente = function(x, y, estado) {
  this.x = x;
  this.y = y;
  this.estado = estado;
  this.estadoProx = this.estado;
  this.vecinos = []; // Vecinos del agente

  this.addVecinos = function() {
    let xVecino;
    let yVecino;

    for (i = -1; i < 2; i++) {
      for (j = -1; j < 2; j++) {
        xVecino = (this.x + j + columnas) % columnas;
        yVecino = (this.y + i + filas) % filas;

        // Se descarta la celula actual
        if (i!=0 || j!=0) {
          this.vecinos.push(tablero[yVecino][xVecino]);
        }
      }
    }
  };

  this.dibuja = function() {
    let color;

    if (this.estado == 1) {
      color = blanco;
    } else {
      color = verde;
    }

    ctx.fillStyle = color;
    ctx.fillRect(this.x * tileX, this.y * tileY, tileX, tileY);
  };

  // programamos las leyes de coway

  this.nuevoCiclo = function() {
    let suma = 0;

    // calculamos la cantidad de vecinos vivos

    for ( i = 0; i< this.vecinos.length; i++) {
      suma += this.vecinos[i].estado;
    }

    // Aplicamos las normas

    this.estadoProx = this.estado; // por defecto lo dejamos igual

    // Muerte: tiene menos de 2 o mas de tres

    if (suma <2 || suma> 3 ) {
      this.estadoProx = 0;
    }
    //  VIDA/ REPRODUCCION: Tiene 3 vecinos

    if (suma == 3) {
      this.estadoProx = 1;
    }
  };

    this.mutacion =  function() {
        this.estado = this.estadoProx;
    }
}

function inicializaTablero(obj){
    var estado;

    for (y = 0; y < filas; y++) {
        for (x = 0; x < columnas; x++) {
            estado = Math.floor(Math.random()*2);
            obj[y][x] = new Agente(x, y, estado);
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
    canvas = document.getElementById("pantalla");
    ctx = canvas.getContext('2d');

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

function dibujaTablero (obj) {

    //Dibuja los agentes 

    for( y=0; y<filas; y++){
        for(x=0; x< columnas; x++){
            obj[y][x].dibuja(); 
        }
    }

    // calcula el siguiente ciclo
    for(y=0; y<filas; y++){
        for(x=0; x<columnas; x++){
            obj[y][x].nuevoCiclo(); 
        }
    }

    // Aplica la mutacion 
    for(y=0; y<filas; y++){
        for(x=0; x<columnas; x++){
            obj[y][x].mutacion(); 
        }
    }
}

function borrarCanvas(){
    canvas.width  = canvas.width;
    canvas.height = canvas.height;
}

function principal(){
    borrarCanvas();   
    dibujaTablero(tablero); 

}
