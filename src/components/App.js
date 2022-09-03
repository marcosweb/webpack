import React from "react";
import { Alert, Container } from "react-bootstrap";
import Form from "./Form";

class App extends React.Component {
    
    render() {
        return (
        <>    
            <Container>
                <h2>Meu componente.</h2>
            </Container>
            <Container>
                <Alert variant="success">
                    Nayra Brenda
                </Alert>
            </Container>
            <Container>
                <Form />
            </Container>
        </>
        )
    }
}

export default App