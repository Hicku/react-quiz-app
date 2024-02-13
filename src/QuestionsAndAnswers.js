import { useState } from "react";
import Buttons from "./buttons";

export default function QuestionsAndAnswer({ QnA }) {
  const whiteBack = { background: "white", cursor: "pointer" };
  const changeBack = { background: "orange", cursor: "pointer" };
  const yellowBack = { background: "yellow" };

  const [question, setQuestion] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answerColour, setAnswerColour] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
    getRandomQuestion(QnA);
  };

  const getRandomQuestion = (questionArray) => {
    const remainingQuestions = questionArray.filter(
      (q) => !usedQuestions.includes(q)
    );

    if (
      question &&
      selectedAnswer !== "" &&
      selectedAnswer === question.correctAnswer
    ) {
      setScore(score + 1);
    }

    if (remainingQuestions.length === 0) {
      alert(`Your score is: ${score}`);
      setQuestion(null);
      setScore(0);
      setUsedQuestions([]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const newQuestion = remainingQuestions[randomIndex];
    const intialColours = newQuestion.answers.map(() => whiteBack);
    setAnswerColour(intialColours);

    setUsedQuestions([...usedQuestions, newQuestion]);
    setQuestion(newQuestion);
  };

  // Hanlde mouse hover

  const handleMouseEnter = (index) => {
    const newColours = [...answerColour];
    newColours[index] = changeBack;
    setAnswerColour(newColours);
  };

  // Handle leave

  const handleMouseLeave = (index) => {
    const newColors = [...answerColour];
    if (newColors[index].background !== yellowBack.background) {
      newColors[index] = whiteBack;
    }
    setAnswerColour(newColors);
  };

  const handleClickAnswer = (index) => {
    const selected = question.answers[index];
    const newColors = answerColour.map((color, i) => {
      return i === index ? yellowBack : whiteBack;
    });
    setSelectedAnswer(selected);
    setAnswerColour(newColors);
  };

  return (
    <div className="main-quest-div">
      <h3 className="question">
        {question
          ? question.question
          : quizStarted
          ? `Would you like to try again?`
          : "Click 'Start' to begin the quiz"}
      </h3>
      {question && (
        <div className="answers">
          {question.answers.map((answer, index) => (
            <div
              className="answer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClickAnswer(index)}
              style={answerColour[index]}
              key={index}
            >
              {answer}
            </div>
          ))}
        </div>
      )}
      <div>
        {!quizStarted ? (
          <Buttons onClick={startQuiz}>Start</Buttons>
        ) : question ? (
          <Buttons onClick={() => getRandomQuestion(QnA)}>Next</Buttons>
        ) : (
          <Buttons onClick={() => getRandomQuestion(QnA)}>Go!</Buttons>
        )}
      </div>
    </div>
  );
}
