import React from 'react';
import phoneCall from '../images/phoneCall.png'
import envelope from '../images/envelope.png'
import fb from '../images/facebook.png'
import insta from '../images/instagram.png'
import linkedin from '../images/linkedin.png'


const TopContact = ()=>{
  
    return (
        <div className="top">
        <div className="container" id="top">
          <div className="left">
            <div className="num-tel">
              <div className="icon"> <img src={phoneCall} alt="phone-number"/></div>
              <div>(+216) 70 000 000</div>
            </div>
            <div className="email">
              <div className="icon"> <img src={envelope} alt="email" /></div>
              <div>contact@creme.tn</div>
            </div>
          </div>
          <div className="right">
            <div className="icon"><img src={fb} alt="facebook" /></div>
            <div className="icon"><img src={insta} alt="instagram"/></div>
            <div className="icon"><img src={linkedin} alt="linkedin" /></div>
          </div>
        </div>
      </div>

    )
}
export default TopContact;