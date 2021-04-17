import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import underTitle from '../images/under-title.png'
import imageGroup from '../images/creme.png'


const Apropos = () => {
    return (<Container className="section-apropos">
        <Row >
            <h2>CREME, Club de Rencontre et d'Entraide Metoui</h2></Row>
        <Row> <img src={underTitle} /></Row>
        <Row>
            <h3>Nous assurons la consolidation des liens de rencontre et d’entraide<br />
            en Tunisie et à l’étranger entre les originaires de la ville Metouia</h3>
        </Row>

        <Row className="section-apropos-part-2">
            <Col>
                <img src={imageGroup} alt="creme" />
            </Col>
            <Col>
                <Row>
                    <p>Depuis 1983.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <br />
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidmco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                    </p>
                </Row>
                <Row>
                    <a href="/creme" className="btn-decouvrir">
                        Découvrez notre association
                    </a>
                </Row>
            </Col>
        </Row>
        <Col id="display-mobile">
            <Row>
                <img src={imageGroup} alt="creme" />
            </Row>
            <Row>
                <p>Depuis 1983.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidmco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                    </p>
            </Row>
            <Row>
                <a href="/creme" className="btn-decouvrir">
                    Découvrez notre association
                    </a>
            </Row>
        </Col>
    </Container>)
}
export default Apropos