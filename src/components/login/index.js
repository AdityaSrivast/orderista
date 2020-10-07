import React, { Component, useState } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import '../landing/landing.css';
import './login.css';
import rest_back from '../../images/rest_back.jpg';

const Login = (props) => {
  let [role,setRole]=useState(props.match.params.who)
  let [username,setUsername]=useState('')
  let [password,setPassword]=useState('')

  const handleUsername = () => event => {
    setUsername(event.target.value)
  }

  const handlePassword = () => event => {
    setPassword(event.target.value)
  }
    return (
      <section className="landing-section login-section">
        <img src={rest_back} alt="Orderista" />
        <Paper className="form">
          <h3>Orderista</h3>
          <form onSubmit={Login}>
            <TextField
              id="outlined-name"
              label={role === 'user' ? "Username" : "Restaurant Name"}
              value={username}
              onChange={handleUsername()}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-name"
              type="password"
              label="Password"
              value={password}
              onChange={handlePassword()}
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

export default Login;
