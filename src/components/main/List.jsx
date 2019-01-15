import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Col, Container, Row} from 'reactstrap';

export default class List extends React.Component {
  state = {
    lesson: [
      {
        name: 'Web',
        icon: '',
        description: '',
      },
      {
        name: 'Web',
        icon: '',
        description: '',
      },
      {
        name: 'Web',
        icon: '',
        description: '',
      },
      {
        name: 'Web',
        icon: '',
        description: '',
      },
      {
        name: 'Web',
        icon: '',
        description: '',
      },
    ],
  };
  render() {
    return (
      <Container>
        <Row className="mx-md-5 justify-content-center">
          {this.state.lessons.map(lesson => {
            return (
              <Col>
                <FontAwesomeIcon icon={lesson.icon} />
                <hr />
                <h3>{lesson.name}</h3>
                <p>{lesson.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
