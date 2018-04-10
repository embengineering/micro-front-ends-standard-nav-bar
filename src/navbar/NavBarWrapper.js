import React from 'react';
import NavBar from './NavBar';

class NavBarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { active: false, label: 'Tally', href: '/Tally' },
        { active: false, label: '404 Page', href: '/404' }
      ],
      title: 'Web Tools'
    }
  }
  render() {
    return <NavBar
        title={this.state.title}
        items={this.state.items}
      />;
  }
}

export default NavBarWrapper;