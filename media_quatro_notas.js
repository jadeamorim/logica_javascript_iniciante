//Faça um programa que peça as 4 notas bimestrais de um aluno e mostre a média aritmética delas.

let notaBimestre1 = Number(prompt("Digite a sua nota do 1º bimestre: "));
let notaBimestre2 = Number(prompt("Digite a sua nota do 2º bimestre: "));
let notaBimestre3 = Number(prompt("Digite a sua nota do 3º bimestre: "));
let notaBimestre4 = Number(prompt("Digite a sua nota do 4º bimestre: "));

let mediaAritmetica =
  (notaBimestre1 + notaBimestre2 + notaBimestre3 + notaBimestre4) / 4;

console.log("A média aritmética das suas notas é de", mediaAritmetica);
