import React, { Component } from 'react';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home section-container">
        <div className="home-section-title">hello world.</div>
        <div className="home-item">
          <p>welcome. please take a look around.</p>
        </div>
      </div>
    );
  }
}