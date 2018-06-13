import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
    <div>
    <div className = "mainHeader">
         <img src={require('../logo.png')} alt="shelfie-logo" />
         <h1 className = 'title'>SHELFIE</h1>
    </div>
    <div className = "link-wrap">
      <Link to = "/bins/A" className = "A" ><h2>Shelf A</h2></Link>
      <Link to = "/bins/B" className = "B"><h2>Shelf B</h2></Link>
      <Link to = "/bins/C" className = "C"><h2>Shelf C</h2></Link>
      <Link to = "/bins/D" className = "D"><h2>Shelf D</h2></Link>
    </div>
    </div>
    )
    }
}