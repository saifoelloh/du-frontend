import * as axios from 'axios';
import React from 'react';

import Contact from './Contact.jsx';
import Hero from './Hero.jsx';
import Kelas from './Kelas.jsx';
import Lesson from './Lesson.jsx';
import List from './List.jsx';
import Place from './Place.jsx';

export default class Home extends React.Component {
  state = {
    kelas: [],
  };
  getData = () => {
    axios
      .get('https://doscomdu.herokuapp.com/api/kelas')
      .then((res) => {
        console.log(res);
        this.setState({
          kelas: res.data,
        });
      })
      .catch((err) => console.error(err.response));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Hero />
        <List />
        <Lesson />
        <Place />
        <Kelas kelas={this.state.kelas} style={{minHeight: '80vh'}} />
        <Contact />
      </div>
    );
  }
}
