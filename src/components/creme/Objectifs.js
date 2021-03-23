import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import underTitle from '../images/under-title.png'


const Objectifs = ()=>{

    return(

        <div className="section-objectifs">
                <Container>
                    <Row ><h2>Nos objectifs</h2></Row>
                    <Row> <img src={underTitle} /></Row>
                    <Row>
                        <Col className="objectif-1">
                            <h3>Offrir un espace de rencontre pour les métouiens à  Tunis et à Metouia</h3>
                        </Col>
                        <Col className="objectif-2"><h3>
                            Développer un réseau d'entraide métouien
                        </h3></Col>
                        <Col className="objectif-3"><h3>
                            Organiser des événements mensuels
                        </h3></Col>
                        <Col className="objectif-4"><h3>
                            Aider dans la création des projets à Metouia
                        </h3></Col>
                    </Row>
                </Container>
            </div>
    )
}
export default Objectifs;