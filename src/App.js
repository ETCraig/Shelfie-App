import React, { Component } from 'react';
import routes from'./Routes';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
      {routes}
      </div>
    );
  }
}