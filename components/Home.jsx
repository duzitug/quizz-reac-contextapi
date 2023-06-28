import Hero from "./Hero.jsx";
import ArticlePreviewCard from "./CartaoPreVisualizacaoArtigo.jsx";

const Home = () => (
  <>
    <Hero />

    <ArticlePreviewCard
      title={"Titulo do artigo"}
      date={"dezembro"}
      description={"descricap"}
      author={"autor"}
      image={"https://th.bing.com/th/id/OIP.nhyWEOmF_nmKhIg9LY5U8wAAAA"}
    />
  </>
);
export default Home;
