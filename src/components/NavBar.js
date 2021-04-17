import React from 'react';
import TopContact from './header/TopContact'
import { Link, NavLink } from 'react-router-dom'
import logo from './images/logo-CREME-top.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import $ from 'jquery'

const NavBar = () => {

  const handleAdd = () => {
    $("a#basic-nav-dropdown").addClass("active");
  };
  const handleRemove = () => {
    $("a#basic-nav-dropdown").removeClass("active");
  };

  return (
    <div className="container-fluid">
      <TopContact />
      <div className="header-menu">
        <Navbar className="container" id="header-menu" expand="lg">
          <Navbar.Brand> <Link to="/"><img src={logo} /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav  >
              <Nav.Link> <NavLink to="/home" onClick={handleRemove} activeClassName="active">Accueil<span className="under-menu"></span></NavLink></Nav.Link>
              <Nav.Link > <NavLink activeClassName="active" onClick={handleRemove} to="/creme" activeClassName="active">CREME<span className="under-menu"></span></NavLink></Nav.Link>

              <NavDropdown title="Activités" id="basic-nav-dropdown" >
                <NavDropdown.Item > <NavLink onClick={handleAdd} activeClassName='active' to="/activites/evenements">évènements</NavLink></NavDropdown.Item>
                <NavDropdown.Item > <NavLink onClick={handleAdd} activeClassName='active' to="/activites/projets">Projets</NavLink></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link > <NavLink activeClassName="active" onClick={handleRemove} to="/actualites" activeClassName="active">Actualités<span className="under-menu"></span></NavLink></Nav.Link>
              <Nav.Link > <NavLink activeClassName="active" onClick={handleRemove} to="/contact" activeClassName="active">Contactez-Nous<span className="under-menu"></span></NavLink></Nav.Link>
              <Nav.Link> <Link to="/nous-rejoindre" onClick={handleRemove} className="btn-rejoindre">Nous rejoindre</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default NavBar;