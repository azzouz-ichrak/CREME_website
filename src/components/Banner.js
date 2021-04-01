import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Banner = (props) => {
    return (
    <Row id="banner-creme" className="section-creme-banner">
        <h2>{props.title}</h2>
    </Row>)
}

export default Banner