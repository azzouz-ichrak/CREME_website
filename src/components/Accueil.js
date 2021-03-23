import React from 'react';
import CarouselNews from './header/Carousel'
import Container from 'react-bootstrap/Container'
import underTitle from './images/under-title.png'
import imageGroup from './images/creme.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import act from './images/act.png'
import Partenaires from './creme/Partenaires'
import Objectifs from './creme/Objectifs'

const Accueil = () => {
    return (
        <Container fluid id="accueil">
            <CarouselNews />

            <Container className="section-apropos">
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
            </Container>
            <Objectifs />
            <div className="section-activites">
                <Container>
                    <Row ><h2>Nos activités</h2></Row>
                    <Row> <img src={underTitle} /></Row>
                    <Row>
                        <Col className="act-1">
                            <h2><a href="/" >évènements</a></h2>
                        </Col>
                        <Col className="act-2"><h2>
                            <a href="/" > projets</a>
                        </h2></Col>
                    </Row>
                </Container>
            </div>

            <div className="section-rejoindre">
                <Container>
                    <Row>
                        <h2>Voulez-vous nous rejoindre ?</h2>
                    </Row>
                    <Row>
                        <h2 className="btn-rejoindre"><a href="/">Nous-rejoindre</a></h2>
                    </Row>
                </Container>
            </div>
            <Container className="section-actualites">
                <Row ><h2>Nos actualités</h2></Row>
                <Row> <img src={underTitle} /></Row>
                <Row>
                    <Col className="actualite"><a href="/" >
                        <Row><img src={act} alt="actualités" /></Row>
                        <Row className="title-1"> <h4>Tunisian Smart Cities</h4></Row>
                        <Row className="title-2"><h2>Félicitations aux membres du club CREME</h2></Row>
                        <Row className="description">
                            <p>nous sommes retenus dans le programme National Tunisian Smart Cities. <br />
Bravo à tous et à M Jalel B Romdhane en particulier qui a eu cette idée pour nous encourager à adhérer à ce programme.</p>
                        </Row>
                        <Row className="plus"><p><a href="/" >Voir plus</a></p></Row>
                    </a></Col>
                    <Col className="actualite"><a href="/" >
                        <Row><img src={act} alt="actualités" /></Row>
                        <Row className="title-1"> <h4>Tunisian Smart Cities</h4></Row>
                        <Row className="title-2"><h2>Félicitations aux membres du club CREME</h2></Row>
                        <Row className="description">
                            <p>nous sommes retenus dans le programme National Tunisian Smart Cities. <br />
Bravo à tous et à M Jalel B Romdhane en particulier qui a eu cette idée pour nous encourager à adhérer à ce programme.</p>
                        </Row>
                        <Row className="plus"><p><a href="/" >Voir plus</a></p></Row>
                    </a> </Col>
                    <Col className="actualite"><a href="/" >
                        <Row><img src={act} alt="actualités" /></Row>
                        <Row className="title-1"> <h4>Tunisian Smart Cities</h4></Row>
                        <Row className="title-2"><h2>Félicitations aux membres du club CREME</h2></Row>
                        <Row className="description">
                            <p>nous sommes retenus dans le programme National Tunisian Smart Cities. <br />
Bravo à tous et à M Jalel B Romdhane en particulier qui a eu cette idée pour nous encourager à adhérer à ce programme.</p>
                        </Row>
                        <Row className="plus"><p><a href="/" >Voir plus</a></p></Row>
                    </a></Col>
                </Row>

            </Container>
      
                <Partenaires />
        </Container>

    )
}

export default Accueil