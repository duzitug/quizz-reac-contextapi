import axios from "axios";

async function userSignUp({ username, email, password }) {
  const { data } = await axios({
    data: { user: { username, email, password } },
    method: "POST",
    url: `https://quizz-backend-nodejs-express.herokuapp.com/user/signUp`,
  });

  return data;
}

export default userSignUp;
