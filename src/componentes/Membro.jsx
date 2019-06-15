import React from "react";

export default props => (
  <div>
    {props.nome}
    <strong> {props.sobrenome} </strong>
    {props.idade}
  </div>
);
