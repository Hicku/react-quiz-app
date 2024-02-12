import { useState } from "react";
import Buttons from "./buttons";

export default function QuestionsAndAnswer({ QnA }) {
  const whiteBack = { background: "white" };
  const changeBack = { background: "orange" };

  const [question, setQuestion] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answerColour, setAnswerColour] = useState([]);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
    getRandomQuestion(QnA);
  };

  const getRandomQuestion = (questionArray) => {
    const remainingQuestions = questionArray.filter(
      (q) => !usedQuestions.includes(q)
    );

    if (remainingQuestions.length === 0) {
      setQuestion(null);
      setUsedQuestions([]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const newQuestion = remainingQuestions[randomIndex];
    const intialColours = newQuestion.answers.map(() => whiteBack);
    setAnswerColour(intialColours);

    setUsedQuestions([...usedQuestions, newQuestion]);
    setQuestion(newQuestion);
    console.log(newQuestion);
  };

  const handleMouseEnter = (index) => {
    const newColours = [...answerColour];
    newColours[index] = changeBack;
    setAnswerColour(newColours);
  };

  const handleMouseLeave = (index) => {
    const newColors = [...answerColour];
    newColors[index] = whiteBack;
    setAnswerColour(newColors);
  };

  return (
    <div className="main-quest-div">
      <h3 className="question">
        {question
          ? question.question
          : quizStarted
          ? "You've finished! Your score is 10 out of 10"
          : "Click 'Start' to begin the quiz"}
      </h3>
      {question && (
        <div className="answers">
          {question.answers.map((answer, index) => (
            <div
              className="answer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
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
          <Buttons onClick={() => getRandomQuestion(QnA)}>Try again</Buttons>
        )}
      </div>
    </div>
  );
}
