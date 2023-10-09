import React from "react";

import axios from "axios";

function CriarArtigo() {
  const [artigo, mudarArtigo] = React.useState({
    titulo: "titulo",
    corpo: "corpo",
    descricao: "descricao",
  });

  const criarArtigo = async () => {
    const resposta = await axios({
      url: "http://localhost:3001/api/artigo?nome=mercio&idade=34&bairro=cordeiro",
      method: "POST",
      data: { artigo },
      headers: {
        autorizacao:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbmljYUBlbWFpbC5jb20iLCJpYXQiOjE2OTUwNzY2MzN9.V10XgMQlR7jeOICcl3ZP_jzAgI-98HGX0LEqlH_XqHc",
      },
    });
  };

  return (
    <div>
      <h1>Componente CriarArtigo</h1>

      <h1 onClick={criarArtigo}>Clique para Criar</h1>

      <input
        type="text"
        placeholder="titulo"
        value={artigo.titulo}
        onChange={(e) => mudarArtigo({ ...artigo, titulo: e.target.value })}
      />

      <input
        type="text"
        placeholder="corpo"
        value={artigo.corpo}
        onChange={(e) => mudarArtigo({ ...artigo, corpo: e.target.value })}
      />

      <input
        type="text"
        placeholder="descricao"
        value={artigo.descricao}
        onChange={(e) => mudarArtigo({ ...artigo, descricao: e.target.value })}
      />
    </div>
  );
}

export default CriarArtigo;
