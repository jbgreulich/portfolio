import React, { Component } from 'react';

import Modal from "./Modal";
import projects from "./data";

import './Work.css';

export default class Work extends Component {
  state = {
    project: {},
    show: false
  };

  showModal = (project) => {
    this.setState({
      project: project,
      show: !this.state.show
    });
  };

  renderEvents = () => {
    return projects.map((project, index) => {
      return (
        <li className="event" key={index}>
          <button onClick={() => this.showModal(project)}>
            {project.name}
          </button>
          <br></br>
          <p>{project.shortDesc}</p>
        </li>
      );
    });
  };

  render() {
    const { show, project } = this.state;

    return (
      <div className="work">
        <div className="work-item">
          <span>showing my work</span>
          <div className="timeline-content"> 
            <ul className="timeline">
              {this.renderEvents()}
            </ul>
          </div>     
        </div>
        <div className="section-name">work.</div>
        <Modal onClose={this.showModal} show={show} project={project} />
      </div>
    );
  }
}