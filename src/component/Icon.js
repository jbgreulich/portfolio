import React, { Component } from 'react';

import classNames from 'classnames';

import { babelIconAbout, babelIconModal, couchIconAbout, couchIconModal, mochaIconAbout, mochaIconModal, sqliteIconAbout, sqliteIconModal, webpackIconAbout, webpackIconModal } from './icons';

export default class Icon extends Component {
  renderIcon = () => {
    const {displayIcon} = this.props;

    const styles = classNames('fab', {
      'fa-html5': displayIcon === 'html5',
      'fa-css3-alt': displayIcon === 'css3',
      'fa-bootstrap': displayIcon === 'bootstrap',
      'fa-js': displayIcon === 'javascript',
      'fa-react': displayIcon === 'react',
      'fa-vuejs': displayIcon === 'vue',
      'fa-js-square': displayIcon === 'nodejs',
      'fa-node-js': displayIcon === 'expressjs',
      'fa-npm': displayIcon === 'npm',
      'fa-git-alt': displayIcon === 'git',
    });

    switch (displayIcon) {

      // *about page icons* //
      case 'babel-about': return <img className='fab modal-icon' src={babelIconAbout}></img>;
      case 'couchdb-about': return <img className='fab modal-icon' src={couchIconAbout}></img>;
      case 'mocha-about': return <img className='fab modal-icon' src={mochaIconAbout}></img>;
      case 'sqlite-about': return <img className='fab modal-icon' src={sqliteIconAbout}></img>;
      case 'webpack-about': return <img className='fab modal-icon' src={webpackIconAbout}></img>;

      // *modal icons* //
      case 'babel': return <img className='fab modal-icon' src={babelIconModal}></img>;
      case 'couchdb': return <img className='fab modal-icon' src={couchIconModal}></img>;
      case 'mocha': return <img className='fab modal-icon' src={mochaIconModal}></img>;
      case 'sqlite': return <img className='fab modal-icon' src={sqliteIconModal}></img>;
      case 'webpack': return <img className='fab modal-icon' src={webpackIconModal}></img>;
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