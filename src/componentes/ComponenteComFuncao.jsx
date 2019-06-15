import React from "react";

const aprovados = ["L", "H", "C"];

export default props => {
  const gerarItens = item => {
    return item.map(item => <li>{item}</li>);
  };

  return <ul>{gerarItens(aprovados)}</ul>;
};

// export default props => {
//   const gerarItens = item => {
//     return item.map(item => <li>{item}</li>);
//   };

//   return <ul>{gerarItens(aprovados)}</ul>;
// };

// const aprovados = ["A", "B", "C"];

// export default props => {
//   const gerarItens = item => {
//     return item.map(item => <li>{item}</li>);
//   };

//   return <ul>{gerarItens(aprovados)}</ul>;
// };
