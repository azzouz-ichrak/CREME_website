import React from "react"
import Slider from "react-slick"
import metouia from '../images/metouia-logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import underTitle from '../images/under-title.png'

const Partenaires = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="partenaires" className="section-partenaires">
      <Container>
        <Row ><h2>Ils nous font confiance</h2></Row>
        <Row> <img src={underTitle} /></Row>

        <Slider {...settings}>
          <div>
            <img src={metouia} alt="metouia" />
          </div>
          <div>
            <img src={metouia} alt="metouia" />
          </div>
          <div>
            <img src={metouia} alt="metouia" />
          </div>
          <div>
            <img src={metouia} alt="metouia" />
          </div>
          <div>
            <img src={metouia} alt="metouia" />
          </div>
          <div>
            <img src={metouia} alt="metouia" />
          </div>
          <div>
            <img src={metouia} alt="metouia" />
          </div>
          <div>
            <img src={metouia} alt="metouia" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Partenaires