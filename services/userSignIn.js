import axios from "axios";

async function userSignIn({ email, password }) {
  const { data } = await axios({
    data: { email, password },
    method: "POST",
    url: `https://quizz-backend-nodejs-express.herokuapp.com/user/signIn`,
  });

  return data;
}

export default userSignIn;
