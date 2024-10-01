class SingletonScreen {
    constructor() {
        if (!SingletonScreen.instance) {
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
    { question: "5 + 3", answer: 8 },
    { question: "12 - 4", answer: 8 },
    { question: "6 * 7", answer: 42 },
    { question: "20 / 5", answer: 4 },
    { question: "15 + 25 - 10", answer: 30 },
    { question: "(3 + 7) * 2", answer: 20 },
    { question: "18 / 3 + 4", answer: 10 },
    { question: "9 - (2 * 3)", answer: 3 },
    { question: "5 * (4 + 1)", answer: 25 },
    { question: "8 + 2 * 3", answer: 14 },
    { question: "10 - 2 + 5", answer: 13 },
    { question: "3 * 3 * 3", answer: 27 },
    { question: "50 / 5 + 10", answer: 20 },
    { question: "7 + 5 * 2", answer: 17 },
    { question: "15 / 3 - 1", answer: 4 }
];

let currentExerciseIndex = 0;


window.onload = () => {
    showNextExercise();
};

function showNextExercise() {
    if (currentExerciseIndex < exercises.length) {
        const exerciseElement = document.getElementById('exercise-text');
        exerciseElement.textContent = "Ejercicio: " + exercises[currentExerciseIndex].question;
        document.getElementById('answer').value = ''; 
        document.getElementById('congratulations-section').style.display = 'none'; 
        document.getElementById('tryAgain-section').style.display = 'none'; 
    } else {
        alert("¡Todos los ejercicios han sido completados!");
    }
}


function addToDisplay(value) {
    screen.setContent(screen.getContent() + value); 
    updateScreen(); 
}

function clearDisplay() {
    screen.clear(); 
    updateScreen(); 
}

function calculateResult() {
    try {
        let expression = screen.getContent();
        let result = eval(expression); 
        screen.setContent(result.toString()); 
        updateScreen();
    } catch (error) {
        screen.setContent('Syntax error');
        updateScreen();
    }
}

function deleteLast() {
    const currentContent = screen.getContent();
    screen.setContent(currentContent.slice(0, -1)); 
    updateScreen();
}


function updateScreen() {
    document.getElementById('display').value = screen.getContent();
}


function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const correctAnswer = exercises[currentExerciseIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById('congratulations-section').style.display = 'block'; 
        document.getElementById('tryAgain-section').style.display = 'none'; 
    } else {
        document.getElementById('tryAgain-section').style.display = 'block'; 
        document.getElementById('congratulations-section').style.display = 'none'; 
    }
}


function nextExercise() {
    currentExerciseIndex++;
    showNextExercise(); 
}


function retry() {
    showNextExercise(); 
}
