import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Col, Container, Row} from 'reactstrap';

const LessonRight = (props) => {
  return (
    <Container className="lesson">
      <Row className="h-100">
        <Col className="d-flex justify-content-center align-items-center lesson-background">
          <FontAwesomeIcon icon={props.data.icon} size="10x" color="white" />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Container>
            <h3>{props.data.name}</h3>
            <hr />
            <p>{props.data.desc}</p>
          </Container>
        </Col>{' '}
      </Row>
    </Container>
  );
};

export default LessonRight;
