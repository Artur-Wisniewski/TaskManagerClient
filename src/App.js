import React from 'react';
import Dashboard from "./components/Dashboard";
import Header from "./components/Project/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from "./components/Project/Project/AddProject";
import {Provider} from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/Project/UpdateProject";
import ProjectBoard from "./components/Project/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/Project/ProjectBoard/ProjectTask/AddProjectTask";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <Header/>
                  <Route exact path="/dashboard" component={Dashboard}/>
                  <Route exact path="/addProject" component={AddProject}/>
                  <Route exact path="/updateProject/:id" component={UpdateProject}/>
                  <Route exact path="/projectBoard/:id" component={ProjectBoard}/>
                  <Route exact path="/addProjectTask/:id" component={AddProjectTask}/>
              </div>
          </Router>
      </Provider>


  );
}

export default App;
