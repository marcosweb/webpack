import React, { Component, StrictMode, setState } from 'react';
import Formulario from './Formulario';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            altura: 0,
            peso: 0,
            resultado: '',
            info: {}
        }
    }

    saveData = (data) => {
        this.setState(data)
    }

    render() {
        return (
            <StrictMode>

                <Container className="p-3">
                    <h2 className='titulo'>Cálculo de IMC</h2>
                    <Formulario saveData={this.saveData} />
                </Container>

                <Container className="p-3">
                    {this.state.imc > 0 &&
                        (<Alert key={this.state.nome} variant={this.state.info.type}>
                            <Alert.Heading>{this.state.nome}, seu IMC é {this.state.imc.toFixed(1)}</Alert.Heading>
                            <p>{this.state.info.msg}</p>
                        </Alert>)
                    }
                </Container>

            </StrictMode >
        )
    }
}
