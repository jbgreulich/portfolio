import React, { Component } from 'react';

import Icon from '../Icon';

import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="section-container">
        <div className="about section-item">
          <h1>hi, jess here.</h1>
          <p className="about-description">i'm a software developer based in charleston, sc.</p>

          <p>stuff i've used:</p>
          <div className="about-icons">

            <div className="tooltip">
              <Icon displayIcon='html5' />
              <span className="tooltip-text">html5</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='css3' />
              <span className="tooltip-text">css3</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='bootstrap' />
              <span className="tooltip-text">bootstrap</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='javascript' />
              <span className="tooltip-text">javascript</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='react' />
              <span className="tooltip-text">react</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='vue' />
              <span className="tooltip-text">vue.js</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='webpack-about' />
              <span className="tooltip-text">webpack</span>
            </div>

            <div className="tooltip">
              <Icon displayIcon='babel-about' />
              <span className="tooltip-text">babel</span>
            </div>

            <div className="tooltip">
              <Icon displayIcon='nodejs' />
              <span className="tooltip-text">node.js</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='npm' />
              <span className="tooltip-text">npm</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='expressjs' />
              <span className="tooltip-text">express.js</span>
            </div>

            <div className="tooltip">
              <Icon displayIcon='mocha-about' />
              <span className="tooltip-text">mocha</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='couchdb-about' />
              <span className="tooltip-text">couchdb</span>
            </div>

            <div className="tooltip">
              <Icon displayIcon='sqlite-about' />
              <span className="tooltip-text">sqlite3</span>
            </div>
            
            <div className="tooltip">
              <Icon displayIcon='git' />
              <span className="tooltip-text">git</span>
            </div>
            
          </div>
          
          <div className="about-more">
          <p>want to know more? check out my:</p>
            <ul className="about-items">
              <li className="about-item"><a href="https://github.com/jbgreulich" target="_blank">github</a></li>
              <li className="about-item"><a href="https://www.codecademy.com/profiles/jgreulich" target="_blank">codecademy</a></li>
              <li className="about-item"><a href="https://drive.google.com/file/d/1M3UgtP7JOYYW7X_W4OrVyQkL8CLYwred/view?usp=sharing" target="_blank">resume</a></li>
              <li className="about-item"><a href="https://www.linkedin.com/in/jessgreulich/" target="_blank">linkedin</a></li>
            </ul>
          </div>
        </div>

        <div className="section-title">about.</div>
      </div>
    );
  }
}
