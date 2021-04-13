import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path='/' exact></Route>
      </Switch>
      
    </Router>
    <h1>Kobi I am marrying you</h1>
    </>
  );
}

export default App;
