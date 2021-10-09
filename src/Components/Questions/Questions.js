import parseStringAsDOM from "../../Helpers/parseStringAsDOM";
import "./Question.css";
import fisherYatesShuffle from "../../Helpers/fisherYatesShuffle";

const Question = ({ data }) => {
  //create a single data structure with all answers and then shuffle it
  // create array by joining correct and incorrect answers
  let choices = [data.correct_answer, ...data.incorrect_answers];

  // now shuffle this array using fisher yates algorithm
  console.log("before shuffle");
  console.log(choices);

  fisherYatesShuffle(choices);
  console.log("after shuffle");
  console.log(choices);

  const handleClick = (choice) => {
    console.log(choice.target.innerText);
  };

  return (
    <div className="question">
      {parseStringAsDOM(data.question)}
      <div>
        {choices.map((choice) => (
          <div
            key={choice}
            className="choice"
            onClick={(choice) => handleClick(choice)}
          >
            {parseStringAsDOM(choice)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
