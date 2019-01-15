import React from 'react';

import Hero from './Hero.jsx';
import NavBar from './NavBar';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
      </div>
    );
  }
}
