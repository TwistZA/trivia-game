import "./App.css";
import getQuestions from "./Components/Questions/Questions";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const TRIVIA_API_GET_10_QUESTIONS = "https://opentdb.com/api.php?amount=10";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(TRIVIA_API_GET_10_QUESTIONS);
      // console.log(response.data.results);
      setData(response.data.results);
    };

    fetchData();
  }, []);

  if (!data) {
    console.log("______________Loading___________________");
    return (
      <div className="App">
        <h1>Loading...⏳</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Trivia Royale</h1>
      <ul>
        {data.map((item) => (
          <li key={item.question}>{item.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
