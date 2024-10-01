// Utilizando var, let, const, arrow functions, classes, arrays, operador ternário e outros conceitos

let result = document.getElementById('result');

// Classe Calculadora
class Calculadora {
    constructor() {
        this.history = [];
    }

    // Arrow function para adicionar ao histórico
    addToHistory = (operation) => {
        this.history.push(operation);
    };

    // Função de soma (arrow function)
    soma = (a, b) => a + b;

    // Método de cálculo genérico
    calcularExpressao(expressao) {
        try {
            const resultado = eval(expressao);  // Executa a expressão
            this.addToHistory(`${expressao} = ${resultado}`);
            return resultado;
        } catch (error) {
            return "Erro";
        }
    }
}

// Instanciando a classe Calculadora
const calc = new Calculadora();

// Inserindo números e operadores na tela
const insert = (num) => {
    result.value += num;
};

// Função para calcular o resultado
const calculate = () => {
    let expression = result.value;
    const output = calc.calcularExpressao(expression);
    result.value = output;
};

// Limpar a tela
const clearResult = () => result.value = '';

// Deletar o último caractere
const deleteLast = () => result.value = result.value.slice(0, -1);

// Exibindo histórico no console (opcional)
console.log(calc.history);