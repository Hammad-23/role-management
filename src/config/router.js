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
import EmployeeForm from '../vies/employeeform'
import ApplyJobs from '../vies/jobs'
import PostJob from '../vies/postjob'
import ViewJobs from '../vies/viewjobs'

export default function App() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/viewjobs">
           <ViewJobs/>
         </Route>
        <Route path="/postjob">
           <PostJob/>
         </Route>
        <Route path="/applyjobs">
           <ApplyJobs/>
         </Route>
        <Route path="/employeeform">
           <EmployeeForm/>
         </Route>
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
