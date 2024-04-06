import questions from "./questions.js";

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");

  questionElement.textContent = questions[currentQuestion].question;

  optionsElement.innerHTML = "";
  questions[currentQuestion].options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("float");
    button.onclick = () => {
      checkAnswer(option);
    };
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const percentage = (score /questions.length) * 100;

  if(percentage < 51) {

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Tu Puntaje es <span class="score-red"> ${score} </span> de
     <span class="total"> ${questions.length} </span>  y un porcentaje de  <span class="score-red"> ${   Math.round(percentage)}% </span>  </p>  <hr/>
    <p> Te recomendamos estudiar más xq sos un burro </p>`;


    return
  }
  const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Tu Puntaje es <span class="score"> ${score} </span> de
     <span class="total"> ${questions.length} </span>  y un porcentaje de  <span class="score"> ${   Math.round(percentage)}% </span>  </p>  <hr/>
    <p> Muy bien se ve que estudiaste </p>`;
  
}

// Load the first question when the page loads
window.onload = loadQuestion;
