import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import underTitle from '../images/under-title.png'
import membre1 from '../images/membre1.png'
import membre2 from '../images/membre2.png'
import membre3 from '../images/membre3.png'
import lien from '../images/lien-linkedin.png'

const Membres = () => {
    return (
        <div className="section-membres">
            <Container>
                <Row ><h2>Membre Du Bureau Exécutif</h2></Row>
                <Row> <img src={underTitle} /></Row>
                <Row id="membres">
                    <Col sm={3} xs={6} xs={6} className="membre">
                        <div className="membre-image" style={{ backgroundImage: `url(${membre1})` }} >
                            <div className="membre-coordonnee">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={6} className="membre">
                        <div className="membre-image" style={{ backgroundImage: `url(${membre2})` }} >
                            <div className="membre-coordonnee">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={6} className="membre">
                        <div className="membre-image" style={{ backgroundImage: `url(${membre3})` }} >
                            <div className="membre-coordonnee">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={6} className="membre">
                        <div className="membre-image" style={{ backgroundImage: `url(${membre1})` }} >
                            <div className="membre-coordonnee">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={6} className="membre">
                        <div className="membre-image" style={{ backgroundImage: `url(${membre1})` }} >
                            <div className="membre-coordonnee">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Membres