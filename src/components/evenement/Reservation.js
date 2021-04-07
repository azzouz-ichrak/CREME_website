import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import underTitle from '../images/under-title.png'



const Reservation = () => {
    const [msg,setState] = useState('Réservez votre place');
    const handleClick = (e) =>{
        e.preventDefault();
        console.log(msg.message);
        setState("Votre réservation est validée. Nous vous attendons, soyez à l'heure.");
    }

    return (
        <Container className="section-reservation">
           
        
        <h1>{msg}</h1>
      <img src={underTitle} />
        <Col className="form">
                        <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Nom*" />
                            <Form.Control size="lg" type="email" placeholder="Email*" />
                            <Form.Control size="lg" type="number" placeholder="Numéro de téléphone*" />
                            <Form.Control size="lg" type="text" placeholder="Fonction" />

                        </Form.Group>
                        <Button onClick={handleClick} type="submit">
                        Réservez
                        </Button>
                    </Col>
        </Container>
    )
}
 
export default Reservation