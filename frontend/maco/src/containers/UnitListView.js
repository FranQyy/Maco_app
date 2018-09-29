import React from "react";
import Units from "../components/Unit";
import axios from "axios";

import CustomForm from "../components/Form";

class UnitList extends React.Component {
  state = {
    units: [],
    likes: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8002/api/units/").then(res => {
      this.setState({
        units: res.data
      });
    });
    axios.get(`http://127.0.0.1:8002/api/likes/`).then(res => {
      this.setState({
        likes: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Units data={this.state.units} likes={this.state.likes} />
        <h2>Create a new item</h2>
        <CustomForm requestType="post" unitID={null} btnText="Create" />
      </div>
    );
  }
}

export default UnitList;
