import React from 'react';

import Contact from './Contact.jsx';
import Hero from './Hero.jsx';
import Lesson from './Lesson.jsx';
import List from './List.jsx';
import Place from './Place.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <List />
        <Lesson />
        <Place />
        <Contact />
      </div>
    );
  }
}
