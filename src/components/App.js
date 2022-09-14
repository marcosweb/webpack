import React from "react";
import { Alert, Container, Button } from "react-bootstrap";
import FormImc from "./FormImc";


class App extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    callback = (result) => {
        this.setState(() => {
            return result
        });
    }

    close = () => {

        this.setState(() => {
            return { ...this.state, mensagem: '' };
        });
    }

    render() {
        return (
            <>
                <Container>
                    <FormImc
                        titulo='Cálculo de IMC'
                        funcaoRetorno={this.callback}
                    />
                </Container>
                <Container>
                    {this.state.mensagem &&
                        <Alert variant="success">
                            <p>{this.state.mensagem}</p>
                            <Button
                                variant="info"
                                onClick={this.close}>
                                Fechar
                            </Button>
                        </Alert>
                    }
                </Container>
            </>
        );
    }
}

export default App;
