import React from 'react';
import Banner from './Banner'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import betweenLink from './images/between-link.png'
import Tout from './projets/Tout'
import Realises from './projets/Realises'
import EnCours from './projets/EnCours'

const Projets = () => {
    const title = 'Projets'
    return (
        <Container fluid>
            <Banner title={title} />

            <Container className="section-projets">
                <Router>
                    <div id="link-projets">
                        <NavLink exact activeClassName="link-projet-active" className="link-projet" to="/activites/projets">Tout</NavLink>
                        <img src={betweenLink} />
                        <NavLink activeClassName="link-projet-active" className="link-projet" to="/activites/projets/réalisés">Réaaliés</NavLink>
                        <img src={betweenLink} />
                        <NavLink activeClassName="link-projet-active" className="link-projet" to="/activites/projets/en-cours">En cours</NavLink>
                    </div>
                    <Switch>
                        <Route exact path="/activites/projets" >
                            <Tout />
                        </Route>
                        <Route exact path="/activites/projets/réalisés" >
                            <Realises />
                        </Route>
                        <Route exact path="/activites/projets/en-cours" >
                            <EnCours />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </Container>
    )
}

export default Projets