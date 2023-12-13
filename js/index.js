let canvas;
let ctx;
const fps = 1;

const canvasX = 500; // we define the weidght of the canvas
const canvasY = 500; // we define the height of the canvas
let tileX;
let tileY;

// Start the board
let tablero;
const filas = parseInt(prompt('Introduce las filas'));
const columnas = parseInt(prompt('Introduce las columnas'));

const blanco = '#FFFFFF';
const verde = '#008000';


/**
 * Expecting 2 parameters to determine the 2D array dimentions.
 * @param {number} f The height of the array.
 * @param {number} c The width if the array.
 * @return {obj} The array.
 */
function creaArray2D(f, c) {
  const obj = new Array(f);
  for (let y=0; y<f; y++) {
    obj[y] = new Array(c).fill(0);
  }

  return obj;
}

// Agent or Turmite Object

const Agente = function(x, y, estado) {
  this.x = x;
  this.y = y;
  this.estado = estado;
  this.estadoProx = this.estado;
  this.vecinos = []; // Neighbors of the agent

  this.addVecinos = function() {
    let xVecino;
    let yVecino;

    for (i = -1; i < 2; i++) {
      for (j = -1; j < 2; j++) {
        xVecino = (this.x + j + columnas) % columnas;
        yVecino = (this.y + i + filas) % filas;

        // The current cell is discarded
        if (i!=0 || j!=0) {
          this.vecinos.push(tablero[yVecino][xVecino]);
        }
      }
    }
  };

  this.dibuja = function() {
    let color;

    if (this.estado == 1) {
      color = verde;
    } else {
      color = blanco;
    }

    ctx.fillStyle = color;
    ctx.fillRect(this.x * tileX, this.y * tileY, tileX, tileY);
  };

  // We program coway laws

  this.nuevoCiclo = function() {
    let suma = 0;

    // We calculate the number of living neighbors

    for ( i = 0; i< this.vecinos.length; i++) {
      suma += this.vecinos[i].estado;
    }

    // Aplicate the rules of the game.

    this.estadoProx = this.estado; // we assume that the state wont change

    // dead: have less than 2 or more than 3 neighbors

    if (suma <2 || suma> 3 ) {
      this.estadoProx = 0;
    }
    //  life: have 3 neighbors

    if (suma == 3) {
      this.estadoProx = 1;
    }
  };

  this.mutacion = function() {
    this.estado = this.estadoProx;
  };
};

/**
 * Add two numbers.
 * @param {obj} obj is the array to be initialized.
 */
function inicializaTablero(obj) {
  let estado;

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

/**
 * In this function we create the canvas and set the size.
 */
function inicializa() {
  // Match the canvas to the screen.
  canvas = document.getElementById('pantalla');
  ctx = canvas.getContext('2d');

  // Fit the canvas to the screen.
  canvas.width = canvasX;
  canvas.height = canvasY;

  // Calculate the size of the titles.
  tileX = Math.floor(canvasX/filas);
  tileY = Math.floor(canvasY/columnas);

  // Create the board.
  tablero = creaArray2D(filas, columnas);

  // Execute the function to initialize the board.
  inicializaTablero(tablero);

  // Execute the function principal every 1/fps seconds.
  setInterval(function() {
    principal();
  }, 1000/fps);
}

/**
 * @param {obj} obj the array to be drawn.
 */
function dibujaTablero(obj) {
  // draw the agents

  for (y=0; y<filas; y++ ) {
    for (x=0; x< columnas; x++) {
      obj[y][x].dibuja();
    }
  }

  // calculate the next cycle
  for (y=0; y<filas; y++) {
    for (x=0; x<columnas; x++) {
      obj[y][x].nuevoCiclo();
    }
  }

  // Aplicate the mutation
  for (y=0; y<filas; y++) {
    for (x=0; x<columnas; x++) {
      obj[y][x].mutacion();
    }
  }
}

/**
 * The function resizes the canvas using data from the same canvas.
 */
function borrarCanvas() {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}

/**
 * In this function we will call the functions that will be executed.
 */
function principal() {
  borrarCanvas();
  dibujaTablero(tablero);
}

console.log(inicializa());
