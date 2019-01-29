import React from 'react';
import {Button, Col, Container, Progress, Row} from 'reactstrap';

function Kelas(props) {
  return (
    <Row
      className="mx-0 justify-content-center align-items-center bg-primary"
      style={{minHeight: '75vh'}}>
      <Col md={8} className="border-right">
        <Container>
          <h2 className="text-white text-center mb-md-5">
            <strong>Sisa Kuota</strong>
          </h2>
          <Row className="h-100">
            {props.kelas.map((datum, key) => {
              return (
                <Col key={key} md={6} className="mb-md-3">
                  <h4 className="text-muted">{datum.nama}</h4>
                  <Progress
                    value={25 - datum.jumlah}
                    style={{height: '20px'}}
                    className="border"
                    color="success">
                    {25 - datum.jumlah}
                  </Progress>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Col>
      <Col md={4}>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-white">
            <strong>Daftar</strong>
          </h2>
          <Button color="info" size="lg" href="/register">
            <strong>Daftar</strong> Sekarang
          </Button>
        </Container>
      </Col>
    </Row>
  );
}

export default Kelas;
