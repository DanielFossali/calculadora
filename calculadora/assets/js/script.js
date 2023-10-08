// Selecionando os elementos da calculadora
const previousOperationText = document.getElementById('previous-operation');
const currentOperationText = document.getElementById('current-operation');
const buttons = Array.from(document.getElementsByClassName('number'));
const operators = Array.from(document.querySelectorAll('#button-container button:not(.number):not(#equal-btn)'));
const clearButton = document.querySelector('#button-container button:nth-child(1)');
const clearAllButton = document.querySelector('#button-container button:nth-child(2)');
const deleteButton = document.querySelector('#button-container button:nth-child(3)');
const equalButton = document.getElementById('equal-btn');


// Inicializando a operação atual
let currentOperation = '';
let previousOperation = '';

// Adicionando manipuladores de evento aos botões de número
buttons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperation += button.textContent;
        updateDisplay();
    });
});

// Adicionando manipuladores de evento aos operadores
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperation += ' ' + operator.textContent + ' ';
        updateDisplay();
    });
});

// Adicionando manipulador de evento ao botão de igual
equalButton.addEventListener('click', () => {
    try {
        previousOperation = currentOperation;
        currentOperation = eval(currentOperation);
        updateDisplay();
    } catch (error) {
        currentOperation = 'Erro';
        updateDisplay();
    }
});

// Adicionando manipulador de evento ao botão CE (Clear Entry)
clearButton.addEventListener('click', () => {
    currentOperation = '';
    updateDisplay();
});

// Adicionando manipulador de evento ao botão C (Clear All)
clearAllButton.addEventListener('click', () => {
    currentOperation = '';
    previousOperation = '';
    updateDisplay();
});

// Adicionando manipulador de evento ao botão DEL (Delete)
deleteButton.addEventListener('click', () => {
    // Verifica se há algo para deletar
    if (currentOperation.length > 0) {
        // Remove o último caractere da operação atual
        currentOperation = currentOperation.slice(0, -1);
        // Atualiza a exibição
        updateDisplay();
    }
});

// Função para atualizar a exibição da operação
function updateDisplay() {
    previousOperationText.textContent = previousOperation;
    currentOperationText.textContent = currentOperation;
}


