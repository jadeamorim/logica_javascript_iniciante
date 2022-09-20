//Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de internet (em Mbps)
// calcule e informe o tempo aproximado de download (em minutos) do arquivo usando este link.

const tamanho = Number(prompt("Qual o tamanho do seu arquivo em MB?"));
const velocidade = Number(prompt("Qual a velocidade da sua internet em Mbps?"));

const tempo = (tamanho * 8) / (velocidade * 60);

console.log("Você vai precisar de", tempo, "minuto(s) para baixar esse arquivo.");
