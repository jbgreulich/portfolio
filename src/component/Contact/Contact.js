import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contactItem">
          <p>like what you see? let's chat.</p>
          <a href="mailto:jessica@greulich.me" class="contactInfo" title="email address">jessica@greulich.me</a>
          <br></br><br></br>
          <a href="tel:843-868-1495" class="contactInfo" title="phone number">843.868.1495</a>
        </div>
        <div className="sectionName">contact.</div>
      </div>
    );
  }
}