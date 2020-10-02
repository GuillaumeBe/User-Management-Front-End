import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import UpdateUser from "./pages/UpdateUser";
import Users from "./pages/Users";
import Teams from "./pages/Teams";
import CreateUser from "./pages/CreateUser";
import CreateTeam from "./pages/CreateTeam";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/user/:id">
            <UpdateUser />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/create-team">
            <CreateTeam />
          </Route>
          <Route path="/create-user">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
