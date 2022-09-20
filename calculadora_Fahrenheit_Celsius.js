// Faça um programa que peça a temperatura em graus Fahrenheit (F), transforme e mostre a temperatura em graus Celsius (°C).
// °C = (5 * (F-32) / 9)

let temperaturaEmF = Number(prompt("Qual a temperatura em Fahrenheit(F)? "));

let temperaturaEmC = (5 * (temperaturaEmF - 32)) / 9;

console.log(
  "A conversão de",
  temperaturaEmF,
  "F para Celsius resulta em",
  temperaturaEmC,
  "°C."
);

// Obs: Tente também fazer um programa que faça o inverso: peça a temperatura em graus Celsius e a transforme em graus Fahrenheit.

let temperaturaEmC = Number(prompt("Qual a temperatura em Celsius(°C)? "));

let temperaturaEmF = (9 * temperaturaEmC + 160) / 5;

console.log(
  "A conversão de",
  temperaturaEmC,
  "°C para Farenheit resulta em",
  temperaturaEmF,
  "F."
);

