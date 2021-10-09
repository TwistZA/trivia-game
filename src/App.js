import "./App.css";
import { useState, useEffect } from "react";
import { useAxios } from "./Hooks/AxiosHook";
import Counter from "./Components/Counter/Counter";
import parseStringAsDOM from "./Helpers/parseStringAsDOM";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const maxCount = 10;

  const { response, loading, error } = useAxios({
    method: "GET",
    url: "",
  });

  useEffect(() => {
    if (response !== null && response !== undefined) {
      setData(response);
    }
  }, [response]);

  console.log(data.results);

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
                  <div className="question">
                    {parseStringAsDOM(response.results[count - 1].question)}
                  </div>

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
