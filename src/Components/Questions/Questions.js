import parseStringAsDOM from "../../Helpers/parseStringAsDOM";
import "./Question.css";

const Question = ({ data }) => {
  return <div className="question">{parseStringAsDOM(data.question)}</div>;
};

export default Question;
