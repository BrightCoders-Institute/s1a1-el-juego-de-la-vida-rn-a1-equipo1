const { aplicarReglas } = require('../js/index.js');

console.log(aplicarReglas); // Agrega esta línea

describe("Pruebas para saber si se estan aplicando las reglas", () => {
        const tablero = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0]
          ];
          test('Debe regresar 4 para contarVecinos(tablero, 1, 1)', () => {
            expect(aplicarReglas(tablero)).toStrictEqual(
                [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0]]
              );
          });
});