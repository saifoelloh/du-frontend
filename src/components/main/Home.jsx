import React from 'react'

import Hero from './Hero.jsx'
import LessonLeft from './LessonLeft.jsx'
import LessonRight from './LessonRight.jsx'
import List from './List.jsx'
import NavBar from './NavBar'

export default class Home extends React.Component {
  state = {
    lessons: [
      {
        id: 1,
        name: 'Web Dasar',
        desc:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        icon: ['fab', 'html5'],
      },
      {
        id: 2,
        name: 'Web Lanjut',
        desc:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        icon: ['fab', 'hotjar'],
      },
      {
        id: 3,
        name: 'Android',
        desc:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        icon: ['fab', 'android'],
      },
      {
        id: 4,
        name: 'Jaringan',
        desc:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        icon: ['fab', 'html5'],
      },
      {
        id: 5,
        name: 'Game',
        desc:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        icon: ['fas', 'gamepad'],
      },
    ],
  }
  render() {
    return (
      <div>
        <div className="d-flex flex-column" style={{height: '100vh'}}>
          <NavBar />
          <Hero />
        </div>
        <List />
        {this.state.lessons.map((datum, key) => {
          return datum.id % 2 ? (
            <LessonLeft key={key} data={datum} />
          ) : (
            <LessonRight key={key} data={datum} />
          )
        })}
      </div>
    )
  }
}
