import React from "react";
import Units from "../components/Unit";
import axios from "axios";

import { Card } from "antd";

class UnitDetail extends React.Component {
  state = {
    unit: []
  };

  componentDidMount() {
    const unitID = this.props.match.params.unitID;
    axios.get(`http://localhost:8002/api/${unitID}`).then(res => {
      this.setState({
        unit: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <Card title={this.state.unit.title}>
        <p>{this.state.unit.description}</p>
      </Card>
    );
  }
}

export default UnitDetail;
