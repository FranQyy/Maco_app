import React from "react";
import Units from "../components/Unit";
import axios from "axios";

class UnitList extends React.Component {
  state = {
    units: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8002/api/").then(res => {
      this.setState({
        units: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return <Units data={this.state.units} />;
  }
}

export default UnitList;
