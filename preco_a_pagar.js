//Escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.


const codigo = Number(prompt("Qual o código do produto que você consumiu? "));
const quantidade = parseFloat(prompt("Quantos desse produto você consumiu? "));

let preco;

switch(codigo){
    case 1:
        preco = 4.00
        break
    case 2:
        preco = 4.50
        break
    case 3:
        preco = 5.00
        break
    case 4:
        preco = 2.00
        break
    case 5:
        preco = 1.50
        break
}

const total = parseFloat(preco*quantidade).toFixed(2);

console.log("Total = R$", total);
