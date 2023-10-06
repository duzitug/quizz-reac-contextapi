import React from "react";

import axios from "axios";

function CriarComentario() {
  const [conteudoComentario, mudarConteudoComentario] = React.useState("");
  const [carregando, mudarCarregando] = React.useState(false);
  const [titulo, mudarTitulo] = React.useState("titulo-2");

  async function criarComentario() {
    mudarCarregando(true);

    await axios({
      url: `http://localhost:3001/api/artigo/${titulo}/comentario`,
      method: "POST",
      data: { comentario: { conteudo: conteudoComentario } },
      headers: {
        autorizacao:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
      },
    });

    mudarCarregando(false);
  }

  return (
    <div>
      <h1>Criar Comentário</h1>
      <input
        type="text"
        placeholder="conteudo"
        value={conteudoComentario}
        onChange={(e) => mudarConteudoComentario(e.target.value)}
      />

      <input
        type="text"
        placeholder="titulo"
        value={titulo}
        onChange={(e) => mudarTitulo(e.target.value)}
      />

      <h1>{carregando ? "Carregando" : null}</h1>
      <h1 onClick={criarComentario}>Passe aqui para criar</h1>
      <h1>{conteudoComentario}</h1>
    </div>
  );
}

export default CriarComentario;
