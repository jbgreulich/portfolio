import React, { Component } from 'react';

import classNames from 'classnames';

export default class Icon extends Component {
  renderIcon = () => {
    const {displayIcon} = this.props;

    const styles = classNames('fab', {
      'fa-html5': displayIcon === 'html5',
      'fa-css3-alt': displayIcon === 'css3',
      'fa-js': displayIcon === 'javascript',
      'fa-react': displayIcon === 'react',
      'fa-js-square': displayIcon === 'nodejs',
      'fa-node-js': displayIcon === 'expressjs',
      'fa-npm': displayIcon === 'npm',
    });

    switch (displayIcon) {
      // case 'babel': return <object type="image/svg+xml" data="src/component/icons/babel-logo-minimal.svg"></object>;
      case 'babel': return <img className='fab modal-icon' src='src/component/icons/babel-logo-minimal-modal.svg'></img>;
      case 'couchdb': return <img className='fab modal-icon' src='src/component/icons/couchdb-icon-modal.svg'></img>;
      case 'mocha': return <img className='fab modal-icon' src='src/component/icons/mocha-modal.svg'></img>;
      case 'sqlite': return <img className='fab modal-icon' src='src/component/icons/sqlite-modal.svg'></img>;
      case 'webpack': return <img className='fab modal-icon' src='src/component/icons/webpack-modal.svg'></img>;
      default: return <i className={styles}></i>;
    }
  }

  render() {
    return (
      <div className="tooltip project-tooltip">
        {this.renderIcon()}
        <span className="tooltip-text">{this.props.displayIcon}</span>
      </div>
    )
  }
}