import "./App.css";
import getQuestions from "./Components/Questions/Questions";
import { useState, useEffect } from "react";
import { useAxios } from "./Hooks/AxiosHook";

function App() {
  const [data, setData] = useState([]);
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "",
  });

  useEffect(() => {
    if (response !== null && response !== undefined) {
      setData(response);
    }
  }, [response]);

  console.log(data);

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
            {" "}
            {
              // no need to use another state to store data, response is sufficient
              response && <p>{response.results[0].question}</p>
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
