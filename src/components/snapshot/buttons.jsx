import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  render() {
    const { fetch } = this.props;
    return (
      <div className="col-md-12 text-center m-2">
        <Button label="Mountains" func={fetch} />
        <Button label="Food" func={fetch} />
        <Button label="Beaches" func={fetch} />
        <Button label="Birds" func={fetch} />
      </div>
    );
  }
}

export default Buttons;
