import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import underTitle from '../images/under-title.png'
import membre1 from '../images/membre1.png'
import lien from '../images/lien-linkedin.png'

const Membres = () => {
    return (
        <div className="section-membres">
            <Container>
                <Row ><h2>Membre Du Bureau Exécutif</h2></Row>
                <Row> <img src={underTitle} /></Row>
                <Row>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
                                <p className="membre-coordonnee-nom">Ahmed</p>
                                <p className="membre-coordonnee-fonction">Directeur Général</p>
                                <p className="membre-coordonnee-lien"><a href=""><img src={lien} alt="linkedin" /></a></p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} xs={3}>
                        <div className="membre">
                            <img src={membre1} alt="Avatar" className="image" />
                            <div className="filter"></div>
                            <div className="middle">
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