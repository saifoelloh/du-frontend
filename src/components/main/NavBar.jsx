import React from 'react'
import {
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  NavLink,
} from 'reactstrap'

export default class NavBar extends React.Component {
  state = {
    isOpen: true,
    navs: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'List',
        link: '#list',
      },
      {
        name: 'About',
        link: '#about',
      },
      {
        name: 'Contact',
        link: '#contact',
      },
    ],
  }
  render() {
    return (
      <Navbar color="dark" expand="md">
        <NavbarBrand className="text-white">Doscom University</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.state.navs.map((nav, key) => {
              return (
                <NavItem key={key}>
                  <NavLink href={nav.link}>{nav.name}</NavLink>
                </NavItem>
              )
            })}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
