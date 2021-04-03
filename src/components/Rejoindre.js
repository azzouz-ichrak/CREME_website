import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import underTitle from '../components/images/under-title.png'


const Rejoindre = () => {
    return (
        <Container fluid className="section-page-rejoindre">
            <Container>
                <Row>
                    <h2>l'unité fait notre force</h2>
                    <img src={underTitle} />
                </Row>
                <Row>
                    <Col>
                <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Nom" />
                            <Form.Control size="lg" type="email" placeholder="Email" />
                            <Form.Control size="lg" type="text" placeholder="Fonction" />
                            <Form.Control size="lg" type="number" placeholder="Numéro de téléphone" />


                        </Form.Group>
                        <Button  type="submit">
                        envoyer
                        </Button>
                        </Col>
                </Row>
            </Container>
        </Container>
    )
}
 
export default Rejoindre