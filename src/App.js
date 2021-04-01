import React from 'react';
import NavBar from './components/NavBar'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Accueil from './components/Accueil'
import Creme from './components/Creme'
import Footer from './components/Footer'
import Evenements from './components/Evenements'
import Projets from './components/Projets'



const Routing = () => {

  return (
    <Switch>

      <Route exact path='/'>
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
