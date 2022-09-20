// Faça um programa que leia as coordenadas de 2 (dois) pontos em um plano cartesiano 2D: 
// a coordenada x do primeiro ponto (X1), 
// a coordenada y do primeiro ponto (Y1), 
// a coordenada x do segundo ponto (X2) 
// e a coordenada y do segundo ponto (Y2). 
// Em seguida, calcule a distância euclidiana entre os pontos.

const X1 = Number(prompt("Qual a coordenada x do primeiro ponto? "));
const Y1 = Number(prompt("Qual a coordenada y do primeiro ponto? "));
const X2 = Number(prompt("Qual a coordenada x do segundo ponto? "));
const Y2 = Number(prompt("Qual a coordenada y do segundo ponto? "));

const distancia = Math.sqrt(((X2-X1)*(X2-X1))+((Y2-Y1)*(Y2-Y1)));

console.log("A distancia entre os dois pontos é de:", distancia);
