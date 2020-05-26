import React from 'react';
import Dashboard from "./components/Dashboard";
import Header from "./components/Project/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
function App() {
  return (
    <div>
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
