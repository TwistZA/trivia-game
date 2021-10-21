import "./MainGame.css";
import { useState, useEffect } from "react";
import { useAxios } from "../../Hooks/useAxios";
import Counter from "../Counter/Counter";
import Question from "../Question/Question";
import fisherYatesShuffle from "../../Helpers/fisherYatesShuffle";
import Score from "../Score/Score";
import { Profile } from "../Profile/Profile";

function MainGame() {
  const [count, setCount] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const maxCount = 10;

  // get 10 random trivia from free web api with  this re-usable axios custom hook
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "https://opentdb.com/api.php?amount=10",
  });

  useEffect(() => {
    if (response !== null && response !== undefined) {
      createQuestions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  // construct data structure with correct, incorrect answers and shuffled array
  let list = [];
  let q;
  const createQuestions = () => {
    for (let i = 0; i < response.results.length; i++) {
      let shuffledArray = [
        response.results[i].correct_answer,
        ...response.results[i].incorrect_answers,
      ];
      fisherYatesShuffle(shuffledArray);

      q = {
        question: response.results[i].question,
        correct_answer: response.results[i].correct_answer,
        incorrect_answers: response.results[i].incorrect_answers,
        shuffled: shuffledArray,
        difficulty: response.results[i].difficulty,
      };

      list.push(q);
    }
    setQuestions(list);
  };

  const incrementScore = (value, timeRemaining) => {
    //score calculation
    // easy=150, medium=350, hard=500
    // time remaining [0-3] [4-6] [7-10];

    let difficulty = questions[count - 1].difficulty.toLowerCase();
    let difficultyScore = 0;

    if (difficulty === "easy") {
      difficultyScore = 150;
    } else if (difficulty === "medium") {
      difficultyScore = 350;
    } else if (difficulty === "hard") {
      difficultyScore = 500;
    }

    let newScore = value * difficultyScore * timeRemaining;

    setScore(score + newScore);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="rank">Ranking</div>
        <div className="title">Trivia Royale</div>
        <div className="profile">
          <Profile />
        </div>
      </div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <div>
            {
              // no need to use another state to store data, response is sufficient
              response && (
                <div className="mainContainer">
                  <Score score={score} />
                  <Counter
                    count={count}
                    maxCount={maxCount}
                    difficulty={questions[count - 1].difficulty}
                  />
                  <Question
                    data={questions[count - 1]}
                    incrementScore={incrementScore}
                  />

                  <div className="buttonsContainer">
                    {count < 10 && (
                      <button
                        disabled={count >= maxCount}
                        id="next"
                        onClick={() => setCount(count + 1)}
                      >
                        Next
                      </button>
                    )}

                    {count >= 10 && (
                      <button
                        // disabled={!gameOver}
                        id="finish"
                        onClick={() => console.log("Game Over")}
                      >
                        Finish
                      </button>
                    )}
                  </div>
                </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default MainGame;
