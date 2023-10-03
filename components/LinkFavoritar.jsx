import React from "react";

import axios from "axios";

//como definir uma classe do css

function LinkFavoritar() {
  //efeito para exibir o favoritado do artigo

  const [favoritado, mudarFavoritado] = React.useState(false);

  const [cor, mudarCor] = React.useState("red");

  React.useEffect(() => {
    axios({
      url: "http://127.0.0.1:3001/api/artigo/titulo-7",
      method: "GET",
      headers: {
        autorizacao:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
      },
    }).then((resposta) => {
      mudarFavoritado(resposta.data.artigo.favoritado);
    });
  }, []);

  const tratarClique = async () => {
    let resposta;

    if (favoritado === false) {
      resposta = await axios({
        url: "http://127.0.0.1:3001/api/artigo/titulo-7/favorito",
        method: "POST",
        headers: {
          autorizacao:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
        },
        data: {},
      });

      mudarFavoritado(resposta.data.artigo.favoritado);
    } else if (favoritado === true) {
      resposta = await axios({
        url: "http://127.0.0.1:3001/api/artigo/titulo-7/favorito",
        method: "DELETE",
        headers: {
          autorizacao:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
        },
        data: {},
      });
      mudarFavoritado(false);
    }
  };

  return (
    <>
      <h1>O componente LinkFavoritar funciona!</h1>

      <div
        className="nomeDaClasse"
        style={{ color: `${cor}` }}
        onClick={() => mudarCor("blue")}
      >
        Olá, mundo!\
      </div>

      <h1
        onClick={tratarClique}
        style={{ color: favoritado ? "green" : "red" }}
      >
        {favoritado ? "Favoritado" : "Não Favoritado"}
      </h1>

      <a onClick={tratarClique} style={{ color: favoritado ? "green" : "red" }}>
        Ligação
      </a>
    </>
  );
}

export default LinkFavoritar;
