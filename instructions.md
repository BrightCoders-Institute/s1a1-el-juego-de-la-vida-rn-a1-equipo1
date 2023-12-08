![BrightCoders Logo](img/logo.jpg)

- [Objetivo](#objetivo)
- [Instrucciones](#instrucciones)
- [Entregables](#entregables)
- [Indicadores de cumplimiento](#indicadores-de-cumplimiento)
- [Tecnologías](#tecnologías)
- [Flujo de trabajo](#flujo-de-trabajo)
  - [Día 1-2](#día-1-2)
  - [Día 3](#día-3)
  - [Día 4](#día-4)
  - [Día 5](#día-5)
- [Requerimientos funcionales](#requerimientos-funcionales)
  - [Pistas](#pistas)
- [Recursos](#recursos)
  
# El Juego de la vida

## Objetivos

Esta actividad tiene como objetivos:

- Nivelar habilidades en programación con Javascript / Typescript para asegurar una base sólida de conocimientos en el lenguaje.
- Introducir el uso de Linters, herramientas que permiten mantener un código limpio y consistente, detectando posibles errores y mejorando la calidad del código.
- Introducir el desarrollo basado en pruebas, promoviendo la escritura de pruebas unitarias para garantizar la funcionalidad y la robustez del código desarrollado.
- Introducir la dinámica de Mob Programming, fomentando la colaboración y el trabajo en equipo mediante la programación conjunta, donde todos los miembros participan activamente y se turnan en la escritura de código.
- Introducir la cultura de trabajo colaborativo remoto, brindando las herramientas y estrategias necesarias para trabajar de manera efectiva en entornos virtuales, promoviendo la comunicación, la coordinación y el respeto entre los miembros del equipo.
- Introducir el uso de git y github como herramientas fundamentales para el control de versiones y la colaboración en proyectos de desarrollo de software. Esto incluye conceptos como git clone, git push, git commit, así como la posibilidad de realizar commits con co-autores para reconocer la contribución de múltiples personas en el desarrollo del proyecto.

## Instrucciones

- Deberán trabajar en equipo de manera colaborativa y aplicar la dinámica de Mob Programming para desarrollar una página web conforme se detalla en la sección [Requerimientos](#requerimientos).
- En la actividad de GitHub (commits), se deberá observar la participación de todos los integrantes del equipo.
- Cada commit debe incluir a todos los participantes activos (co-author commits).
- Los commits deben ser realizados por los miembros del equipo de manera rotativa, es decir, no debe ser siempre la misma persona quien haga el commit.

## Entregables

- Código fuente completo en este repositorio.
- Solución implementada utilizando el enfoque orientado a objetos.
- Archivo README.md actualizado con las instrucciones de ejecución y cualquier otra información relevante.
- El código debe incluir pruebas unitarias que cubran la funcionalidad principal.
- Se espera que la puntuación obtenida en herramientas de análisis estático como Codacy, CodeClimate u otras similares sea de A o equivalente.
- Deben incluirse los badges de los analizadores de código estático (Codacy, CodeClimate, etc.) para mostrar la calidad del código.
- La versión final de tu código debe estar en la rama principal del repositorio para facilitar la revisión.

## Tecnologías

- Javascript ó Typescript
- ESLint
- Jest
- Codacy, CodeClimate, CodeCov

## Flujo de trabajo

A continuación se presenta un flujo de trabajo sugerido para el desarrollo del algoritmo. Si el equipo decide seguir otro enfoque, es válido siempre y cuando se logre el mismo resultado:

### Días 1-2

- En el primer día, el objetivo principal es comenzar a codificar la solución al algoritmo. No te preocupes si no logras terminar, lo importante es generar la base de la solución y avanzar en el desarrollo.
- La solución debe implementarse utilizando el enfoque orientado a objetos.

### Día 3

- Agrega ESLint a tu proyecto para mejorar la calidad del código.
- Resuelve los problemas identificados por el linter.
- Continúa codificando o re-factorizando el algoritmo.
- Presta atención a la calidad del código y toma en cuenta las observaciones del linter para mejorarlo.
- No es relevante si terminas o no la solución en este día. Lo importante es seguir practicando y mejorando tu código.

### Día 4

- Agrega pruebas unitarias utilizando Jest para asegurar la funcionalidad correcta del algoritmo.
- Continúa codificando o re-factorizando el algoritmo según sea necesario.

### Día 5

- Agrega al menos 2 analizadores de código estático, como CodeClimate, Codacy, CodeCov u otros similares, para evaluar la calidad del código
- Resuelve los problemas identificados por los analizadores de código hasta obtener la calificación máxima.
- Finaliza la solución del algoritmo, completando la codificación necesaria.

Recuerda que este flujo de trabajo es una guía para organizar tus actividades durante los días asignados. El objetivo principal es avanzar en el desarrollo del algoritmo, prestar atención a la calidad del código y asegurarse de que el resultado cumpla con los requerimientos establecidos. Adaptar el flujo de trabajo según las necesidades del equipo es válido, siempre y cuando se alcance el objetivo final.

## Requerimientos funcionales

El Juego de la Vida no es tu típico juego de computadora. Es un 'autómata celular' inventado por el matemático John Conway de la Universidad de Cambridge.

Este juego se hizo ampliamente conocido cuando se mencionó en un artículo publicado por Scientific American en 1970. Consiste en una colección de células que, basándose en algunas reglas matemáticas, pueden vivir, morir o multiplicarse. Dependiendo de las condiciones iniciales, las células forman diversos patrones a lo largo del juego.

Este Desafío de Codificación se trata de calcular la siguiente generación del juego de la vida de Conway, dada cualquier posición inicial.

Comienzas con una cuadrícula bidimensional de células, donde cada célula está viva o muerta. En esta versión del problema, la cuadrícula es finita y ninguna vida puede existir más allá de los bordes. Al calcular la siguiente generación de la cuadrícula, sigue estas reglas:

1. Cualquier célula viva con menos de dos vecinos vivos muere, como si fuera por falta de población.
2. Cualquier célula viva con más de tres vecinos vivos muere, como si fuera por sobre-población.
3. Cualquier célula viva con dos o tres vecinos vivos sobrevive a la siguiente generación.
4. Cualquier célula muerta con exactamente tres vecinos vivos se convierte en una célula viva.

Debes escribir un programa que acepte una cuadrícula arbitraria de células y muestre como resultado una cuadrícula similar que muestre la siguiente generación.

- [Juego de la Vida: Patrones de ejemplo](http://pi.math.cornell.edu/~lipa/mec/lesson6.html#:~:text=or%20more%20periods.-,Example%20Patterns,-Using%20the%20provided)

### Pistas

La posición inicial de entrada podría ser un archivo de texto ó string que se vea así:
```
Generación 1:
4 8
........
....*...
...**...
........
```
Y la salida podría verse así:
```
Generación 2:
4 8
........
...**...
...**...
........
```

## Recursos

- [Javascript](https://brightcoders-2.gitbook.io/brightcoders-handbook/javascript-typescript/javascript)
- [Programación orientada a objetos](https://brightcoders-2.gitbook.io/brightcoders-handbook/javascript-typescript/programacion-orientada-a-objetos)
- [Desarrollo basado en pruebas](https://brightcoders-2.gitbook.io/brightcoders-handbook/javascript-typescript/desarrollo-basado-en-pruebas)
- [ESLINT](https://brightcoders-2.gitbook.io/brightcoders-handbook/javascript-typescript/herramientas)
- [Analizadores de código estático: CodeClimate, Codacy, CodeCov](https://brightcoders-2.gitbook.io/brightcoders-handbook/javascript-typescript/herramientas)
- [Git & Github](https://brightcoders-2.gitbook.io/brightcoders-handbook/git-and-github/git-and-github)
