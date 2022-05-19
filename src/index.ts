// CLASE 5 - Lunes 2 de mayo de 2022
// Estructuras de Control - CICLOS

// Ejercicio 8: Promedio-Máximo-Mínimo

/* • Diseñar un algoritmo que lea números enteros hasta teclear 0
• Determinar y mostrar el máximo, el mínimo y la media de todos los números ingresados
• Pensar cuidadosamente cómo debemos inicializar las variables. */

let min, max, sum, num, avg, count: number;
num = Number(prompt("Ingrese un número (0 para cortar)"));

count = 0;
sum = 0;
avg = 0;

min = num;
max = num;

while (num !== 0) {
  if (num < min) {
    min = num;
  } else if (num > max) {
    max = num;
  }
  sum += num;
  count++;
  num = Number(prompt("Ingrese un número (0 para cortar)"));
}
if (count > 0) {
  avg = sum / count;
  console.log("El mínimo es: ", min);
  console.log("El máximo es: ", max);
  console.log("El promedio es: ", avg);
} else {
  console.log("No ingresó ningún número!");
}

/*
NOTA:
El ejercicio presentó error en “let” (index.ts 'num' is already defined) (no-redeclare)
let num = Number(prompt("Ingrese un número (0 para cortar)"));
let count = 0;
let sum = 0;
let avg = 0;
let min = num;
let max = num;
*/

/*
Revisado y corregido en: Repositorio del prof. Daniel Tonelli
https://codesandbox.io/s/github/daniel-tonelli/Repositorio
*/
