import React, { Component } from "react";
import Form from "../../common/form";

class Register extends Form {
  state = {
    account: {
      username: "",
      password: "",
      empName: ""
    },
    errors: {}
  };
  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("user Name", "username")}
          {this.renderInput("Password", "password", "password")}
          {this.renderInput("Employee Name", "empName")}
          {this.renderbutton("Save")}
        </form>
      </div>
    );
  }
}

export default Register;
