import React, { Component } from 'react';

import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutItem">
          <p className="aboutHeader">hi, jess here.</p>
          <br></br>
          <p className="aboutBody">i'm a software developer based in charleston, sc.</p>
        </div>
        <div className="sectionName">about.</div>
      </div>
    );
  }
}
