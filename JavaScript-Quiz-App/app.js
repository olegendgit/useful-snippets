const quizData = [
  {
  question: "Which language runs in a web browser?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d",
  },
  {
  question: "What does CSS stand for?",
  a: "Central Style Sheets",
  b: "Cascading Style Sheets",
  c: "Cascading Simple Sheets",
  d: "Cars SUVs Sailboats",
  correct: "b",
  },
  {
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Hypertext Markdown Language",
  c: "Hyperloop Machine Language",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a",
  },
  {
  question: "What year was JavaScript launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "none of the above",
  correct: "b",
  },
  ];
  const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
answerElements.forEach((answer) => (answer.checked = false));
};