import React, { Component } from "react";
import Buttons from "./buttons";
import List from "./list";

import "./snap.css";
import SnapShotForm from "./snapShotForm";
class SnapShot extends Component {
  inputValue = React.createRef();
  state = {
    picture: [
      {
        id: 1,
        pitureType: "Mountains",
        img:
          "https://farm66.staticflickr.com/65535/50812760036_5d94f74d24_m.jpg"
      },
      {
        id: 2,
        pitureType: "Beaches",
        img:
          "https://farm66.staticflickr.com/65535/50812252478_165f151557_m.jpg"
      },
      {
        id: 3,
        pitureType: "Birds",
        img:
          "https://farm66.staticflickr.com/65535/50813283401_dcb1a5c663_m.jpg"
      },
      {
        id: 4,
        pitureType: "Food",
        img:
          "https://farm66.staticflickr.com/65535/50813461761_24bd072aa6_m.jpg"
      }
    ],
    searchParam: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchParam = this.inputValue.current.value;
    this.setState({ searchParam });
  };

  fetch = searchParam => {
    this.inputValue.current.value = "";
    this.setState({ searchParam });
  };

  render() {
    const { picture: pictures, searchParam } = this.state;
    var picture = searchParam
      ? pictures.filter(p => p.pitureType === searchParam)
      : pictures;
    return (
      <React.Fragment>
        <div className="col-md-8 offset-2">
          <SnapShotForm onSubmit={this.handleSubmit} value={this.inputValue} />
          <Buttons fetch={this.fetch} />
          <List searchParam={searchParam} picture={picture} />
        </div>
      </React.Fragment>
    );
  }
}

export default SnapShot;
