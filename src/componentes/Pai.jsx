import React from "react";
import Filho from "./Filho";

export default props => {
  const notificar = lugar => alert(`PODE SAIR PRA ${lugar}`);

  return (
    <div>
      <Filho notificarSaida={notificar} />
    </div>
  );
};
