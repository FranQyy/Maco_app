import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";

import CustomLayout from "./containers/Layout";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import UnitList from "./containers/UnitListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "Welcome in Maco (React App)!")
    // );
  }
}

export default App;
