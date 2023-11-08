import React from "react";
import ReactDOM from "react-dom/client";
import QuizzContextProvider from "../context/quizzContextProvider.jsx";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizzContextProvider>
      <App />
    </QuizzContextProvider>
  </React.StrictMode>,
);
