import React, { useState } from "react";
import Popup from "reactjs-popup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import event from "../images/event.png";
import place from "../images/place.png";
import price from "../images/price1.png";
import calendar from "../images/calendar.png";
import Events from "./Events";
import Reservation from "./Reservation";
import between from "../images/between.png"
const Evenmt = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (
        <Container fluid>
            <Container fluid className="section-one-event">
                <Container>
                    <div className="top-event">
                        <Row>
                            <h1>Evenement numéro 1</h1>
                        </Row>
                        <Row id="details">
                            <div className="details">
                                <div className="icon"> <img src={place} /></div>
                                <div><p>Beb El Khadhra</p> </div>
                            </div>
                            <img src={between} className="between" />
                            <div className="details">
                                <div className="icon"><img src={calendar} /></div>
                                <div><p>27 février 2021</p> </div>
                            </div>
                        </Row>
                        <Row className="img-event">
                            <img src={event} />
                        </Row>
                        <Row className="bottom">
                            <Col className="description">
                                <span>Description</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                                Ut enim ad minim veniam, quis nostrud exercitation ullamc
                                Lorem ipsum dolor sit amedolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore. <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                            Ut enim ad minim veniam, quis nostrud e sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore <br />  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                            Ut enim ad minim veniam, quis nostrud e sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                            Ut enim ad minim veniam, quis nostrud exercitation ullamc
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                        </p>
                            </Col>
                            <Col className="btn-popup">
                                <div>
                                    <div className="details">
                                        <div className="icon"><img src={calendar} /></div>
                                        <div><p>27 février 2021</p> </div>
                                    </div>
                                    <div className="details">
                                        <div className="icon"><img src={price} /></div>
                                        <div><p>Gratuit</p> </div>
                                    </div>
                                </div>
                                <Popup contentStyle={{ width: "auto", height: "auto", borderRadius: "24px", backgroundColor: "#EFF0F8" }}
                                    className="popup-reservation"
                                    trigger={
                                        <button className="btn-reserver">
                                            Réservez votre place
                                            </button>
                                    }
                                    modal
                                    position="right center"
                                    closeOnDocumentClick
                                    onClose={closeModal}
                                >
                                    {close => (
                                        <>

                                            <a className="close" onClick={close}>
                                                &times;
        </a>
                                        </>
                                    )}
                                    <Reservation />

                                </Popup>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>

            <Events />
        </Container>
    );
};

export default Evenmt;
