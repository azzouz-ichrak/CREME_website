import React from 'react';
import logo from './images/logo-footer.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import icons
import facebook from './images/facebook-footer.png'
import instagram from './images/instagram-footer.png'
import msg from './images/envelope-footer.png'
import linkedin from './images/linkedin-footer.png'
import phoneCall from './images/phone-call-footer.png'

const Footer = () => {
    return (
        <Container fluid id="footer">
            <Container>
                <Row className="footer-top">
                    <Col className="footer-top-logo">
                        <div><img src={logo} alt="logo creme" /></div>
                        <div><p>Club de Rencontre et d'Entraide Metouia.</p></div>
                    </Col>
                    <Col className="footer-top-navbar">
                        <Row>
                            <Col className="footer-top-navbar-1">
                                <p> <a href="/">Accueil</a></p>
                                <p><a href="/">CREME</a></p>
                                <p><a href="/">Activités</a></p>
                            </Col>
                            <Col>
                                <p><a href="/">Actualités</a></p>
                                <p><a href="/">Contact</a></p>
                                <p><a href="/">Nous rejoindre</a></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="footer-top-contact">
                        <Row>
                            <p>Suivez-nous :</p>
                        </Row>
                        <Row className="social-media">
                            <a href="https://www.facebook.com/crem.metouia/" target="_blank"><img src={facebook} alt="facebook" /></a>
                            <a href="https://www.facebook.com/crem.metouia/" target="_blank"><img src={instagram} alt="instagram" /></a>
                            <a href="https://www.linkedin.com/company/club-de-rencontre-et-d%E2%80%99entraide-metoui-creme/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                        </Row>
                        <Row>
                            <img src={msg} alt="email" />
                            <p>contact@creme.tn</p>
                        </Row>
                        <Row>
                            <img src={phoneCall} alt="phone-number" />
                            <p>(+216) 70 000 000 </p>
                        </Row>


                    </Col>
                    <Col className="footer-top-newsletter">
                        <Row>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Recevez nos dernières actualités</Form.Label>
                                    <Form.Control type="email" placeholder="Email *" />

                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    s'inscrire
                             </Button>
                            </Form>
                        </Row>
                    </Col>

                </Row>
                <Row className="footer-copyrights">
                    <p>© 2021- CREME - ALL RIGHTS RESERVED</p>
                </Row>

            </Container>
        </Container>
    )
}

export default Footer