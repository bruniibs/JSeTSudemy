alert('Com a nossa mensagem'); // um atalho pra chamar alguma função no objeto WINDOW

// window.confirm('deseja realmente apagar?') - pergunta com resposta booleana (true/false)
// window.prompt('digite o seu nome') - promt de pergunta com caixa de texto

let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');
num1 = Number(num1);
num2 = Number(num2);
alert(`O resultado foi: ${num1 + num2}`); // em codigos mais complexos seria melhor criar uma variavel propria pro resultado