import React from "react";
import ReactDOM from "react-dom";
import Input from "./componentes/Input";
// import { CompA, AAAA } from "./componentes/Componentedois";
// import FamiliaSoares from "./componentes/FamiliaSoares";
// import Familia from "./componentes/Familia";
// import Membro from "./componentes/Membro";
// import Funcao from "./componentes/ComponenteComFuncao";
// import Pai from "./componentes/Pai";
// import Contador from "./componentes/Contador";
// import Hooks from "./componentes/Hooks";

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Input teste="oi" />
    {/* <Hooks /> */}
    {/* <Contador /> */}
    {/* <Pai /> */}
    {/* <Funcao /> */}
    {/* <Familia sobrenome="soares" idade="23">
      <Membro nome="andre" />
      <Membro nome="Lucas" />
      <Membro nome="Edu" />
    </Familia> */}
    {/* <FamiliaSoares />
    <CompA valor="Coe mlk" />
    <AAAA valor="salve quebrada" /> */}
  </div>,
  elemento
);
