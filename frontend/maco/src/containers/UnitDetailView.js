import React from "react";
import axios from "axios";

import { Card, Button } from "antd";
import CustomForm from "../components/Form";

class UnitDetail extends React.Component {
  state = {
    unit: []
  };

  componentDidMount() {
    const unitID = this.props.match.params.unitID;
    axios.get(`http://localhost:8000/api/units/${unitID}/`).then(res => {
      this.setState({
        unit: res.data
      });
    });
  }

  handleDelete = event => {
    const unitID = this.props.match.params.unitID;
    axios.delete(`http://localhost:8000/api/units/${unitID}/`);
    this.props.history.push("/units/");
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <Card title={this.state.unit.title}>
          <p>{this.state.unit.description}</p>
        </Card>
        <CustomForm
          requestType="put"
          unitID={this.props.match.params.unitID}
          btnText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default UnitDetail;
