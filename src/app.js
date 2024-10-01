class SingletonScreen {
    constructor() {
        if (SingletonScreen.instance == null) {
            this.content = '';
            SingletonScreen.instance = this;
        }
        return SingletonScreen.instance;
    }

    getContent() {
        return this.content;
    }

    setContent(value) {
        this.content = value;
    }

    clear() {
        this.content = '';
    }

    static getInstance() {
        if (!SingletonScreen.instance) {
            SingletonScreen.instance = new SingletonScreen();
        }
        return SingletonScreen.instance;
    }
}

const screen = SingletonScreen.getInstance();
const exercises = [
    "1. 5 + 3 = ?",
    "2. 12 - 4 = ?",
    "3. 6 * 7 = ?",
    "4. 20 / 5 = ?",
    "5. 15 + 25 - 10 = ?",
    "6. (3 + 7) * 2 = ?",
    "7. 18 / 3 + 4 = ?",
    "8. 9 - (2 * 3) = ?",
    "9. 5 * (4 + 1) = ?",
    "10. 8 + 2 * 3 = ?"
];

let currentExerciseIndex = 0;

window.onload = () => {
    showNextExercise();
};

function showNextExercise() {
    if (currentExerciseIndex < exercises.length) {
        const exerciseElement = document.getElementById('current-exercise');
        exerciseElement.textContent = exercises[currentExerciseIndex];
        currentExerciseIndex++;
    } else {
        alert("¡Todos los ejercicios han sido mostrados!");
        currentExerciseIndex = 0;
    }
}

class OperationFactory {
    static createOperation(operator) {
        return (a, b) => {
            switch (operator) {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '*':
                    return a * b;
                case '/':
                    return a / b;
                default:
                    throw new Error("Operación no soportada");
            }
        };
    }
}

function operators(value) {
    screen.setContent(screen.getContent() + value);
    updateScreen();
}

function cleaner() {
    screen.clear();
    updateScreen();
}

function calculate() {
    try {
        const result = eval(screen.getContent());
        screen.setContent(result.toString());
        updateScreen();
    } catch (error) {
        screen.setContent('Syntax error');
        updateScreen();
    }
}

function updateScreen() {
    document.getElementById('display').value = screen.getContent();
}

function sortNumbers() {
    const numbers = screen.getContent().split(',').map(parseFloat);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    screen.setContent(sortedNumbers.join(','));
    updateScreen();
}

function findMax() {
    const numbers = screen.getContent().split(',').map(parseFloat);
    const maxNumber = Math.max(...numbers);
    screen.setContent(maxNumber.toString());
    updateScreen();
}
