import React, { useState, useEffect } from "react";

export default props => {
  const [contador, setcontador] = useState(100);
  const [status, setStatus] = useState("par");
  const [escrita, setEscrita] = useState("Xesque");
  const [statusEscrita, setStatusEscrita] = useState("Doly");

  useEffect(() => {
    escrita === "Xesque Dale "
      ? setStatusEscrita("Doly")
      : setStatusEscrita("Poggers");
  });
  //   useEffect(() => {
  //     escrita === "Xesque Dale "
  //       ? setStatusEscrita("Doly")
  //       : setStatusEscrita("Poggers");
  //   });

  useEffect(() => {
    contador % 2 === 0 ? setStatus("par") : setStatus("impar");
  });
  return (
    <div>
      <h2>{contador}</h2>
      <h6>{status}</h6>
      <h2>{escrita}</h2>
      <h4>{statusEscrita}</h4>
      <button onClick={() => setcontador(contador + 1)}>Inc</button>
      <button onClick={() => setcontador(contador - 1)}>Dec</button>
      <button onClick={() => setEscrita(escrita + " Dale ")}>Dale</button>
    </div>
  );
};
