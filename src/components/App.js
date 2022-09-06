import React from "react";
import { Alert, Container } from "react-bootstrap";
import FormImc from "./FormImc";

class App extends React.Component {
  render() {
    return (
      <>
        <Container>
          <h2>Cálculo de IMC</h2>
        </Container>

        {/* <Container>
                <Alert variant="success">
                    Nayra Brenda
                </Alert>
            </Container> */}

        <Container>
          <FormImc title="Calcule agora!" buttonLabel="Salvar" />
        </Container>

        <Container>
          <FormImc title="Vamos calcular o IMC" buttonLabel="Gravar" />
        </Container>
      </>
    );
  }
}

export default App;
