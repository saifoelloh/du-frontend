import React from 'react';
import {Button, Col, Row} from 'reactstrap';

export default class Hero extends React.Component {
  render() {
    return (
      <Row className="mx-0 h-100">
        <Col
          md="5"
          className="bg-dark text-white d-flex justify-content-center align-items-center flex-column p-md-5 text-center">
          <h2>Doscom University</h2>
          <p>
            Amet porro alias ad quibusdam quidem. Id non temporibus quae dolores
            commodi Minima commodi aut ab nesciunt corrupti? Adipisci animi
            nihil quo natus corrupti.
          </p>
          <Button href="#list" outline color="primary" size="lg">
            More
          </Button>
        </Col>
        <Col md="7" className="hero" />
      </Row>
    );
  }
}
