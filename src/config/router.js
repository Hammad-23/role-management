import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LogIn from '../vies/login'
import SignUp from '../vies/signup'

export default function App() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
         
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
