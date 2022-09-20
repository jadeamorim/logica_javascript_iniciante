//Faça um programa que peça 2 números inteiros e um número real, calcule e mostre:

// a) o produto entre o dobro do primeiro e a metade do segundo.
// b) a soma entre o triplo do primeiro e o terceiro.
// c) o terceiro elevado ao cubo. 


const numero1 = Number(prompt("Digite um número inteiro:"));
const numero2 = Number(prompt("Digite outro número inteiro:"));
const numero3 = Number(prompt("Digite um número real:"));

contaA = 2*numero1*(numero2/2);
contaB = 3*numero1+numero3
contaC = numero3*numero3*numero3;

console.log("Eis o produto entre o dobro do primeiro e a metade do segundo:", contaA);
console.log("Eis a soma entre o triplo do primeiro e o terceiro:", contaB);
console.log("Eis o terceiro elevado ao cubo:", contaC);
