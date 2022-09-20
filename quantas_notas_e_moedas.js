//Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. 
//A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. 
//As notas consideradas são de 100, 50, 20, 10, 5, 2. 
//As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. 
//A seguir mostre a relação de notas necessárias.

let dinheiro = parseFloat(prompt("Quantos reais você quer decompor? Digite com os centavos e o ponto."));
let notaDe100 = 0;
let notaDe50 = 0;
let notaDe20 = 0;
let notaDe10 = 0;
let notaDe5 = 0;
let notaDe2 = 0;
let moedaDe1 = 0;
let moedaDe050 = 0;
let moedaDe025 = 0;
let moedaDe010 = 0;
let moedaDe005 = 0;
let moedaDe001 = 0;
while (dinheiro/100>=1){
    notaDe100 += 1;
    dinheiro -= 100;
}
while (dinheiro/50>=1){
    notaDe50 += 1;
    dinheiro -= 50;
}
while (dinheiro/20>=1){
    notaDe20 += 1;
    dinheiro -= 20;
}
while (dinheiro/10>=1){
    notaDe10 += 1;
    dinheiro -= 10;
}
while (dinheiro/5>=1){
    notaDe5 += 1;
    dinheiro -= 5;
}
while (dinheiro/2>=1){
    notaDe2 += 1;
    dinheiro -= 2;
}
while (dinheiro/1>=1){
    moedaDe1 += 1;
    dinheiro -= 1;
}
while (dinheiro/0.5>=1){
    moedaDe050 += 1;
    dinheiro -= 0.5;
}
while (dinheiro/0.25>=1){
    moedaDe025 += 1;
    dinheiro -= 0.25;
}
while (dinheiro/0.10>=1){
    moedaDe010 += 1;
    dinheiro -= 0.10;
}
while (dinheiro/0.05>=1){
    moedaDe005 += 1;
    dinheiro -= 0.05;
}
while (dinheiro/0.01>=1){
    moedaDe001 += 1;
    dinheiro -= 0.01;
}
console.log( 
    "NOTAS: \n",
    notaDe100, "nota(s) de R$ 100.00\n",
    notaDe50, "nota(s) de R$ 50.00\n",
    notaDe20, "nota(s) de R$ 20.00\n",
    notaDe10, "nota(s) de R$ 10.00\n",
    notaDe5, "nota(s) de R$ 5.00\n",
    notaDe2, "nota(s) de R$ 2.00\n \n MOEDAS: \n",
    moedaDe1, "moeda(s) de R$ 1.00\n",
    moedaDe050, "moeda(s) de R$ 0.50\n",
    moedaDe025, "moeda(s) de R$ 0.25\n",
    moedaDe010, "moeda(s) de R$ 0.10\n",
    moedaDe005, "moeda(s) de R$ 0.05\n",
    moedaDe001, "moeda(s) de R$ 0.01\n");
