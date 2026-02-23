// NaN - Not a Number, quando isso aparece é pq deu algum erro na conta envolvendo um dado de outro tipo

const num1 = 10;
const num2 = 'Luiz'; // mas se dentro da string fosse um numero, o JS tentaria resolver e a conta daria certo...
console.log(num1 * num2)

console.log('------- com string e numero ---------');

const num3 = '5';
console.log(num1 * num3); // mas num caso de "soma" daria erro pois seria feita a CONCATENAÇÃO

console.log('------- parseInt ---------');

// ou podemos usar a função parseInt pra resolver isso
const num4 = 10;
const num5 = parseInt('5'); // solicita pra mudar o que esta DENTRO da STRING para um numero
console.log(num4 + num5);

// usando 'parseFloat' faz o mesmo porem com numeros float.

// 'Number' não distingue
// se a string tiver letras ele não fara a conversão !!!