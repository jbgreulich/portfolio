import React, { Component } from 'react';

import Icon from '../Icon';

// import { Icon } from '@iconify/react';
// import html5 from '@iconify/icons-logos/html-5';


import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-item">
          <h2 className="about-header">hi, jess here.</h2>
          <p className="about-body">i'm a software developer based in charleston, sc.</p>

          <p className="about-stuff">stuff i've used:</p>
          <div className="tech-icons">

            <div className="tooltip">
              <i className="fab fa-html5"></i>
              <span className="tooltip-text">html5</span>
            </div>

            {/* <Icon displayIcon='html5' /> */}

            {/* <Icon className='fab' icon={html5} /> */}
            
            <div className="tooltip">
              <i className="fab fa-css3-alt"></i>
              <span className="tooltip-text">css3</span>
            </div>
            
            <div className="tooltip">
              <i className="fab fa-bootstrap"></i>
              <span className="tooltip-text">bootstrap</span>
            </div>
            
            <div className="tooltip">
              <i className="fab fa-js-square"></i>
              <span className="tooltip-text">javascript</span>
            </div>
            
            <div className="tooltip">
              <i className="fab fa-react"></i>
              <span className="tooltip-text">react</span>
            </div>
            
            <div className="tooltip">
              <i className="fab fa-vuejs"></i>
              <span className="tooltip-text">vue.js</span>
            </div>
            
            <div className="tooltip">
              <img className='fab' src='src/component/icons/webpack.svg'></img>
              <span className="tooltip-text">webpack</span>
            </div>

            <div className="tooltip">
              <img className='fab' src='src/component/icons/babel-logo-minimal.svg'></img>
              <span className="tooltip-text">babel</span>
            </div>

            {/* <Icon displayIcon='babel' /> */}

            <div className="tooltip">
              <i className="fab fa-node"></i>
              <span className="tooltip-text">node</span>
            </div>
            
            <div className="tooltip">
              <i className="fab fa-npm"></i>
              <span className="tooltip-text">npm</span>
            </div>
            
            <div className="tooltip">
              <i className="fab fa-node-js"></i>
              <span className="tooltip-text">express.js</span>
            </div>

            <div className="tooltip">
              <img className="fab" src="src/component/icons/mocha.svg"></img>
              <span className="tooltip-text">mocha</span>
            </div>
            
            <div className="tooltip">
              <img className='fab' src='src/component/icons/couchdb-icon.svg'></img>
              <span className="tooltip-text">couchdb</span>
            </div>

            <div className="tooltip">
              <img className='fab' src='src/component/icons/sqlite.svg'></img>
              <span className="tooltip-text">sqlite3</span>
            </div>
            
            <div className="tooltip">
              <i className="fab fa-git-alt"></i>
              <span className="tooltip-text">git</span>
            </div>
            
          </div>
          
          <div className="about-more">
          <p>want to know more? check out my:</p>
            <ul className="about-more-items">
              <li className="item"><a href="https://github.com/jbgreulich" target="_blank">github</a></li>
              <li className="item"><a href="https://www.codecademy.com/profiles/jgreulich" target="_blank">codecademy</a></li>
              <li className="item"><a href="https://drive.google.com/file/d/1rc1-UODs1_9_vXlu1I_ReRfxkG1Xw89d/view?usp=sharing" target="_blank">resume</a></li>
              <li className="item"><a href="https://www.linkedin.com/in/jessgreulich/" target="_blank">linkedin</a></li>
            </ul>
          </div>
        </div>

        <div className="section-name">about.</div>
      </div>
    );
  }
}
