import "./App.css";
import React from "react";
import axios from "axios";

//show gitub Users
const data = [
  {
    name: "sahil",
    avatar_url: "https://avatars2.githubusercontent.com/u/784144?v=4"
  },
  {
    name: "jatin",
    avatar_url: "https://avatars0.githubusercontent.com/u/1121748?v=4"
  }
];

class Form extends React.Component {
  state = {
    userName: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const res = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(res.data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={event =>
                this.setState({ userName: event.target.value })
              }
            />

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

function Card(props) {
  return (
    <div className="git-hub-users">
      <img src={props.avatar_url} alt={props.name} />
      <span>{props.name}</span>
    </div>
  );
}
function CardList(props) {
  return (
    <div className="m-t-10">
      {props.data.map(data => (
        <Card key={data.name} {...data} />
      ))}
    </div>
  );
}

class App extends React.Component {
  state = {
    profiles: data
  };
  addNewProfiles = (profileData) => {
    // console.log(profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div className="App">
        <h4>List of GitHub Users</h4>
        <Form onSubmit={this.addNewProfiles} />
        <CardList data={this.state.profiles} />
      </div>
    );
  }
}
export default App;
