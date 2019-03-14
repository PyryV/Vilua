import React, { useState, useEffect } from 'react';
import './App.css';

const Login = () => {
  return (
    <div>
      <form id='login' >
        Käyttäjätunnus
        Salasana
        
      </form>
    </div>
  )
}

const Menu = () => {
  return (
    <div className='Menu'>
      Main menu
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      <h1>Vilua ry</h1>
      <Menu />
    </div>
  )
}

export default App;
