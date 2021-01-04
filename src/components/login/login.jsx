import React, { Component } from "react";
import Input from "./input";
import Joi, { errors } from "joi-browser";
class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string().min(3).max(10).required().label("Username"),
    password: Joi.string().required()
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(Input);
    if (errors) {
      console.log("chk");
      this.setState({ errors });
      return;
    }
    this.setState({ errors: "" });
    console.log("submitted");
  };

  /*  validate = () => {
    const errors = {};
    const account = this.state.account;
    if (account.username === "") {
      errors.username = "username is required";
    }
    if (account.password === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };
 */

  validate = () => {
    const options = { abortEarly: false }; // this will display all errors, if this is not set to false this will display error 1-1
    const { error } = Joi.validate(this.state.account, this.schema, options);
    const errors = {};
    if (error) {
      for (let err of error.details) {
        errors[err.path[0]] = err.message;
      }
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ currentTarget: Input }) => {
    const account = { ...this.state.account };
    account[Input.name] = Input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = { ...this.state };

    return (
      <div className="col-md-6 col-md-offset-3">
        <form onSubmit={this.handleSubmit}>
          <Input
            label="User Name"
            name="username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            label="Password"
            name="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
