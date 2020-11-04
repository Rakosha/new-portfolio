import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';
import ReactGa from 'react-ga'
function App() {

  useEffect(() =>{
    ReactGa.initialize('G-L7M52K0674')

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
