const { inicializarTablero } = require('../js/index.js');

console.log(inicializarTablero); // Agrega esta línea

describe("Pruebas adicionales de funciones del Juego de la vida", () => {
    test("Prueba de inicializarTablero, y verificar si el tamaño del tablero es correcto", () => {
        const tablero = inicializarTablero();
        expect(tablero.length).toBe(8); // Ajusta esto según la lógica de tu inicialización
        expect(tablero[0].length).toBe(4);
    });

    test('Cada elemento del tablero debe ser 0 o 1', () => {
        const filas = 2;
        const columnas = 2;
        const tablero = inicializarTablero(filas, columnas);
    
        tablero.forEach((fila) => {
          fila.forEach((elemento) => {
            expect([0, 1]).toContain(elemento);
          });
        });
     });
});