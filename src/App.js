import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';
import ReactGa from 'react-ga'
function App() {

  useEffect(() =>{
    ReactGa.initialize('G-P04P4JM9GS')

    //to report page view
    //another comment
    ReactGa.pageview('/main')
  },[])

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
