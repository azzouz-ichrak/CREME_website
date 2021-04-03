import React from 'react';
import TopContact from './header/TopContact'
import { Link } from 'react-router-dom'
import logo from './images/logo-CREME-top.png'
import subHover from './images/sub-menu-hover.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {


  return (
    <div className="container-fluid">
      <TopContact />
      <div className="header-menu">
      <Navbar className="container" id="header-menu" expand="lg">
        <Navbar.Brand> <Link to="/"><img src={logo} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav  >
            <Nav.Link> <Link to="/"  activeClassName="active">Accueil<span className="under-menu"></span></Link></Nav.Link>
            <NavDropdown activeClassName='active' title="CREME" id="basic-nav-dropdown">
              <NavDropdown.Item > <Link to="/creme">CREME</Link></NavDropdown.Item>
              <NavDropdown.Item > <Link to="/creme">Mission</Link></NavDropdown.Item>
              <NavDropdown.Item > <Link to="/creme">Objectifs</Link></NavDropdown.Item>
              <NavDropdown.Item > <Link to="/creme">Membre du bureau exécutif</Link></NavDropdown.Item>
              <NavDropdown.Item > <Link to="/creme">Partenariats</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown activeClassName='active' title="Activités" id="basic-nav-dropdown">
              <NavDropdown.Item > <Link to="/activites/evenements">évènements</Link></NavDropdown.Item>
              <NavDropdown.Item > <Link to="/activites/projets">Projets</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link > <Link to="/" activeClassName="active">Actualités<span className="under-menu"></span></Link></Nav.Link>
            <Nav.Link > <Link to="/contact"  activeClassName="active">Contactez-Nous<span className="under-menu"></span></Link></Nav.Link>
            <Nav.Link> <Link to="#link" className="btn-rejoindre">Nous rejoindre</Link></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      </div>
    </div>
  )
}

export default NavBar;