import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-item">
          <h1>like what you see? let's chat.</h1>
          <p>
            email me:<a href="mailto:jessica@greulich.me" className="contact-info" title="email address">jessica@greulich.me</a>
          </p>
          <p>
            call me:<a href="tel:843-868-1495" className="contact-info" title="phone number">843.868.1495</a>
          </p>
        </div>
        <div className="section-name">contact.</div>
      </div>
    );
  }
}