import React from 'react';
import NavBar from './NavBar';

class NavBarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { active: true, label: 'Tally', href: 'http://embengineering.com/micro-front-ends-web-tools/' },
        { active: false, label: 'Statistics', href: 'https://github.com/404' }
      ],
      title: 'Web Tools'
    }
  }
  render() {
    return (
      <div style={{marginBottom: 15}}>
        <NavBar
          title={this.state.title}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default NavBarWrapper;