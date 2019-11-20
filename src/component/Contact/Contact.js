import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="section-container">
        <div className="section-item">
          <h2>like what you see? let's chat.</h2>
          <p className="contact-info">
            email me:<a href="mailto:jessica@greulich.me" title="email address">jessica@greulich.me</a>
          </p>
          <p className="contact-info">
            call me:<a href="tel:843-868-1495" title="phone number">843.868.1495</a>
          </p>
        </div>
        <div className="section-title">contact.</div>
      </div>
    );
  }
}