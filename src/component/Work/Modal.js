import React, { Component } from "react";

import Icon from '../Icon';

import PropTypes from "prop-types";

import "./Modal.css";

export default class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  renderIcons = () => {
    const {project} = this.props;

    return project.tech.map((tech, index) => {
      console.log(tech);
      return (
        <Icon displayIcon={tech} key={index} />
      )
    });
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    const {project} = this.props;

    return (
      <div className="background">
        <div className="modal">
          <div className="modal-content">
            <div className="modal-left">
              <div className="project-info">
                <p>{project.name}</p>
                <div className="project-icons">
                  {this.renderIcons()}
                </div>
              </div>
            </div>
            <div className="modal-right">
              <div className="modal-right-close">
                <button className="close" onClick={this.onClose}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-right-about">
                <div className="project-about">
                  {project.longDesc}
                </div>
                <div className="project-sites">
                  {project.demo && <span><a href={project.demo} target="_blank"><i className="fas fa-desktop"></i>site</a></span>}
                  <span><a href={project.code} target="_blank"><i className="fab fa-github"></i>code</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
