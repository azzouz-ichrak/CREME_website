import React from 'react';
import NavBar from './components/NavBar'
//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Accueil from './components/Accueil'
import Creme from './components/Creme'
import Footer from './components/Footer'
import Evenements from './components/Evenements'
import Projets from './components/Projets'
import Contacter from './components/Contacter'
import Rejoindre from './components/Rejoindre'
import OneEvenmt from './components/evenement/OneEvenmt'
import OneProject from './components/projets/OneProject'
const Routing = () => {

  return (
    <Switch>

      <Route exact path='/'>
        <Accueil />
      </Route>
      <Route path='/home'>
        <Accueil />
      </Route>
      <Route path='/creme'>
        <Creme />
      </Route>
      <Route path='/activites/evenements'>
        <Evenements />
      </Route>
      <Route path='/activites/projets'>
        <Projets />
      </Route>
      <Route path='/contact'>
        <Contacter />
      </Route>
      <Route path='/nous-rejoindre'>
        <Rejoindre />
      </Route>
      <Route path='/event-1'>
        <OneEvenmt />
      </Route>
      <Route path='/projet-1'>
        <OneProject />
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
      <Footer />
    </>
  );


}







export default App;
