import Quiz from "./Quiz";

var questionsAndAnswers = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Charles Dickens"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["H2O", "CO2", "NaCl", "O2"],
    correctAnswer: "H2O",
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the tallest mammal?",
    answers: ["Giraffe", "Elephant", "Whale", "Kangaroo"],
    correctAnswer: "Giraffe",
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correctAnswer: "Pacific",
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      "Alexander Fleming",
      "Marie Curie",
      "Albert Einstein",
      "Isaac Newton",
    ],
    correctAnswer: "Alexander Fleming",
  },
  {
    question: "What is the square root of 64?",
    answers: ["8", "6", "10", "4"],
    correctAnswer: "8",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["Japan", "China", "India", "South Korea"],
    correctAnswer: "Japan",
  },
];

function App() {
  return (
    <div className="App">
      <div className="main-div">
        <Quiz className="quiz" QnA={questionsAndAnswers} />
      </div>
    </div>
  );
}

export default App;
