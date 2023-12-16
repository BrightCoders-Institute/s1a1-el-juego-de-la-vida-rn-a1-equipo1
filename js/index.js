
//Tamaño del tablero
const filas = 8;
const columnas = 4;

// Inicializar el tablero de manera aleatoria
function inicializarTablero() {
  const tablero = [];
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(Math.round(Math.random()));
    }
    tablero.push(fila);
  }
  return tablero;
}

// Imprimir el tablero en la consola
function imprimirTablero(tablero) {
  for (let i = 0; i < filas; i++) {
    let fila = '';
    for (let j = 0; j < columnas; j++) {
      fila += tablero[i][j] ? '■' : '□';
      fila += ' ';
    }
    console.log(fila);
  }
  console.log('\n');
}

// Contar el número de vecinos vivos al rededor de una celda
function contarVecinos(tablero, fila, columna) {
  let vecinos = 0;
  for (let i = fila - 1; i <= fila + 1; i++) {
    for (let j = columna - 1; j <= columna + 1; j++) {
      if (i >= 0 && i < filas && j >= 0 && j < columnas && (i !== fila || j !== columna)) {
        vecinos += tablero[i][j];
      }
    }
  }
  return vecinos;
}

// Aplicar las reglas del Juego de la Vida
function aplicarReglas(tablero) {
  const nuevoTablero = [];
  for (let i = 0; i < filas; i++) {
    const nuevaFila = [];
    for (let j = 0; j < columnas; j++) {
      const vecinos = contarVecinos(tablero, i, j);
      if (tablero[i][j] === 1) {
        nuevaFila.push(vecinos === 2 || vecinos === 3 ? 1 : 0);
      } else {
        nuevaFila.push(vecinos === 3 ? 1 : 0);
      }
    }
    nuevoTablero.push(nuevaFila);
  }
  return nuevoTablero;
}

// Ejecuta el juego
function juegoDeLaVida(generaciones) {
  let tablero = inicializarTablero();
  for (let generacion = 0; generacion < generaciones; generacion++) {
    console.log(`Generación ${generacion + 1}:`);
    imprimirTablero(tablero);
    tablero = aplicarReglas(tablero);
  }
}

// Iniciar el juego con 10 generaciones
juegoDeLaVida(10);

const GofL = {
  filas,
  columnas,
  inicializarTablero,
  imprimirTablero,
  contarVecinos,
  aplicarReglas,
  juegoDeLaVida
};

module.exports = { contarVecinos, inicializarTablero, imprimirTablero, aplicarReglas };
// contarVecinos, inicializarTablero, aplicarReglas