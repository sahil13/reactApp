import React, { Component } from "react";

class SnapShotForm extends Component {
  render() {
    return (
      <div className="col-md-12 text-center m-2">
        <form onSubmit={this.props.onSubmit}>
          <input type="text" ref={this.props.value} name="searchParam" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SnapShotForm;
