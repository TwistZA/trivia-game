import "./App.css";
import { useState, useEffect } from "react";
import { useAxios } from "./Hooks/AxiosHook";
import Counter from "./Components/Counter/Counter";
import Question from "./Components/Questions/Questions";

function App() {
  const [count, setCount] = useState(1);
  const maxCount = 10;

  // get 10 random trivia from free web api with  this re-usable axios custom hook
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "https://opentdb.com/api.php?amount=10",
  });

  useEffect(() => {
    if (response !== null && response !== undefined) {
      console.log(response.results);
    }
  }, [response]);

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
                  <Counter count={count} maxCount={maxCount} />
                  <Question data={response.results[count - 1]} />

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
