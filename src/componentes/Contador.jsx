import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: 0
  };

  maisUm = () => {
    // this.alterarNumero(+1);
    this.setState({ numero: this.state.numero + 1 });
  };

  menosUm = () => {
    // this.alterarNumero(-1);
    this.setState({ numero: this.state.numero - 1 });
  };

  alterarNumero = diferenca => {
    this.setState({ numero: this.state.numero + diferenca });
  };

  render() {
    return (
      <div>
        <div>Numero: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={() => this.alterarNumero(20)}>Inc10</button>
        <button onClick={() => this.alterarNumero(-10)}>desc10</button>
        <button onClick={this.menosUm}>Dec</button>
      </div>
    );
  }
}
