import React from "react";

import axios from "axios";

function FavoritarNaFlutuacao() {
  const estados = React.useState("black");

  const cor = estados[0];
  const mudarCor = estados[1];

  const arranjoFavoritado = React.useState(false);

  const favoritado = arranjoFavoritado[0];
  const mudarFavoritado = arranjoFavoritado[1];

  React.useEffect(function pegarArtigo() {
    axios({
      url: "http://127.0.0.1:3001/api/artigo/titulo-7",
      method: "GET",
    }).then(function logarFavoritado(resposta) {
      console.log(resposta.data.artigo.favoritado);
    });
  }, []);

  async function tratarMouseSobre() {
    const resposta = await axios({
      url: "http://127.0.0.1:3001/api/artigo/titulo-7/favorito",
      method: "POST",
      headers: {
        autorizacao:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
      },
    });

    // se o status for 200
    mudarFavoritado(resposta.data.artigo.favoritado);
    mudarCor("green");
  }

  function tratarClique() {
    axios({
      url: "http://127.0.0.1:3001/api/artigo/titulo-7/favorito",
      method: "DELETE",
      headers: {
        autorizacao:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
      },
    }).then((resposta) => {
      // se o status for 200
      mudarFavoritado(false);
      mudarCor("red");
    });
  }

  return (
    <>
      <h1>O Componente FavoritarNaFlutuacaoFunciona!</h1>

      <h1
        style={{ color: cor }}
        onMouseOver={() => tratarMouseSobre()}
        onClick={() => tratarClique()}
      >
        {favoritado ? "Favoritado" : "Não favoritado"}
      </h1>
    </>
  );
}

export default FavoritarNaFlutuacao;
