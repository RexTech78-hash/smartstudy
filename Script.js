// Questions database
const questions = {
  science: [
    {
      question: "What is the chemical symbol for Oxygen?",
      options: ["O", "Ox", "Og", "On"],
      answer: "O"
    },
    {
      question: "Which organ pumps blood in the human body?",
      options: ["Lungs", "Brain", "Heart", "Kidney"],
      answer: "Heart"
    }
  ],

  art: [
    {
      question: "Who wrote 'Things Fall Apart'?",
      options: ["Wole Soyinka", "Chinua Achebe", "Ngugi", "Achebe Ben"],
      answer: "Chinua Achebe"
    },
    {
      question: "A poem usually expresses?",
      options: ["Facts", "Emotions", "Laws", "Numbers"],
      answer: "Emotions"
    }
  ],

  commercial: [
    {
      question: "What does GDP stand for?",
      options: [
        "Gross Domestic Product",
        "General Domestic Price",
        "Gross Development Plan",
        "Global Domestic Product"
      ],
      answer: "Gross Domestic Product"
    },
    {
      question: "Which subject deals with buying and selling?",
      options: ["Biology", "Commerce", "Literature", "Physics"],
      answer: "Commerce"
    }
  ]
};

let currentSubject = "";
let currentQuestionIndex = 0;
let score = 0;

// Start quiz
function startQuiz(subject) {
  currentSubject = subject;
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// Show question
function showQuestion() {
  const quizBox = document.getElementById("quiz");
  const q = questions[currentSubject][currentQuestionIndex];

  quizBox.innerHTML = `
    <h3>${q.question}</h3>
    ${q.options
      .map(
        option =>
          `<button onclick="checkAnswer('${option}')">${option}</button>`
      )
      .join("")}
  `;
}

// Check answer and auto next
function checkAnswer(selected) {
  const correct =
    questions[currentSubject][currentQuestionIndex].answer;

  if (selected === correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions[currentSubject].length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Show result
function showResult() {
  document.getElementById("quiz").innerHTML = `
    <h2>Quiz Completed 🎉</h2>
    <p>Your score: ${score}</p>
    <button onclick="location.reload()">Go Home</button>
  `;
      }
