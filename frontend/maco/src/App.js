import React, { Component } from "react";
import "./Assets/css/default.min.css";
import "antd/dist/antd.css";

import CustomLayout from "./containers/Layout";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

import { connect } from "react-redux";

import * as actions from "./containers/store/actions/auth";

import Header from "./components/headerComponent/Header";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {
    return (
      <div>
        <Header />
        <Router>
          <CustomLayout {...this.props}>
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
