import React, { Component } from "react";

class List extends Component {
  render() {
    const { picture, searchParam } = this.props;
    return (
      <React.Fragment>
        <div class="text-center">
          <h2>{searchParam ? searchParam + " Pictures" : "All Pictures"}</h2>
        </div>
        <div className="photo-container">
          <ul className="m-2">
            {picture.map(picture => {
              return (
                <li key={picture.id}>
                  <img src={picture.img} alt={picture.pitureType} />
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default List;
