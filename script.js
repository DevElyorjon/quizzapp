const quizData = [
    {
        question: "1. Where is Bella’s next match?",
        a: 'at her school',
        b: 'at a sports club',
        c: 'on the beach', 
        correct: 'c'
    }, {
        question: "2. What time does it start?",
        a: '11.00',
        b: '11.15',
        c: '11.30', 
        correct: 'b'
    }, {
        question: "3. How often does Bella play volleyball?",
        a: 'twice a week',
        b: 'only at the weekend',
        c: 'every Wednesday',
        correct: 'a'
    }, {
        question: '4. What can’t Bella find?',
        a: 'her trainers',
        b: 'a rocket',
        c: 'a ring',
        correct: 'c'
    }, {
        question: '5. How is Bella feeling now?',
        a: 'thirsty',
        b: 'hungry', 
        c: 'tired',
        correct: 'b'
    }, {
        question: '6. What does Bella usually drink after a volleyball match?',
        a: 'tea',
        b: 'water',
        c: 'juice',
        correct: 'c'
    }, {
        question: '7. What’s the coach’s phone number?',
        a: '987735',
        b: '987335',
        c: '988735',
        correct: 'a'
    }

];
 
// console.log(quizData[3]);
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
//const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    //d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

//needs to be done
/*

when we move to the next question options should be empty or deselected

check if the chosen element is true or false



*/