import axios from "axios";

async function getUserByEmail() {
  const { data } = await axios({
    data: {},
    method: "GET",
    url: "https://quizz-backend-nodejs-express.herokuapp.com/",
  });

  console.log(data);

  return data;
}

export default getUserByEmail;
