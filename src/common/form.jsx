import React, { Component } from "react";
import Joi from "joi-browser";
class Form extends Component {
  state = {
    account: {},
    errors: {}
  };
  render() {
    return <div></div>;
  }

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
    empName: Joi.string().required()
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) {
      this.setState({ errors });
      return;
    }
    this.setState({ errors: {} });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    const errors = {};
    if (error) {
      const errArray = error.details;
      for (let err of errArray) {
        //   console.log(err.path[0]);
        errors[err.path[0]] = err.message;
      }
      //   errArray.map(err => (errors[err.path[0]] = err.message));
    }
    // console.log(errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ currentTarget: Input }) => {
    const account = this.state.account;
    account[Input.name] = Input.value;
    console.log(account.username);
    this.setState({ account });
  };

  renderInput(label, name, type) {
    const { account, errors } = { ...this.state };
    return (
      <div className="form-group">
        <label htmlFor="username">{label}</label>
        <input
          className="form-control"
          id={name}
          name={name}
          type={type}
          value={account[name]}
          onChange={this.handleChange}
        />
        {errors[name] ? (
          <div className="alert alert-danger">{errors[name]}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
  renderbutton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }
}

export default Form;
