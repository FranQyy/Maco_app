import React from "react";
import { Route } from "react-router-dom";

import UnitList from "./containers/UnitListView";
import UnitDetail from "./containers/UnitDetailView";
import Menu from "./components/Menu";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Menu} />
    <Route exact path="/units" component={UnitList} />
    <Route exact path="/units/:unitID" component={UnitDetail} />
  </div>
);

export default BaseRouter;
