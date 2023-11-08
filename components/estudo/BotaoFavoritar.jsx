import React from "react";

import axios from "axios";

// TODO: alterar estilo do botão com base na mudanca de estado

function BotaoFavoritar() {
  const [artigo, mudarArtigo] = React.useState({});
  const [favoritado, mudarFavoritado] = React.useState(false);
  const [contagemFavoritos, mudarContagemFavoritos] = React.useState(0);
  const [slug, mudarSlug] = React.useState("carregando");

  React.useEffect(() => {
    // pegar artigo
    axios({
      method: "GET",
      url: "http://localhost:3001/api/artigo/titulo-7",
      headers: {
        autorizacao:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
      },
    }).then((resposta) => {
      mudarArtigo(resposta.data.artigo);
      mudarFavoritado(resposta.data.artigo.favoritado);
      mudarContagemFavoritos(resposta.data.artigo.contagemFavoritos);
      mudarSlug(resposta.data.artigo.slug);
    });
  }, []);

  async function tratarClique() {
    //metodo GET ou POST dependendo se o artigo é ou não favoritado

    let resposta;

    // o que esta acontecendo??
    if (favoritado === false) {
      resposta = await axios.post(
        "http://127.0.0.1:3001/api/artigo/titulo-7/favorito",
        {},
        {
          headers: {
            autorizacao:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
          },
        },
      );
      mudarFavoritado(resposta.data.artigo.favoritado);
    } else if (favoritado === true) {
      resposta = await axios.delete(
        "http://127.0.0.1:3001/api/artigo/titulo-7/favorito",
        {
          headers: {
            autorizacao:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
          },
        },
      );
      mudarFavoritado(false);
    }

    // TODO o DELETE não está retornando a contagem de favoritos
    mudarContagemFavoritos(resposta.data.artigo.contagemFavoritos);
  }

  return (
    <>
      {favoritado ? <h1>Favoritado</h1> : <h1>Nao Favoritado</h1>}

      <h1>Contagem Favoritos: {contagemFavoritos}</h1>

      <h1>Slug: {slug}</h1>

      <button
        onClick={tratarClique}
        style={{ color: favoritado ? "green" : "red" }}
      >
        Clicar
      </button>
    </>
  );
}

export default BotaoFavoritar;
