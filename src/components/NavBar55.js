import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import logo from './images/logo-CREME-top.png'
import phoneCall from './images/phone-call.png'
import envelope from './images/envelope.png'
import fb from './images/facebook.png'
import insta from './images/instagram.png'
import linkedin from './images/linkedin.png'
import subHover from './images/sub-menu-hover.png'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = ()=>{
  
      return (
        <div className="container-fluid">
        <div className="top">
        <div className="container" id="top">
          <div className="left">
            <div className="num-tel">
              <div className="icon"> <img src={phoneCall} alt="phone-number" /></div>
              <div>(+216) 70 000 000</div>
            </div>
            <div className="email">
              <div className="icon"> <img src={envelope} alt="email" /></div>
              <div>contact@creme.tn</div>
            </div>
          </div>
          <div className="right">
            <div className="icon"><img src={fb} alt="facebook" /></div>
            <div className="icon"><img src={insta} alt="instagram" /></div>
            <div className="icon"><img src={linkedin} alt="linkedin" /></div>
          </div>
        </div>
      </div>
      <div className="container header-menu">
          <div className="row" id="header-menu">
              <div className="logo-top">
              <Link to="/" ><img src={logo} /></Link>
              </div>
              <nav className="navbar navbar-expand-lg">
        
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="div-nav-item">
                  <Link to="/creme"className="nav-item">
                      Accueil <span className="under-menu"></span>
                  </Link>
                </div>
          <div className="dropdown">
        <div  className="div-nav-item">
            <Link to="/creme" className="nav-item dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              CREME <span className="sub-menu"><img src={subHover} /></span> <span className="under-menu"></span>
            </Link></div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to="/creme" className="dropdown-item">CREME</Link>
                <Link to="/creme" className="dropdown-item"  >Mission</Link>
                <Link to="/creme" className="dropdown-item">Objectifs</Link>
                <Link to="/creme" className="dropdown-item"  >Membre du bureau exécutif</Link>
                <Link to="/creme" className="dropdown-item">Partenariats</Link>
            </div>
        
          </div>
        
          <div className="dropdown">
          <div  className="div-nav-item">
              <Link to="/creme"className="nav-item dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Activités <span className="sub-menu"><img src={subHover} /></span>  <span className="under-menu"></span>
              </Link></div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to="/creme" className="dropdown-item">évènements</Link>
                  <Link to="/creme" className="dropdown-item"  >Projets</Link>
             
              </div>
          
            </div>
      
          <div  className="div-nav-item">
          <Link to="/creme"className="nav-item " >
              Actualités  <span className="under-menu"></span>
           </Link></div>
          <div  className="div-nav-item">
           <Link to="/creme"className="nav-item"   >
              Contactez-Nous <span className="under-menu"></span>
           </Link></div>
          <div className="div-nav-item div-nav-item-btn">
           <Link to="/creme"className="nav-item "   >
              Nous rejoindre 
           </Link></div>
        
              </div>
              </nav>
        
            </div>
            </div>
          
         
      </div>
      )
  
  }


   

export default NavBar;