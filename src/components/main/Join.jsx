import React from 'react';
import {Button, Col, Container, Row} from 'reactstrap';

const Join = (props) => {
  return (
    <Row className="mx-0 bg-primary">
      <Col>
        <h1>Sisa Kuota</h1>
        <Row>
          {props.data.map((item, key) => {
            return (
              <Col md="6">
                <Container>
                  <div className="rounded-pill">
                    <p>
                      <strong>{item.name}</strong>
                    </p>
                    <div className="rounded-pill">
                      <p>{item.kuota}/30</p>
                    </div>
                  </div>
                </Container>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <h1>Daftar</h1>
        <Button color="secondary" href="/register">
          <strong>Daftar</strong> Sekarang
        </Button>
      </Col>
    </Row>
  );
};

export default Join;
