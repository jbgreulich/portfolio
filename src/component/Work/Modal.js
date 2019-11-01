import React, { Component } from "react";

import PropTypes from "prop-types";

import "./Modal.css";

export default class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    const {project} = this.props;

    return (
      <div className="background">
        <div className="modal">
          <button className="close" onClick={this.onClose}>close</button>
          <h2 className="project">Project: {project.name}</h2>
          <div className="project-about">About</div>
          <div>
            {project.longDesc}
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
