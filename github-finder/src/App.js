import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Users from './Components/Users/Users';
import './App.css';
import 'typeface-nunito';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    let usersData = await axios.get('https://api.github.com/users');

    this.setState({
      users: usersData.data,
      isLoading: false,
    });
  }

  searchUsers = async (txt) => {
    this.setState({
      isLoading: true,
    });

    let usersData = await axios.get(
      `https://api.github.com/search/users?q=${txt}`
    );

    this.setState({
      users: usersData.data.items,
      isLoading: false,
    });
  };

  render() {
    return (
      <div>
        <NavBar title={'Github Finder'} />
        <Users
          searchUsers={this.searchUsers}
          users={this.state.users}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
