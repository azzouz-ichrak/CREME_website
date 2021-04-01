import React from 'react';
import Banner from './Banner'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const Projets = () => {
    const title= 'Projets'
    return (
        <Container>
            <Banner title={title}/>
        
        <h1>hellow projets!!</h1>
        </Container>
    )
}
 
export default Projets