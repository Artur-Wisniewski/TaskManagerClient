import React from 'react';
import Dashboard from "./components/Dashboard";
import Header from "./components/Project/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from "./components/Project/Project/AddProject";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/addProject" component={AddProject}/>
          </div>
      </Router>

  );
}

export default App;
