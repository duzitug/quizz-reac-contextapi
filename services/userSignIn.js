import axios from "axios";

async function userSignIn({ email, password, userToken }) {
  const { data } = await axios({
    data: {
      email,
      password,
      headers: {
        Cookie: `userToken=${userToken}`,
      },
    },
    method: "POST",
    url: `https://quizz-backend-nodejs-express.herokuapp.com/user/signIn`,
  });

  return data;
}

export default userSignIn;
