import React from "react";
import axios from "axios";

class Like extends React.Component {
  state = {
    likes: []
  };

  componentDidMount() {
    axios
      .get(`http://127.0.0.1:8002/api/likes/${this.props.filmID}`)
      .then(res => {
        this.setState({
          likes: res.data
        });
      });
  }

  render() {
    return (
      <div style={{ display: "inline" }}>{this.state.likes.an_apiview}</div>
    );
  }
}

export default Like;
