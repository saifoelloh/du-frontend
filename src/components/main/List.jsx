import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Col, Container, Row} from 'reactstrap';

export default class List extends React.Component {
  state = {
    lessons: [
      {
        name: 'Web Dasar',
        icon: ['fab', 'html5'],
        lesson: 'HTML5, CSS, Javascript',
        desc: 'Hello world lorem ipsum dolor amet bla',
      },
      {
        name: 'Web Lanjut',
        icon: ['fab', 'hotjar'],
        lesson: 'PHP, Code Igniter',
        desc: 'Hello world lorem ipsum dolor amet bla',
      },
      {
        name: 'Android',
        icon: ['fab', 'android'],
        lesson: 'XML, StyleSheet, Java',
        desc: 'Hello world lorem ipsum dolor amet bla',
      },
      {
        name: 'Jaringan',
        icon: ['fas', 'satellite-dish'],
        lesson: 'XML, StyleSheet, Java',
        desc: 'Hello world lorem ipsum dolor amet bla',
      },
      {
        name: 'Game',
        icon: ['fas', 'gamepad'],
        lesson: 'XML, StyleSheet, Java',
        desc: 'Hello world lorem ipsum dolor amet bla',
      },
    ],
  };

  render() {
    return (
      <div className="py-md-5 bg-primary d-flex flex-column justify-content-center align-items-center daftar">
        <h1 className="text-center mb-md-5">Apa Yang Kita Pelajari ?</h1>
        <Container>
          <Row className="justify-content-center align-items-center">
            {this.state.lessons.map((item, key) => {
              return (
                <Col key={key} md="4" className="my-md-3 kotak">
                  <FontAwesomeIcon
                    className="kotak-item-1 tengah"
                    icon={item.icon}
                    size="6x"
                  />
                  <div className="kotak-item-2 d-flex flex-column justify-content-center align-items-center">
                    <h3>{item.name}</h3>
                    <p className="text-muted">{item.lesson}</p>
                  </div>
                  <Container className="kotak-item-3 text-justify mt-md-3">
                    <p>{item.desc}</p>
                  </Container>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
