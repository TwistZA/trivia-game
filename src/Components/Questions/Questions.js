import parseStringAsDOM from "../../Helpers/parseStringAsDOM";
import "./Question.css";
import Snackbar from "../Snackbar/Snackbar";
import { useState, useEffect } from "react";

const Question = ({ data }) => {
  const [snack, setSnack] = useState({ enabled: false, text: "" });
  const [choiceStyles, setChoiceStyles] = useState([]);
  const [snackTimeout, setSnackTimeout] = useState();

  // choiceStyles logic
  // on first load OR new question - hide answers . styles= choice css class
  // on user selection - show answers. set styles "correctChoice" or "correctChoice "for each choice

  const hideSnackBar = () => {
    clearTimeout(snackTimeout);
    setSnack({ enabled: false, text: "" });
  };

  useEffect(() => {
    const hideAnswers = () => {
      let styles = [];
      for (let i = 0; i < data.shuffled.length; i++) {
        styles[i] = "choice";
      }

      setChoiceStyles(styles);
      hideSnackBar();
    };

    hideAnswers();
  }, [data]);

  const showAnswers = () => {
    let styles = [];

    for (let i = 0; i < data.shuffled.length; i++) {
      if (data.shuffled[i] === data.correct_answer) {
        styles[i] = "correctChoice";
      } else {
        styles[i] = "incorrectChoice";
      }
    }

    setChoiceStyles(styles);
  };

  console.log(
    `- CORRECT = ${data.correct_answer} - INCORRECT= ${data.incorrect_answers} - shuffled = ${data.shuffled}`
  );

  const showSnackBar = (text) => {
    //show and hide snackbar
    setSnack({ enabled: true, text: text });

    let snackBarTimeout = setTimeout(() => {
      setSnack({ enabled: false, text: "" });
    }, 3000);

    setSnackTimeout(snackBarTimeout);
  };

  const handleClick = (choice) => {
    if (choice.target.innerText === data.correct_answer) {
      showSnackBar("CORRECT");
    } else {
      showSnackBar("INCORRECT");
    }
    showAnswers();
  };

  return (
    <div className="question">
      {parseStringAsDOM(data.question)}
      <div>
        {data.shuffled.map((choice, index) => (
          <div
            key={choice}
            className={choiceStyles[index]}
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
