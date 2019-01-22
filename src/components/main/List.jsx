import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Col, Container, Row} from 'reactstrap'

export default class List extends React.Component {
  state = {
    lessons: [
      {
        id: 1,
        name: 'Web Dasar',
        icon: ['fab', 'html5'],
      },
      {
        id: 2,
        name: 'Web Lanjut',
        icon: ['fab', 'hotjar'],
      },
      {
        id: 3,
        name: 'Android',
        icon: ['fab', 'android'],
      },
      {
        id: 4,
        name: 'Jaringan',
        icon: ['fab', 'html5'],
      },
      {
        id: 5,
        name: 'Game',
        icon: ['fas', 'gamepad'],
      },
    ],
  }
  render() {
    return (
      <Container
        id="list"
        className="text-center d-flex justify-content-center align-items-center"
        style={{minHeight: '75vh'}}>
        <div>
          <h1 className="my-md-5">Daftar Kelas</h1>
          <Row className="mx-md-5 justify-content-center">
            {this.state.lessons.map((lesson, key) => {
              return (
                <Col key={key} md="4">
                  <FontAwesomeIcon icon={lesson.icon} size="6x" />
                  <hr width="60%" />
                  <h3>{lesson.name}</h3>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    )
  }
}
