import React, { Component } from 'react';

import Modal from "./Modal";

import './Work.css';

const projects = [
  {
    name: "color library",
    shortDesc: "i am short",
    longDesc: "i am loooooooooooooooooong",
  },
  {
    name: "2",
    shortDesc: "i am short",
    longDesc: "i am loooooooooooooooooong",
  },
  {
    name: "3",
    shortDesc: "i am short",
    longDesc: "i am loooooooooooooooooong",
  },
  {
    name: "4",
    shortDesc: "i am short",
    longDesc: "i am loooooooooooooooooong",
  },
  {
    name: "5",
    shortDesc: "i am short",
    longDesc: "i am loooooooooooooooooong",
  },
  {
    name: "6",
    shortDesc: "i am short",
    longDesc: "i am loooooooooooooooooong",
  },
  {
    name: "7",
    shortDesc: "i am short",
    longDesc: "i am loooooooooooooooooong",
  },
];

export default class Work extends Component {
  state = {
    show: false
  };

  showModal = e => {
    console.log(e);
    this.setState({
      show: !this.state.show
    });
  };

  handleShowModal = (e, project) => {
    this.showModal(e);
  };

  renderModal = (project, index) => {
    return <Modal onClose={this.showModal} show={this.state.show} project={project} />;
  };

  renderEvents = () => {
    return projects.map((project, index) => {
      return (
        <li className="event" key={index}>
          <button onClick={() => this.handleShowModal(e, project)}>
            {project.name}
          </button>
          {this.renderModal(project, index)}
          <br></br>
          <p>{project.shortDesc}</p>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="work">
        <div className="work-item">
          <h2>show your work:</h2>
          <div className="timeline-content"> 
            <ul className="timeline">
              {this.renderEvents()}
              {/* <li className="event">
                <button onClick={e => {
                  this.showModal(e);
                }}>color scheme
                </button>
                <p>random color generator + color scheme</p>
              </li>
              <li className="event">
                <button onClick={e => {
                  this.showModal(e);
                }}>ravenous
                </button>
                <p>search for restaurants using the Yelp API</p>
              </li>
              <li className="event">
                <button onClick={e => {
                  this.showModal(e);
                }}>boss machine
                </button>
                <p>an API to serve info to a management app</p>
              </li>
              <li className="event">
                <button onClick={e => {
                  this.showModal(e);
                }}>choreBot
                </button>
                <p>a simple .js game</p>
              </li>
              <li className="event">
                <button onClick={e => {
                  this.showModal(e);
                }}>lodash capstone
                </button>
                <p>re-create methods from the lodash library</p>
              </li>
              <li className="event">
                <button onClick={e => {
                  this.showModal(e);
                }}>colmar academy
                </button>
                <p>html and css final project</p>
              </li> */}
            </ul>
          </div>     
        </div>
        <div className="section-name">work.</div>
      </div>
    );
  }
}