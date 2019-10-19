import React, { Component } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './landing.css';
import rest_back from '../../images/rest_back.jpg';

const Landing = () => {
  return (
    <Grid container className="landing-section">
      <img src={rest_back} alt="Orderista" />
      <Paper className="form">
        <h3>Orderista</h3>
        <NavLink to="/login/admin">
          <Button variant="contained" color="primary">Login as Restaurant</Button>
        </NavLink><br />
        <NavLink to="/login/user">
          <Button variant="contained" color="primary">Login as User</Button>
        </NavLink>
      </Paper>
    </Grid>
  );
}

export default Landing;
