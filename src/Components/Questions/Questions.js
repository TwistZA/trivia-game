import parseStringAsDOM from "../../Helpers/parseStringAsDOM";
import "./Question.css";
import Snackbar from "../Snackbar/Snackbar";
import { useState } from "react";

const Question = ({ data }) => {
  const [snack, setSnack] = useState({ enabled: false, text: "" });

  console.log(
    `- CORRECT = ${data.correct_answer} - INCORRECT= ${data.incorrect_answers} - shuffled = ${data.shuffled}`
  );

  const showSnackBar = (text) => {
    //show and hide snackbar
    setSnack({ enabled: true, text: text });
    setTimeout(() => {
      setSnack({ enabled: false, text: "" });
    }, 3000);
  };

  const handleClick = (choice) => {
    if (choice.target.innerText === data.correct_answer) {
      console.log(`${choice.target.innerText} -----CORRECT-----`);
      showSnackBar("CORRECT");
    } else {
      showSnackBar("INCORRECT");
      console.log(`${choice.target.innerText} -----INCORRECT-----`);
    }
  };

  return (
    <div className="question">
      {parseStringAsDOM(data.question)}
      <div>
        {data.shuffled.map((choice) => (
          <div
            key={choice}
            className="choice"
            onClick={(choice) => handleClick(choice)}
          >
            {parseStringAsDOM(choice)}
          </div>
        ))}
      </div>
      <Snackbar snack={snack} />
    </div>
  );
};

export default Question;
