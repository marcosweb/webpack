import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class FormImc extends React.Component {
  render() {
    return (
      <Form>

        <Form.Group className="mb-3" controlId="formPeso">
          <Form.Label>Peso</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAltura">
          <Form.Label>Altura</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Button variant="primary" type="button">
          Calcular
        </Button>

      </Form>
    );
  }
}

export default FormImc;
