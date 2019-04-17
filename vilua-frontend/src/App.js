import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css'
import {
  BrowserRouter as Router,
  Route, Redirect, Link
} from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <form id='login' >
        Käyttäjätunnus
        Salasana
        
      </form>
    </div>
  )
}
const Info = () => {
  return (
    <div>
      Vilua on Viherlaakson lukion alumniyhdistys
    </div>
  )
}

const Menu = () => {
  return (
    <div className='Menu'>
      <Link className='menuLink' to="/info">Info</Link>
      <Link className='menuLink' to="/">Tapahtumat</Link>
      <Link className='menuLink' to="/login">Kirjaudu sisään</Link>
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      <Router>
        <h1>Vilua ry</h1>
        <Menu />
        <Route exact path='/login' render={() => 
          <Login />
        }/>
        <Route exact path='/info' render={() =>
          <Info /> 
        }/>
      </Router>

    </div>
  )
}

export default App;
