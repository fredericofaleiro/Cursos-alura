let ano = 2000;

if (ano % 4 === 0 && ano % 100 !== 0) {
  console.log("bisexto");
} else if (ano % 100 === 0 && ano % 400 === 0) {
  console.log("bisexto");
} else {
  console.log("normal");
}

const nota = 8;
const faltas = 3;

const bonus = nota >= 8 && faltas <= 2 ? "recebe bonus" : "nao recebe bonus";

console.log(bonus);

const user = "premium";

switch (user) {
  case "free":
    console.log("acesso limitado");
    break;
  case "premium":
    console.log("acesso completo");
    break;
  case "super-premium":
    console.log("acesso completo e bonus");
    break;
  default:
    console.log("user desconhecido");
    break;
}

const idade = 17

const deMaior = idade >= 18? 'é de maior' : 'é de menor';

console.log(deMaior)

