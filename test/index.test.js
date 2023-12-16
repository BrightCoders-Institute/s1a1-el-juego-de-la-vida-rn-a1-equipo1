
const { contarVecinos } = require('../js/index.js');

describe('prueba de contarVecinos()', () => {
  const tablero = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  test('Debe regresar 4 para contarVecinos(tablero, 1, 1)', () => {
    expect(contarVecinos(tablero, 1, 1)).toBe(4);
  });
});
