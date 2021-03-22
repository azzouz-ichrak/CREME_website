import React from 'react';
import banner from '../images/banner.png'
import Carousel from 'react-bootstrap/Carousel'


const CarouselNews = ()=>{
  
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Les M'TAOUAS</h3>
            <p>Un phénomène de solidarité à toute épreuve et qui mérite d'être généralisé.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Les M'TAOUAS</h3>
            <p>Un phénomène de solidarité à toute épreuve et qui mérite d'être généralisé.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Les M'TAOUAS</h3>
            <p>Un phénomène de solidarité à toute épreuve et qui mérite d'être généralisé.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
}
export default CarouselNews;