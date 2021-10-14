import "./App.css";
import { useState, useEffect } from "react";
import { useAxios } from "./Hooks/useAxios";
import Counter from "./Components/Counter/Counter";
import Question from "./Components/Question/Question";
import fisherYatesShuffle from "./Helpers/fisherYatesShuffle";
import Score from "./Components/Score/Score";

function App() {
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
      };

      list.push(q);
    }
    setQuestions(list);
  };

  const incrementScore = (value) => {
    setScore(score + value);
  };

  return (
    <div className="App">
      <h1>Trivia Royale</h1>
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
                  <Counter count={count} maxCount={maxCount} />
                  <Question
                    data={questions[count - 1]}
                    incrementScore={incrementScore}
                  />

                  <div className="buttonsContainer">
                    <button
                      disabled={count === 1}
                      id="prev"
                      onClick={() => setCount(count - 1)}
                    >
                      Prev
                    </button>
                    <button
                      disabled={count >= maxCount}
                      id="next"
                      onClick={() => setCount(count + 1)}
                    >
                      Next
                    </button>
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

export default App;
