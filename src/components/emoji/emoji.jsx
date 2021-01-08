import React, { Component } from "react";
import emojiList from "./emojiList.json";
class Emoji extends Component {
  state = {
    emoji: [],
    searchParam: ""
  };

  componentDidMount() {
    this.setState({ emoji: emojiList });
  }

  handleChange = ({ currentTarget: Input }) => {
    console.log(Input.value);
    this.setState({ searchParam: Input.value });
  };

  render() {
    const { emoji: emojis, searchParam } = this.state;
    var emoji = emojis.filter(f =>
      searchParam ? f.keywords.includes(searchParam) : emojis
    );
    return (
      <React.Fragment>
        <div className="col-md-12">
          <div className="m-2">
            <form className="form-inline">
              <div className="form-group">
                <label htmlFor="search">Search : </label>
                <input
                  type="text"
                  className="form-control"
                  value={searchParam}
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>

          {emoji.map(e => {
            return (
              <div className="col-md-12 alert alert-warning">
                {e.symbol} {e.title}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Emoji;
