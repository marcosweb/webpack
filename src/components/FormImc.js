import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {calcularImc, diagnostico} from "../imc";

class FormImc extends React.Component {
  
  calcular = () => {
    const peso = document.querySelector("#formPeso").value;
    const altura = document.querySelector("#formAltura").value;
    const resultado = calcularImc(peso, altura)
    const mensagem = diagnostico(resultado)

    console.log(resultado, mensagem)

  };

  render() {
    return (
      <>
        <h3>{this.props.title}</h3>

        <Form>
          <Form.Group className="mb-3" controlId="formPeso">
            <Form.Label>Peso</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAltura">
            <Form.Label>Altura</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Button variant="primary" type="button" onClick={this.calcular}>
            {this.props.buttonLabel}
          </Button>
        </Form>
      </>
    );
  }
}

export default FormImc;
