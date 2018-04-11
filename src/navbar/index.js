import React from 'react';
import ReactDOM from 'react-dom';
import NavBarWrapper from './NavBarWrapper';

class NavBar extends HTMLElement {
  get title() {
    return this.getAttribute('title') || '';
  }
  get items() {
    return JSON.parse(this.getAttribute('items') || []);
  }
  connectedCallback() {
    ReactDOM.render(<NavBarWrapper title={this.title} items={this.items} />, this);
  }
}

window.customElements.define('standard-navbar', NavBar);
