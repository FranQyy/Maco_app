import React from "react";
import { Route } from "react-router-dom";

import UnitList from "./containers/UnitListView";
import UnitDetail from "./containers/UnitDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={UnitList} />
    <Route exact path="/:unitID" component={UnitDetail} />
  </div>
);

export default BaseRouter;
