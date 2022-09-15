import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { calcularImc, diagnostico } from "../imc";

class FormImc extends React.Component {

    calcular = () => {
        const peso = document.querySelector("#formPeso").value;
        const altura = document.querySelector("#formAltura").value;
        const imc = calcularImc(peso, altura).toFixed(1);
        const mensagem = diagnostico(imc)

        const info = { imc, mensagem };
        this.props.funcaoRetorno(info)
    };

    render() {
        return (
            <>
                <h2>{this.props.titulo || 'Preencha o formulário'}</h2>

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
                        Calcular
                    </Button>
                </Form>
            </>
        );
    }
}

export default FormImc;
