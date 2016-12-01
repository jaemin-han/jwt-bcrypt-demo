import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      signup: {
        username: '',
        password: ''
      }
    }
  }

  trackSignup(e) {
    // console.log(e.target.parentElement.children[0])
    console.log(this.state)
    let inputs = e.target.parentElement.children
    this.setState({
      signup: {
        username: inputs[0].value,
        password: inputs[1].value
      }
    })
  }

  postSignup(e) {
    console.log('posting!')
    fetch('/user/signup/', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password
      }),
    })
    .then(() => {
      console.log('it posted')
    })
    .catch(error => console.log(err))
  }

  render() {
    return(
      <div>
        <Signup
          trackSignup={this.trackSignup.bind(this)}
          postSignup={this.postSignup.bind(this)}
        />
        <Login />
      </div>
    )
  }
}
