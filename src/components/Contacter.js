import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import underTitle from '../components/images/under-title.png'
import place from '../components/images/place.png'
import phone from '../components/images/phone.png'
import msg from '../components/images/email.png'


const Contacter = () => {
    return (
        <Container fluid className="section-contact">
            <Container>

                <Row>
                    <Col className="coordonnees">
                        <div className="top">
                            <h2>Contactez-Nous</h2>
                            <img className="underTitle" src={underTitle} />
                            <p>Nous sommes ouverts à toute suggestion ou simplement pour discuter.</p>
                        </div>
                        <div>
                            <Row>
                                <img src={phone} /><p>(+216) 70 000 000 </p>
                            </Row>
                            <Row>
                                <img src={msg} /><p>contact@creme.tn</p>
                            </Row>
                            <Row>
                                <img src={place} /><p>Place ALI Belhouane, Bab El Khadra Tunis 1006</p>
                            </Row>
                        </div>
                    </Col>
                    <Col className="form">
                        <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Nom" />
                            <Form.Control size="lg" type="email" placeholder="Email" />
                            <Form.Control size="lg" as="textarea" placeholder="Message" rows={5} />
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

export default Contacter