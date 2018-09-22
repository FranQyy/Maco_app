import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";

import CustomLayout from "./containers/Layout";
import UnitList from "./containers/UnitListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <UnitList />
        </CustomLayout>
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
