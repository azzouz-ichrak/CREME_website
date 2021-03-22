import React from "react"
import Slider from "react-slick"
import metouia from './images/metouia-logo.png'
const Partenaires = ()=> {
    
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
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
  );
}

export default Partenaires