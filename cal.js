import inquirer from 'inquirer';
var Operation;
(function (Operation) {
    Operation["ADD"] = "Add";
    Operation["SUBTRACT"] = "Subtract";
    Operation["MULTIPLY"] = "Multiply";
    Operation["DIVIDE"] = "Divide";
})(Operation || (Operation = {}));
function calculate(operator, num1, num2) {
    switch (operator) {
        case Operation.ADD:
            return num1 + num2;
        case Operation.SUBTRACT:
            return num1 - num2;
        case Operation.MULTIPLY:
            return num1 * num2;
        case Operation.DIVIDE:
            if (num2 !== 0) {
                return num1 / num2;
            }
            else {
                throw new Error('Cannot divide by zero');
            }
        default:
            throw new Error('Invalid operator');
    }
}
async function runCalculator() {
    const questions = [
        {
            type: 'list',
            name: 'operator',
            message: 'Select an operation:',
            choices: Object.values(Operation),
        },
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number',
        },
    ];
    const answers = await inquirer.prompt(questions);
    const result = calculate(answers.operator, parseFloat(answers.num1), parseFloat(answers.num2));
    console.log(`Result: ${result}`);
}
runCalculator();
