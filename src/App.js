import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Routes from "./Routes";
import { ScrollToTop } from "./Components";



class App extends React.Component {

  

  render(){
  return (
    
     <Router >
     <ScrollToTop/>
     <Routes />
     
     </Router>
    
  
    
  )
  }
}

export default App;
