import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LogIn from '../vies/login'
import SignUp from '../vies/signup'
import DashboardCompany from '../vies/dashboardcompany'
import DashboardEmployee from '../vies/dashboardemployee'

export default function App() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/dashboardemployee">
           <DashboardEmployee/>
         </Route>
          <Route path="/dashboardcompany">
           <DashboardCompany/>
          </Route>
          <Route path="/signup">
           <SignUp/>
          </Route>
          <Route path="/">
            <LogIn/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
