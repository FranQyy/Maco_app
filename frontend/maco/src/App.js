import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Welcome in Maco (React App)</h1>
    //   </div>
    // );
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Welcome in Maco (React App)!")
    );
  }
}

export default App;
