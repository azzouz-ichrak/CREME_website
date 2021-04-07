import React from 'react';
import Popup from 'reactjs-popup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import event from '../images/event.png'
import place from '../images/place.png'
import price from '../images/price1.png'
import calendar from '../images/calendar.png'
import Events from './Events'
import Reservation from './Reservation'
const Evenmt = () => {
    return (
        <Container fluid>

            <Container fluid className="section-one-event">
                <Container>
                    <Row>
                        <Col>
                            <Row><h2>Eevenement 1</h2></Row>
                            <Row className="icon">
                                <Col ><img src={calendar} /></Col>
                                <Col><p className="date">27 février 2021</p></Col>
                            </Row>
                            <Row className="icon">
                                <Col><img src={place} /></Col>
                                <Col><p>Beb El Khadhra</p></Col>
                            </Row>
                            <Row className="icon">
                                <Col><img src={price} /></Col>
                                <Col><p>Gratuit</p></Col>
                            </Row>
                            <Row className="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc</p>
                            </Row>
                            <Row >
                                <Popup className="popup-reservation" trigger={<button className="btn-reserver"> Réservez votre place</button>}
                                    modal position="right center" closeOnDocumentClick>
                                    <Reservation />
                                </Popup>

                            </Row>

                        </Col>
                        <div className="event-img">
                            <img src={event} />
                        </div>
                    </Row>

                </Container>
            </Container>

            <Events />
        </Container>
    )
}

export default Evenmt