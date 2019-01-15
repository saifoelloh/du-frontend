import React from 'react';
import {Col, Row} from 'reactstrap';
import './Main.css';

export default class Hero extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col
            md="5"
            className="bg-dark text-white d-flex justify-content-center align-items-center flex-column p-md-5 text-center">
            <h2>Doscom University</h2>
            <p>
              Amet porro alias ad quibusdam quidem. Id non temporibus quae
              dolores commodi Minima commodi aut ab nesciunt corrupti? Adipisci
              animi nihil quo natus corrupti.
            </p>
            <a href="" className="my-md-3">
              More
            </a>
          </Col>
          <Col md="7" className="hero" />
        </Row>
      </div>
    );
  }
}
