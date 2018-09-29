import React from "react";
import { Route } from "react-router-dom";

import UnitList from "./containers/UnitListView";
import UnitDetail from "./containers/UnitDetailView";
import Menu from "./components/Menu";

import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Menu} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/units" component={UnitList} />
    <Route exact path="/units/:unitID" component={UnitDetail} />
    <Route exact path="/signup" component={Signup} />
  </div>
);

export default BaseRouter;
