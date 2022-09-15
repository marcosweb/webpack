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
            return { ...this.state, mensagem: { msg: '', variant: '' } };
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
                    <Alert
                        dismissible
                        show={this.state.mensagem?.msg?.length > 0}
                        onClose={this.close}
                        variant={this.state.mensagem?.cor}>
                        <Alert.Heading>
                            Seu IMC é {this.state.imc}
                        </Alert.Heading>
                        <hr />
                        <p>{this.state.mensagem?.msg}</p>
                    </Alert>
                </Container>
            </>
        );
    }
}

export default App;
