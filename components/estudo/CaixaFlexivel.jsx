import React from "react";

// TODO como fica uma caixa flexível dentro de outra?

function CaixaFlexivel() {
  return (
    <>
      <h1>Componente CaixaFlexivel</h1>

      <div style={{ border: "1px solid black" }}>
        <img
          src="https://picsum.photos/id/237/200"
          alt=""
          style={{ border: "1px solid aqua" }}
        />
        <img
          src="https://picsum.photos/id/237/200"
          alt=""
          style={{ border: "1px solid aqua" }}
        />
        <img
          src="https://picsum.photos/id/237/200"
          alt=""
          style={{ border: "1px solid aqua" }}
        />
      </div>

      <div style={{ border: "1px solid black" }}>
        <img src="https://picsum.photos/id/237/200" alt="" />
        <img src="https://picsum.photos/id/237/200" alt="" />
        <img src="https://picsum.photos/id/237/200" alt="" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          border: "1px solid black",
        }}
      >
        <img
          src="https://picsum.photos/id/237/200"
          alt=""
          style={{ border: "1px solid aqua" }}
        />
        <img
          src="https://picsum.photos/id/237/200"
          alt=""
          style={{ border: "1px solid aqua" }}
        />
      </div>

      <div>
        <img src="https://picsum.photos/id/237/200" alt="" />
      </div>

      <div>
        <img src="https://picsum.photos/id/237/200" alt="" />
      </div>

      <img src="https://picsum.photos/id/237/200" alt="" />
      <img src="https://picsum.photos/id/237/200" alt="" />
      <img src="https://picsum.photos/id/237/200" alt="" />
      <img src="https://picsum.photos/id/237/200" alt="" />
      <img src="https://picsum.photos/id/237/200" alt="" />
      <img src="https://picsum.photos/id/237/200" alt="" />
    </>
  );
}

export default CaixaFlexivel;
