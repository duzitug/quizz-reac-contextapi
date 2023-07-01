import React from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext.js";
import Login from "../components/Login.jsx";

function LoginPage() {
  const navigate = useNavigate();

  const { setValue } = React.useContext(AuthContext);

  const onFinish = async (values) => {
    console.log("Valores enviados: ", values);

    await axios
      .post(
        "https://quiz-backend-nodejs-express.fly.dev/api/user/signIn",
        values
      )
      .then((response) => {
        localStorage.setItem("token", response.data.user.token);
        setValue(response.data.user.token);
        if (response.status === 200) navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 500) {
          alert("Login ou senha incorretos");
        }
      });
  };

  return (
    <>
      <Login onFinish={onFinish} />
    </>
  );
}

export default LoginPage;
