import axios from "axios";

async function getQuestions({ offset }) {
  const { data } = await axios({
    data: {},
    method: "GET",
    url: `http://localhost:3000/api/question/listQuestionWithPagination?offset=${offset}`,
  });

  return data;
}

export default getQuestions;
