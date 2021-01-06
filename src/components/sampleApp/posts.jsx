import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
// import axios from "axios";

class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const { data: posts } = await axios.get(API_URL);
    this.setState({ posts });
  }

  handleDelete = async post => {
    const posts = this.state.posts;
    const filteredRes = posts.filter(p => p.id !== post.id);
    this.setState({ posts: filteredRes });
    try {
      const API_URL = "https://jsonplaceholder.typicode.com/pos";
      await axios.delete(API_URL + "/" + post.id);
    } catch (ex) {
      toast.error("An Unexpected error occur");
      this.setState({ posts });
    }
  };

  render() {
    const { posts } = { ...this.state.posts };
    return (
      <div className="col-md-8">
        <table className="table table-stripped">
          <thead>
            <tr>
              <td>Title</td>
              <td>body</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(post)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;
