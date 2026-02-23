let varA = 'A';
let varB = 'B';
let varC = 'C';

const varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);
//-------------------------------------------------------------------------

console.log('------ ou -------');
// uma forma MAIS MODERNA do JS de fazer
let varA1 = 'A';
let varB1 = 'B';
let varC1 = 'C';

[varA1, varB1, varC1] = [varB1, varC1, varA1]
console.log(varA1, varB1, varC1);