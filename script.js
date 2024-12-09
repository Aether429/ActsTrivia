const questions = [
  {
    question: "Who was the first martyr in the Book of Acts?",
    choices: ["Stephen", "Paul", "Peter", "John"],
    answer: 0
  },
  {
    question: "Where did Paul first go on his missionary journey?",
    choices: ["Cyprus", "Rome", "Damascus", "Athens"],
    answer: 0
  },
  {
    question: "Who accompanied Paul on his second missionary journey?",
    choices: ["Barnabas", "Silas", "Luke", "Timothy"],
    answer: 1
  },
  {
    question: "What was the name of the Roman centurion who converted to Christianity in Acts?",
    choices: ["Cornelius", "Claudius", "Tiberius", "Julius"],
    answer: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;
  const choices = document.querySelectorAll('.choice');
  
  choices.forEach((btn, index) => {
    btn.textContent = question.choices[index];
  });

  document.getElementById('result').textContent = '';
  document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(selectedChoice) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedChoice === correctAnswer) {
    score++;
    document.getElementById('result').textContent = 'Correct!';
  } else {
    document.getElementById('result').textContent = 'Wrong answer!';
  }

  document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('result').textContent = `Game Over! Your score is ${score}/${questions.length}`;
    document.getElementById('next-button').style.display = 'none';
  }
}

window.onload = loadQuestion;
