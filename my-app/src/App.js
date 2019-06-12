import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';		
import './App.css';
import Homepage from './components/Homepage.js';


function App() {
  return (
    
  	<Router>
	    <Route path="/" exact component={Homepage} />
	</Router>

	
  );
}

export default App;
