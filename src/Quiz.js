import QuestionsAndAnswers from "./QuestionsAndAnswers";

export default function Quiz({ QnA }) {
  return (
    <div className="qna-div">
      <QuestionsAndAnswers className="qna" QnA={QnA} />
    </div>
  );
}
