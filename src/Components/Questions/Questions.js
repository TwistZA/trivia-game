import axios from "axios";

const TRIVIA_API_GET_10_QUESTIONS = "https://opentdb.com/api.php?amount=10";

async function getQuestions() {
  console.log("----------getQuestions()-----------");
  try {
    const response = await axios.get(TRIVIA_API_GET_10_QUESTIONS);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default getQuestions;
