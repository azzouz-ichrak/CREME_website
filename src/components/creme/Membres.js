import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import underTitle from '../images/under-title.png'
import membre1 from '../images/membre1.png'
import lien from '../images/lien-linkedin.png'
import team_01 from '../images/team/team_01.jpg'
import team_02 from '../images/team/team_02.jpg'
import team_03 from '../images/team/team_03.jpg'
import team_04 from '../images/team/team_04.jpg'
import linkedin from '../images/linkedin.png'

const Membres = () => {
    return (
        <div className="section-membres">
        <Container fluid id="team">
            <Container>
            <Row><h2>Membre Du Bureau Exécutif</h2></Row>
            <Row>
            <Col xl="3" lg="3" md="6" sm="12"ms="12" className="one-team">
                   <img src={team_01} alt="Team metco" />
                    <div className="descr">
                        <h4>John Portman</h4>
                        <p>Manager</p>
                        <span className="social-media">
                            <img src={linkedin} alt="linkedin" />
                        </span>
                    </div>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12"ms="12" className="one-team">
                   <img src={team_02} alt="Team metco" />
                    <div className="descr">
                        <h4>John Portman</h4>
                        <p>Manager</p>
                        <span className="social-media">
                            <img src={linkedin} alt="linkedin" />
                        </span>
                    </div>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12"ms="12" className="one-team">
                   <img src={team_03} alt="Team metco" />
                    <div className="descr">
                        <h4>John Portman</h4>
                        <p>Manager</p>
                        <span className="social-media">
                            <img src={linkedin} alt="linkedin" />
                        </span>
                    </div>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12"ms="12" className="one-team">
                   <img src={team_04} alt="Team metco" />
                    <div className="descr">
                        <h4>John Portman</h4>
                        <p>Manager</p>
                        <span className="social-media">
                            <img src={linkedin} alt="linkedin" />
                        </span>
                    </div>
                </Col>
            
                <Col xl="3" lg="3" md="6" sm="12"ms="12" className="one-team">
                   <img src={team_01} alt="Team metco" />
                    <div className="descr">
                        <h4>John Portman</h4>
                        <p>Manager</p>
                        <span className="social-media">
                            <img src={linkedin} alt="linkedin" />
                        </span>
                    </div>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12"ms="12" className="one-team">
                   <img src={team_02} alt="Team metco" />
                    <div className="descr">
                        <h4>John Portman</h4>
                        <p>Manager</p>
                        <span className="social-media">
                            <img src={linkedin} alt="linkedin" />
                        </span>
                    </div>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12"ms="12" className="one-team">
                   <img src={team_03} alt="Team metco" />
                    <div className="descr">
                        <h4>John Portman</h4>
                        <p>Manager</p>
                        <span className="social-media">
                            <img src={linkedin} alt="linkedin" />
                        </span>
                    </div>
                </Col>
                <Col xl="3" lg="3" md="6" sm="12"ms="12" className="one-team">
                   <img src={team_04} alt="Team metco" />
                    <div className="descr">
                        <h4>John Portman</h4>
                        <p>Manager</p>
                        <span className="social-media">
                            <img src={linkedin} alt="linkedin" />
                        </span>
                    </div>
                </Col>
            </Row>
            </Container>
            
        </Container>
   
            { /** 
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
*/}



        </div>
    )
}

export default Membres