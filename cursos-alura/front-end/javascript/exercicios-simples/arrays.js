const frutas = ["uva", "maça", "pera", "laranja", "melancia"];
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < frutas.length; i++) {
  console.log("indice:", i);
  console.log(frutas[i]);
}

frutas.forEach((valor, indice) => {
  console.log("indice:", indice, valor);
});

numb.forEach((valor) => {
  console.log("indice", valor);
});

const numerosPares = numb.filter((numb) => {
  return numb % 2 === 0;
});

const numerosImpares = numb.filter((numb) => {
  return numb % 2 !== 0;
});
console.log(numerosPares);
console.log(numerosImpares);
