import React from "react";
import { Form, Input, Button } from "antd";

import axios from "axios";

const FormItem = Form.Item;

class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, unitID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;

    switch (requestType) {
      case "post":
        return axios
          .post("http://localhost:8002/api/", {
            title: title,
            description: description
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
      case "put":
        return axios
          .put(`http://localhost:8002/api/${unitID}`, {
            title: title,
            description: description
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.unitID
            )
          }
        >
          <FormItem label="Title">
            <Input name="title" placeholder="input description" />
          </FormItem>
          <FormItem label="Description">
            <Input name="description" placeholder="input description" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
