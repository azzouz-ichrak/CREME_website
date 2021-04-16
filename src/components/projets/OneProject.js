import React, { useState } from "react";
import Popup from "reactjs-popup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import calendar from "../images/calendar.png";

import projetIMG from "../images/projet.png"
const OneProject = () => {
    return (
        <Container fluid className="section-one-projet">
            <Container>
                <div id="projet">
                <Row>
                    <h1>Tunisian Smart Cities 1</h1>
                </Row>
                <Row>
                    <div className="details">
                        <div className="icon"><img src={calendar} /></div>
                        <div><p>27 Février 2021 - 27 Avril 2021</p> </div>
                    </div>
                </Row>
                <Row className="img-projet">
                    <img src={projetIMG} />
                </Row>
                <Row className="description">
                    <span>Description</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                        Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                    </p>
                </Row>
                </div>
            </Container>
        </Container>
    )
}
export default OneProject