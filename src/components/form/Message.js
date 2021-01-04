import React from "react";

class Message extends React.Component {
  state = {
    visible: false
  };

  toggleP = () => {
    const isVisible = this.state.visible;

    if (isVisible) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  };
  render() {
    return (
      <div>
        <a onClick={this.toggleP}>
          show/hide P?
        </a>
        {this.state.visible ? <p>Call +11 22 33 44 now!</p> : null}
      </div>
    );
  }
}

export default Message;
