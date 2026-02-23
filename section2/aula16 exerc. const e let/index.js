const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 37;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
anoNascimento = 2026 - idade;

// template strings - usa a crase e envolve a variavel com ${}

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg');
// forma mais outdated de mostrar as informações
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
// essa forma da linha 15 e 16 é a mais legivel/simples/mais moderna e PREFERIVEL