import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Objectifs from './creme/Objectifs'
import Membres from './creme/Membres'
import Partenaires from './creme/Partenaires'
//images
import underTitle from '../components/images/under-title.png'
import imageGroup from './images/creme.png'
import missionCreme from './images/missions-creme.png'

const Creme = () => {
    return (
        <Container fluid>

            <Row id="banner-creme" className="section-creme-banner">
                <h2>Association tunisienne depuis 1983</h2>
            </Row>

            <div className="section-creme">
                <Container>
                    <Row>
                        <Col>
                            <Row><h2>CREME</h2></Row>
                            <Row><img src={underTitle} /></Row>
                            <Row>
                                <p>
                                    Nous assurons la consolidation des liens de rencontre et d’entraide
                                    en Tunisie et à l’étranger entre les originaires de la ville Metouia

                                    Le Club de Rencontre et d’Entraide Metoui, CREME, assure la consolidation des liens de rencontre et d’entraide en Tunisie et à l’étranger entre les originaires de la ville Metouia (Gouvernorat Gabes, Tunisie).
                                    CREME organise des colloques culturels, scientifiques et socio-économiques ainsi que des visites culturelles et scientifiques des sites naturels et archéologiques
                                </p></Row>
                        </Col>
                        <Col>
                            <Row className="image-creme">
                                <img src={imageGroup} alt="CREME association tunisienne" />
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Col>
                    <Row><h2>CREME</h2></Row>
                            <Row><img src={underTitle} /></Row>
                            <Row className="image-creme">
                                <img src={imageGroup} alt="CREME association tunisienne" />
                            </Row>
                            <Row>
                                <p>
                                    Nous assurons la consolidation des liens de rencontre et d’entraide
                                    en Tunisie et à l’étranger entre les originaires de la ville Metouia

                                    Le Club de Rencontre et d’Entraide Metoui, CREME, assure la consolidation des liens de rencontre et d’entraide en Tunisie et à l’étranger entre les originaires de la ville Metouia (Gouvernorat Gabes, Tunisie).
                                    CREME organise des colloques culturels, scientifiques et socio-économiques ainsi que des visites culturelles et scientifiques des sites naturels et archéologiques
                                </p></Row>
                    </Col>
                    </Container> 
            </div>
            <div className="section-mission">
                <Container>
                    <Row>
                    <Col>
                            <Row className="image-creme">
                                <img src={missionCreme} alt="CREME association tunisienne" />
                            </Row>
                        </Col>
                        <Col>
                            <Row><h2>Missions</h2></Row>
                            <Row><img src={underTitle} /></Row>
                            <Row>
                                <p>
                                    Nous assurons la consolidation des liens de rencontre et d’entraide
                                    en Tunisie et à l’étranger entre les originaires de la ville Metouia

                                    Le Club de Rencontre et d’Entraide Metoui, CREME, assure la consolidation des liens de rencontre et d’entraide en Tunisie et à l’étranger entre les originaires de la ville Metouia (Gouvernorat Gabes, Tunisie).
                                    CREME organise des colloques culturels, scientifiques et socio-économiques ainsi que des visites culturelles et scientifiques des sites naturels et archéologiques
                                    </p></Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Col>
                    <Row><h2>Missions</h2></Row>
                            <Row><img src={underTitle} /></Row>
                            <Row className="image-creme">
                                <img src={missionCreme} alt="CREME association tunisienne" />
                            </Row>
                            <Row>
                                <p>
                                    Nous assurons la consolidation des liens de rencontre et d’entraide
                                    en Tunisie et à l’étranger entre les originaires de la ville Metouia

                                    Le Club de Rencontre et d’Entraide Metoui, CREME, assure la consolidation des liens de rencontre et d’entraide en Tunisie et à l’étranger entre les originaires de la ville Metouia (Gouvernorat Gabes, Tunisie).
                                    CREME organise des colloques culturels, scientifiques et socio-économiques ainsi que des visites culturelles et scientifiques des sites naturels et archéologiques
                                    </p></Row>
                    </Col>
                </Container>
            </div>

                <Objectifs />
                <Membres />
                <Partenaires /> 

        </Container>
    )
}

export default Creme