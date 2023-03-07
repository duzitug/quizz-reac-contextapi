import axios from "axios";

async function userSignIn({ email, password }) {
  const { data } = await axios({
    data: { email, password },
    method: "POST",
    url: `http://localhost:8080/user/signIn`,
  });

  return data;
}

export default userSignIn;
