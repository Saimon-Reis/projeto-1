<h1>Projeto</h1>  
<h2>Calculadora Simples</h2>
<P>Este projeto consiste no desenvolvimento de uma calculadora simples utilizando JavaScript, aplicando pelo menos 5 conceitos fundamentais da linguagem moderna, como var,</P>
<p>Descrição Geral:  let e const, arrow functions, classes, arrays e operador ternário. A calculadora realiza operações básicas (soma, subtração, multiplicação e divisão),</p> 
<p>além de armazenar o histórico de operações realizadas durante a execução.</p>

<h1>Funcionalidades</h1>

Soma, subtração, multiplicação e divisão.
Manipulação de números e operadores através da interface da calculadora.
<br>
Histórico de Operações:

Armazena todas as operações realizadas em um array.
Exibição do histórico no console (pode ser expandido para interface).
Funções de Limpeza:

Limpar toda a tela de uma vez (C).
Deletar o último caractere inserido (DEL).
Tratamento de Erros:

Uso de blocos try-catch para evitar erros ao tentar calcular expressões inválidas, exibindo uma mensagem de erro.
Tecnologias Utilizadas:
HTML: Para estruturação da interface.
CSS: Para estilização da calculadora.
JavaScript: Para toda a lógica do sistema, manipulação do DOM, e cálculo das expressões.
Conceitos de JavaScript Aplicados:
Variáveis (var, let, const):

Uso de let e const para declarar variáveis e funções que manipulam a interface e a lógica de cálculo.
Arrow Functions:

Funções como soma, addToHistory, entre outras, são implementadas com arrow functions, deixando o código mais conciso.
Classes:

A classe Calculadora foi criada para organizar a lógica da calculadora, incluindo métodos para operações e o histórico de cálculos.
Arrays:

O array history armazena todas as operações realizadas para consulta posterior.
Operador Ternário:

Utilizado para simplificar verificações lógicas, especialmente no tratamento de erros durante o cálculo das expressões.
Template Literals:

Utilizados para exibir resultados de maneira dinâmica no HTML, tornando a manipulação do DOM mais eficiente.
Manipulação do DOM:

Interação com os elementos da página HTML através do JavaScript, alterando o valor do campo de texto que exibe os números e resultados.
Como Utilizar:
Abra o arquivo index.html em seu navegador para visualizar a interface da calculadora.
Insira os números e operações desejadas usando os botões exibidos.
O resultado da operação será exibido automaticamente quando o botão = for pressionado.
Para reiniciar a operação, use o botão C (Clear).
Utilize o botão DEL para apagar o último número ou operador inserido.
O histórico de operações realizadas pode ser visualizado no console do navegador.
