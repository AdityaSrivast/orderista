import React, { Component } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import '../landing/landing.css';
import './login.css';
import rest_back from '../../images/rest_back.jpg';

class Login extends Component {
  state = {
    role: 'user',
    username: '',
    password: ''
  }
  handleChange = name => event => {
    this.setState({[name]: event.target.value });
  };
  componentDidMount() {
    this.setState({ role: this.props.match.params.who });
  }
  render() {
    console.log(this.state.role);
    const { role, username, password } = this.state;
    return (
      <section className="landing-section login-section">
        <img src={rest_back} alt="Orderista" />
        <Paper className="form">
          <h3>Orderista</h3>
          <form onSubmit={this.Login}>
            <TextField
              id="outlined-name"
              label={role === 'user' ? "Username" : "Restaurant Name"}
              value={username}
              onChange={this.handleChange('username')}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-name"
              type="password"
              label="Password"
              value={password}
              onChange={this.handleChange('password')}
              margin="normal"
              variant="outlined"
            />
            <br/><br/>

<Button variant="contained" color="primary">Login</Button>

          </form>
        </Paper>
      </section>
    );
  }
}

export default Login;
