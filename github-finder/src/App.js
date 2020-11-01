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

  render() {
    return (
      <div>
        <NavBar title={'Github Finder'} />
        <Users users={this.state.users} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
