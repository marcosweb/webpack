import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import calcularIMC, { diagnostico } from "../imc";



export class Formulario extends Component {

    constructor(props) {
        super(props);
    }

    calcular = (event) => {
        event.preventDefault();
        const nome = document.getElementById('formNome').value;
        const altura = document.getElementById('formAltura').value;
        const peso = document.getElementById('formPeso').value;
        const imc = calcularIMC(altura, peso);
        const info = diagnostico(imc);
        this.props.saveData({ nome, altura, peso, imc, info })
    }

    render() {
        return (
            <Form onSubmit={this.calcular}>
                <Form.Group className="mb-3" controlId="formNome">
                    <Form.Label>Qual é o seu nome?</Form.Label>
                    <Form.Control type="text" placeholder="Ex: João da Silva" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPeso">
                    <Form.Label>Seu peso?</Form.Label>
                    <Form.Control type="number" placeholder="Ex: 54" max="300" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAltura">
                    <Form.Label>Sua altura?</Form.Label>
                    <Form.Control type="number" placeholder="Ex: 1,73" step="0.01" max="2.5" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSalvar">
                    <Form.Check type="checkbox" label="Salvar cálculo" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Calcular agora
                </Button>
            </Form>
        )
    }
}

export default Formulario