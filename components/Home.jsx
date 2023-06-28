import React from "react";
import Hero from "./Hero.jsx";
import ArticlePreviewCard from "./CartaoPreVisualizacaoArtigo.jsx";
import axios from "axios";

function Home() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [image, setImage] = React.useState("");
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://quiz-backend-nodejs-express.fly.dev/api/article/list")
      .then((response) => {
        setTitle(response.data[0].title);
        setDate(response.data[0].createdAt);
      });
  });

  return (
    <>
      <Hero />

      <ArticlePreviewCard
        title={title}
        date={date}
        description={"descricap"}
        author={"autor"}
        image={"https://th.bing.com/th/id/OIP.nhyWEOmF_nmKhIg9LY5U8wAAAA"}
      />
    </>
  );
}
export default Home;
