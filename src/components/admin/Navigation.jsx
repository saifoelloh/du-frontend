import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';

export default class Navigation extends React.Component {
  state = {
    isOpen: false,
    menu: [
      {
        name: 'User',
        link: `/admin/${this.props.admin._id}/user`,
      },
      {
        name: 'Profile',
        link: `/admin/${this.props.admin._id}`,
      },
      {
        name: 'Logout',
        link: `/admin/${this.props.admin._id}`,
      },
    ],
  };

  render() {
    return (
      <Navbar>
        <NavbarBrand>Doscom University</NavbarBrand>
        <NavbarToggler onClick={this.props.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.state.menu.map((datum, key) => (
              <NavItem>
                <NavLink key={key} href={datum.link}>
                  {datum.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
