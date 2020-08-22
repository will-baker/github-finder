import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    // make request to api when component loads here
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

        <h1>Hello from react</h1>
      </div>

      // Has to have one parent element

      // if dont want app div - just h1/h2, replace <div> with <React.fragment>
    );
  }
}

export default App;
