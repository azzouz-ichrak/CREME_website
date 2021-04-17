import React from 'react';
import Row from 'react-bootstrap/Row'

const Banner = (props) => {
    return (
        <Row id="banner-creme" className="section-creme-banner">
            <h2>{props.title}</h2>
        </Row>)
}

export default Banner