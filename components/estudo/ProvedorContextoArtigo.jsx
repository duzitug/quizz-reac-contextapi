import React from "react";

export const ContextoArtigo = React.createContext();

function PovedorContextoArtigo({ children }) {
  const [estado, mudarEstado] = React.useState("Testando");

  // porque
  React.useEffect(() => {
    const estadoSalvo = localStorage.getItem("teste");
    if (estadoSalvo) {
      mudarEstado(JSON.parse(estadoSalvo));
    }
  }, []);

  return (
    <ContextoArtigo.Provider value={{ estado, mudarEstado }}>
      {children}
    </ContextoArtigo.Provider>
  );
}

export default PovedorContextoArtigo;

// como exportar o ContextoArtigo também
