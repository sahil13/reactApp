import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          value={props.value}
          onChange={props.onChange}
          type="text"
          name={props.name}
          className="form-control"
        />
      { props.error ?  <div className="alert alert-danger">{props.error}</div> : ''}
      </div>
    </React.Fragment>
  );
};

export default Input;
