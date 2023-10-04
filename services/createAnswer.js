import axios from "axios";

async function createAnswer({ answerBody }) {
  const { data } = await axios({
    data: { answerBody },
    method: "POST",
    url: `http://localhost:8080/answer`,
  });

  return data;
}

export default createAnswer;
