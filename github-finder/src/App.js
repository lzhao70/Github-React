import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Users from './Components/Users/Users';
import Alert from './Components/Alert/Alert';
import About from './Components/About/About';
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

  setAlert = (msg, classN) => {
    this.setState({
      alert: { msg: msg, classN: classN },
    });

    setTimeout(() => {
      this.setState({
        alert: null,
      });
    }, 5000);
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar title={'Github Finder'} />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/'>
                <Users
                  searchUsers={this.searchUsers}
                  users={this.state.users}
                  isLoading={this.state.isLoading}
                  setAlert={this.setAlert}
                />
              </Route>
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
