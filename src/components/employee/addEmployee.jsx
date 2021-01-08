import React, { Component } from "react";
import Joi from "joi-browser";

class AddEmployee extends Component {
  state = {
    emp: {
      empName: "",
      designation: ""
    },
    errors: {}
  };

  schema = {
    empName: Joi.string().required(),
    designation: Joi.string().required()
  };

  validateProperty = ({ name, value }) => {
    const errors = {};
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (error) {
      errors[name] = error.details[0].message;
      this.setState({ errors });
      return;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: Input }) => {
    this.validateProperty(Input);
    const emp = this.state.emp;
    emp[Input.name] = Input.value;
    this.setState({ emp });
  };
  render() {
    const { emp, errors } = this.state;
    return (
      <React.Fragment>
        <div className="m-2">
          <form onSubit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="empName">Employee Name</label>
              <input
                id="empName"
                type="text"
                className="form-control"
                name="empName"
                value={emp.empName}
                onChange={this.handleChange}
              />
              {errors.empName ? (
                <div className="alert alert-danger">{errors.empName}</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation</label>
              <input
                id="designation"
                type="text"
                className="form-control"
                name="designation"
                value={emp.designation}
                onChange={this.handleChange}
              />
              {errors.designation ? (
                <div className="alert alert-danger">{errors.designation}</div>
              ) : (
                ""
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddEmployee;
