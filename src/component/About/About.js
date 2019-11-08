import React, { Component } from 'react';

import './About.css';
import { join } from 'path';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-item">
          <h2 className="about-header">hi, jess here.</h2>
          <p className="about-body">i'm a software developer based in charleston, sc.</p>
          {/* <p>want to know more? check out my:</p>
          <div className="timeline-content">
            <ul className="timeline about-timeline">
              <li className="event"><a href="https://github.com/jbgreulich" target="_blank">github</a></li>
              <li className="event"><a href="https://www.codecademy.com/profiles/jgreulich" target="_blank">codecademy</a></li>
              <li className="event"><a href="" target="_blank">resume</a></li>
              <li className="event"><a href="https://www.linkedin.com/in/jessgreulich/" target="_blank">linkedin</a></li>
            </ul>
          </div> */}
          <p>stuff i've used:</p>
          <div className="tech-icons">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js-square"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-vuejs"></i>
            <i className="fab fa-npm"></i>
            <i className="fab fa-git"></i>
          </div>
          <p>want to know more? check out my:</p>
          <div className="timeline-content">
            <ul className="timeline about-timeline">
              <li className="event"><a href="https://github.com/jbgreulich" target="_blank">github</a></li>
              <li className="event"><a href="https://www.codecademy.com/profiles/jgreulich" target="_blank">codecademy</a></li>
              <li className="event"><a href="" target="_blank">resume</a></li>
              <li className="event"><a href="https://www.linkedin.com/in/jessgreulich/" target="_blank">linkedin</a></li>
            </ul>
          </div>
        </div>

        <div className="section-name">about.</div>
      </div>
    );
  }
}
