import axios from "axios";

async function createQuestion(newQuestion) {
  const { data } = await axios.post(
    "http://localhost:3000/api/question",
    newQuestion
  );

  return data;
}

export default createQuestion;
