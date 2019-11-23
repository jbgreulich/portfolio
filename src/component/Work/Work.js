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
          <p className="short-description">{project.shortDesc}</p>
        </li>
      );
    });
  };

  render() {
    const { show, project } = this.state;

    return (
      <div className="work section-container">
        <div className="section-item project-desktop">
          <div className="timeline-content">
            <span>recent projects</span>
            <ul className="timeline">
              {this.renderEvents()}
            </ul>
          </div>     
        </div>
        <div className="section-title">work.</div>
        <Modal onClose={this.showModal} show={show} project={project} />

        <div className="project-mobile">
          {this.renderEvents()}
        </div>
      </div>
    );
  }p
}