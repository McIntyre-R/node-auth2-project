import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (

    <Router>    
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute path="/home" component={DashboardPage} />
          </Switch>          
    </Router>

  );
}

export default App;
