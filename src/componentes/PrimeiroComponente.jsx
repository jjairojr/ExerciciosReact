import React from "react";

let isLegal = false;

export default props => (
  <div>
    <h1>{props.dale}</h1>

    <p>{isLegal ? "sim" : "nao"}</p>

    <h2>{Math.random()}</h2>
  </div>
);
