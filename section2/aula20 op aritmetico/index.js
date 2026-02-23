/*
    Aritmeticos
    + Adição/concatenação(unir dois valores)
    - subtração
    / Divisão
    * Multiplicação
    ** potencialização
    % Resto da divisão
    ++ Operador de INCREMENTO
    -- Operador de DECREMENTO
*/

const num1 = 5;
const num2 = 10;
const num3 = 3;
console.log(num1 + num2); // soma
console.log(num1 - num2); // subtração
console.log(num1 / num2); // divisão
console.log(num1 * num2); // multiplização
console.log(num2 % num3); // potencialização

console.log('--------- OP de Atribuição ---------');

let contador = 1;
contador++; // 2 / EXECUTA a ação e DEPOIS incrementa o valor
contador++; // 3
contador++; // 4
contador++; // 5
++contador; // 6 / PRIMEIRO incrementa o valor e DEPOIS mostra
console.log(contador); // cada vez que é usado o operador ja é modificado o valor da variavel
// não pode ser usado em const !!! apenas let

console.log('--------- incremento maior ----------')

// incremento de MAIS de 1 valor:
const passo = 5;
let contador1 = 1;
/* contador1 = contador1 + passo;
console.log(contador1);
contador1 = contador1 + passo;
console.log(contador1);
contador1 = contador1 + passo;
console.log(contador1);
 */
// ou podemos usar um atalho:
contador1 += passo; // contador = contador + passo
contador1 += passo; 
contador1 += passo;
contador1 += passo;
console.log(contador1);

// tambem podemos usar um "contador **= 10;" pra fazer um elevado
// tomar cuidado com o TIPO de dado quando usado isso